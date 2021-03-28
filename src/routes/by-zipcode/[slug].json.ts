import { init, cities } from "../_cities";

export const get = async ({ params }) => {
  await init();
  if (params.slug in cities) {
    return {
      body: cities[params.slug],
    };
  }

  return {
    status: 404,
  };
};
