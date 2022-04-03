import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.green("SUCCESS") + " " + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgMagenta("HELP")}
      Без параметров - вывод погоды
      -s [CITY]lkz для установки города
      -t [API_KEY] для сохранения API_KEY 
      -h для вывода помощи
      `
  );
};

export { printError, printSuccess, printHelp };
