import { v4 as uuidv4 } from "uuid";

export const getRandomId = () => {
  return uuidv4();
};

export const timeToInt = (time) => {
  const splitTime = time.split(":");
  return parseInt(splitTime[0]) + parseInt(splitTime[1]);
};
