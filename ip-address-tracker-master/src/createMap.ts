function createMap(myMap: any, coords: Number[] = [72, 44]) : void {
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(myMap);
}

export default createMap;