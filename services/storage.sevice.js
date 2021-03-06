import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

const TOKEN_DICTIONARY = {
  token: "token",
  city: "city",
};

const isExist = async (path) => {
  try {
    await promises.access(path);
    return true;
  } catch (error) {
    return false;
  }
};

const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath, "utf8");
    data = JSON.parse(file);
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath, "utf8");
    data = JSON.parse(file);
  }
  return data[key];
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };
