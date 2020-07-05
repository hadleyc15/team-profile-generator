const intern = require("./lib/intern");

test("Can set school via constructor", () => {
  const testValue = "University of Utah";
  const e = new Intern("Chris", 1, "Intern", "Chris@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Chris", 1, "Intern", "Chris@gmail.com", "University of Utah");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "University of Utah";
  const e = new Intern("Chris", 1, "Intern", "Chris@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});