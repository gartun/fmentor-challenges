

import { Result } from "../fetch-data/fetchData";

export default (query: string = "home"): Result | null => {
	const last20Info = JSON.parse(localStorage.getItem("last20Info") as string) || {};

	if(Object.keys(last20Info).length < 1 || Object.keys(last20Info).indexOf(query) === -1) {
		return null;
	}

	return last20Info[query];
}