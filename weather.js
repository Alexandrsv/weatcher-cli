#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
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

const saveCity = async (city) => {
  if (!city.length) {
    printError("Не передан город");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("City saved successfully");
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
  try {
    const weather = await getWeather();
    printWeather(weather);
  } catch (error) {
    if (error?.response?.status === 401) {
      printError("Неверный токен");
    } else if (
      error?.response?.status === 404 ||
      error?.response?.status === 400
    ) {
      printError("Не найден город");
    } else {
      printError(error.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs();

  if (args.h) {
    printHelp();
    return;
  }

  if (args.s) {
    return saveCity(args.s);
  }

  if (args.t) {
    return saveToken(args.t);
  }
  getForcast();
  //Вывести погоду в заданном городе
  // getWeather(args.s);
};
initCLI();
