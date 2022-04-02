#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";

const initCLI = () => {
  const args = getArgs();
  console.log({ args });
  if (Object.keys(args).length === 0) {
    console.log("Please provide a city name");
    return;
  }

  if (args.h) {
    console.log(
      "Usage: weather -s [city]" +
        "\n" +
        "Options:" +
        "\n" +
        "-s: Search for a city" +
        "\n" +
        "-t: Save api token"
    );
    return;
  }
  if (args.s) {
    console.log("Searching for city...");
  }
  if (args.t) {
    console.log("Save token");
  }

  //Вывести погоду в заданном городе
};
initCLI();
