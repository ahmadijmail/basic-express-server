const logger = require("../middlewares/logger");

describe("Logger Middleware.....", () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  test("It Is Logging", () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  test("Test for next", () => {
    expect(next).toHaveBeenCalled();
  });
});
