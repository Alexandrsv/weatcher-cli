#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.sevice.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Token saved successfully");
  } catch (error) {
    printError(error.message);
  }
};

const initCLI = () => {
  const args = getArgs();
  console.log({ args });
  if (Object.keys(args).length === 0) {
    console.log("Please provide a city name");
    return;
  }

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

  //Вывести погоду в заданном городе
};
initCLI();
