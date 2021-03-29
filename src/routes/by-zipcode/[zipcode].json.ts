import { init, cities } from "../_cities";

export const get = async ({ params }) => {
  await init();
  if (params.zipcode in cities) {
    return {
      body: cities[params.zipcode],
    };
  }

  return {
    status: 404,
  };
};
