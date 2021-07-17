import updateMap from "./updateMap";
import { Result } from "./fetch-data/fetchData";

export default (data: Result) => {
	const ipRes 		= document.getElementById("ip-result") as HTMLElement;
	const cityRes 		= document.getElementById("city-result") as HTMLElement;
	const timezoneRes 	= document.getElementById("timezone-result") as HTMLElement;
	const ispRes 		= document.getElementById("isp-result") as HTMLElement;

	ipRes.innerText = data.ip;
	cityRes.innerText = data.location.city + ", " + data.location.region;
	timezoneRes.innerText = data.location.timezone;
	ispRes.innerText = data.isp;

	updateMap([data.location.lat, data.location.lng]);
}