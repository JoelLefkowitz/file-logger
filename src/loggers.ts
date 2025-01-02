import { ProgressOptions } from "./models/ProgressOptions.model";
import { glob } from "glob";
import { overwrite } from "./effects/console";
import { since } from "./effects/timers";
import { title } from "./services/formatters";
import chalk from "chalk";
import spinners from "ora-classic";

export const logger = async (
  pattern: string,
  callback: (file: string) => Promise<string> | Promise<void>,
  { count, timer, trail }: Partial<ProgressOptions> = {},
): Promise<void> => {
  const spinner = spinners().start();
  const files = await glob(pattern, { absolute: false });

  for (const [i, file] of files.entries()) {
    spinner.text = title(file, i, files, count);

    const start = Date.now();
    const summary = await callback(file);

    const tokens = [spinner.text];

    if (summary) {
      tokens.push(chalk.cyan(summary));
    }

    if (timer) {
      tokens.push(chalk.gray(since(start).toString().concat("ms")));
    }

    if (trail) {
      overwrite(tokens.join(" "));
    }
  }

  spinner.stop();
};
