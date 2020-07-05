const Employee = require("./employee")

const Employee = require("./lib/employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });