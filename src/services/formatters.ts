import chalk from "chalk";

export const progress = (i: number, total: number): string =>
  `[${i + 1}/${total}]`;

export const title = (
  file: string,
  i: number,
  files: string[],
  count?: boolean,
): string =>
  count ? [chalk.green(progress(i, files.length)), file].join(" ") : file;
