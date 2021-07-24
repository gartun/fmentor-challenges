import createMap from "./createMap";
import validate from "./validate";
import findOutQuery from "./find-out-query/findOutQuery";
import fetchData from "./fetch-data/fetchData";
 
const inp			= document.querySelector("input") as HTMLInputElement;
const btn         	= document.querySelector("button") as HTMLButtonElement;


export let myMap = null;

declare let L: any


btn.addEventListener("click", (e: Event) => {
	e.preventDefault();
	
	const isVal = validate(inp);
	
	if(isVal) {
		const isIP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inp.value);

		const isDomain = /^[a-z0-9]+([-.][a-z0-9]+)*\.[a-z]{2,}$/i.test(inp.value);

		if(isIP) {
			fetchData("ipAddress", inp.value);
		} else if(isDomain) {
			fetchData("domain", inp.value)
		} else {
			alert("Hatalı bir ifade girdiniz...")
		}
	} else alert("Girdi alanını boş bıraktınız...")

})

document.addEventListener("DOMContentLoaded", () => {
	myMap = L.map('mapid');
	createMap(myMap)
	fetchData()
})