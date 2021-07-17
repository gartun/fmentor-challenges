import updateInfo from "../updateInfo";
import getFromStorage from "../storage/getFromStorage";
import saveToStorage from "../storage/saveToStorage";

const bypass_cors = "https://cors-anywhere.herokuapp.com/"
const BASE_URL = "https://geo.ipify.org/api/v1?apiKey=at_TBSpWJeRbgAwsNSmMWdE4KDk8B9fN";

export type LocationType = {
	country: string;
	region: string;
	city: string;
	lat: number;
	lng: number;
	timezone: string;
}

export interface Result {
	ip: string;
	as?: {
		domain?:string
	};
	location: LocationType;
	isp: string;
}

// we are making params optional as initially we are going to
// fetch the data of client's ip address.
const fetchData = async (queryKey?: string, queryValue?: string) => {
	let url = "";

	// when queryValue is undefined, we are going to use "home".
	// we define it as default in function getFromStorage 				
	let data: Result | null = getFromStorage(queryValue as string);

	if(queryKey == undefined) {
		// If there's no queryKey arg then make api call
		// with basic url, which pulls data of client's ip
		url = BASE_URL;
	} else {
		url = `${BASE_URL}&${queryKey}=${queryValue}`;	
	}

	
	try {
		
		if(!data) {
			// if we don't get data from storage, then 
			// we make a call to api
			const res: any = await fetch(url);
			data = await res.json();

			// we are using queryValue as a key, and tha data as value.
			// when queryValue is undefined, we are going to use "home".
			// we define it as default in function saveToStorage
			saveToStorage(queryValue as string, data);
		}

		updateInfo(data as Result);
	} catch(err) {
		console.log("ip hatası ", err)
	}
}

export default fetchData;