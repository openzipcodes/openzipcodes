import { init, cities } from "../_cities";

export const get = async () => {
  await init();
  return {
    body: Object.keys(cities).map((zipcode) => ({
      zipcode,
      ...cities[zipcode],
    })),
  };
};
