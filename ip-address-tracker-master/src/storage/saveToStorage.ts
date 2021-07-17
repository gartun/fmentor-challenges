
export default (query: string = "home", data: any) => {
	const last20query = JSON.parse(localStorage.getItem("last20query") as string) || [];
	const last20Info = JSON.parse(localStorage.getItem("last20Info") as string) || {};

	if(Object.keys(last20Info).length < 0 || Object.keys(last20Info).indexOf(query) === -1) {
		last20Info[query] = data;

		if(Object.keys(last20Info).length >= 21) {
			// if there are more than 20 queries
			// delete the oldest one. We are using query
			// array because the insertions order is crucial
			// to delete the oldest.
			const keyToDelete = last20query[0];

			delete last20Info[keyToDelete];

			// update query array as well
			last20query.shift()
		}

		localStorage.setItem("last20Info", JSON.stringify(last20Info));
	}

	if(last20query.indexOf(query) === -1) {
		last20query.push(query);
		localStorage.setItem("last20query", JSON.stringify(last20query));
	}
	
}