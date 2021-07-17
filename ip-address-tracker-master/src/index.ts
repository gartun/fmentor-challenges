import isIp from "is-ip";
import isValidDomain from "is-valid-domain";

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
		const isIP = isIp(inp.value);
		const isDomain = isValidDomain(inp.value);

		if(isIP) {
			fetchData("ipAddress", inp.value);
		} else if(isDomain) {
			fetchData("domain", inp.value)
		} else {
			alert("Hatalı bir ifade girdiniz...")
		}
	}
})

document.addEventListener("DOMContentLoaded", () => {
	myMap = L.map('mapid');
	createMap(myMap)
	fetchData()
})