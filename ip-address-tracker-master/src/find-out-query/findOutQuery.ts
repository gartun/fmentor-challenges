export default (txt: string) => {
	const isIP = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(txt);

	return isIP;
}