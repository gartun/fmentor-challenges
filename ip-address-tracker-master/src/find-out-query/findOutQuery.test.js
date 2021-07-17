import findOutQuery from "./findOutQuery.ts";

test("returns true", () => {
  const validIPs = [
    "1.1.1.1",
    "123.1.4.5",
    "32.345.23.23"
  ];

  validIPs.forEach(ip => {
    expect(findOutQuery(ip)).toBeTruthy();
  })
});

test("returns false", () => {
  const invalidIPs = [
    "we.we.we.we",
    "hglskjflflajjf",
    "www.facebook.com",
  ];

  invalidIPs.forEach(ip => {
    expect(findOutQuery(ip)).toBeFalsy();
  })
})
