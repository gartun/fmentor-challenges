import getFromStorage from "./getFromStorage";
import saveToStorage from "./saveToStorage";


describe("saving to storage and getting from storage", () => {
  let dummyIp = "23.23.23.23";
  let dummyData = {
    ip: dummyIp,
    location: {
      city: "Ankara"
    }
  };

  it("saves to storage and gets from storage", () => {

    saveToStorage(dummyIp, dummyData);

    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(JSON.parse(localStorage.__STORE__["last10query"]).length).toBe(1);
    expect(JSON.parse(localStorage.__STORE__["last10Info"])[dummyIp]).toEqual(dummyData);

    expect(JSON.parse(localStorage.__STORE__["last10Info"])[dummyIp]).toEqual(getFromStorage(dummyIp));
  });

  it("doesn't add to storage if already exists", () => {

    saveToStorage(dummyIp, dummyData);

    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(JSON.parse(localStorage.__STORE__["last10query"]).length).toBe(1);
  });

  it("doesn't add more than 10", () => {
    for(let i = 0; i < 16; i++) {
      saveToStorage(dummyIp.replace(/23/g, i), dummyData);
    }

    expect(JSON.parse(localStorage.__STORE__["last10query"]).length).toBe(10);
    expect(JSON.parse(localStorage.__STORE__["last10query"])[9]).toBe("15.15.15.15");

  })
}) 