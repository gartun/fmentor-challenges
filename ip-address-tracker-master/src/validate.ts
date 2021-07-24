export default (elem: HTMLInputElement) => {
	const txt = elem.value;
	
	if(!txt || txt.trim() === "") return false;
	return true;
}