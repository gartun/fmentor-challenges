import { myMap } from "./index";

export default (coords: Number[]) => {
	myMap.setView(coords, 15);

	L.marker(coords).addTo(myMap);
}