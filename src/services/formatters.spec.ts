import { progress, title } from "./formatters";
import chalk from "chalk";

describe("progress", () => {
  it("formats the progress position", () => {
    expect(progress(0, 3)).toBe("[1/3]");
  });
});

describe("title", () => {
  it("formats the spinner title", () => {
    expect(title("file", 0, ["file"], true)).toBe(
      `${chalk.green("[1/1]")} file`,
    );
  });
});
