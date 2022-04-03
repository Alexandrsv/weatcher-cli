import chalk from "chalk";
import dedent from "dedent-js";
import { getIcon } from "./api.servece.js";

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
      -s [CITY] для установки города
      -t [API_KEY] для сохранения API_KEY 
      -h для вывода помощи
      `
  );
};

const printWeather = (weather) => {
  console.log(
    dedent`${chalk.bgMagenta("WEATHER")}
      Город: ${chalk.green(weather.name)}
      ${getIcon(weather.weather[0].icon)} ${weather.weather[0].description}
      Температура: ${weather.main.temp}С, ощущается как ${
      weather.main.feels_like
    }С
      Влажность: ${weather.main.humidity}
      Скорость ветра: ${weather.wind.speed}
      `
  );
};

export { printError, printSuccess, printHelp, printWeather };
