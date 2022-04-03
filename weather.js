#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.sevice.js";
import { getWeather } from "./services/api.servece.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Не передан токен");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token saved successfully");
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
  try {
    const weather = await getWeather(process.env.CITY);
    console.log(weather);
  } catch (error) {
    if (error?.response?.status === 401) {
      printError("Неверный токен");
    } else if (error?.response?.status === 404) {
      printError("Не найден город");
    } else {
      printError(error.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs();
  console.log({ args });
  // if (Object.keys(args).length === 0) {
  //   console.log("Please provide a city name");
  //   return;
  // }

  if (args.h) {
    printHelp();
    return;
  }

  if (args.s) {
    console.log("Searching for city...");
  }

  if (args.t) {
    return saveToken(args.t);
  }
  getForcast();
  //Вывести погоду в заданном городе
  // getWeather(args.s);
};
initCLI();
