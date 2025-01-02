export const overwrite = (line: string): void => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(line.concat("\n"));
};
