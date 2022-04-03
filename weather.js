#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.sevice.js";

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
    console.log("Save token");
    saveKeyValue("token", args.t);
  }

  //Вывести погоду в заданном городе
};
initCLI();
