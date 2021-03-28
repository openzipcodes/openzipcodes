const windicss = require("svelte-windicss-preprocess").preprocess;
const adapter = require(process.env.ADAPTER || "@sveltejs/adapter-static");
const options = JSON.stringify(process.env.OPTIONS || "{}");

module.exports = {
	preprocess: [
		windicss({
			config: "windi.config.cjs",
		}),
	],
  kit: {
    adapter: adapter(options),
    target: "#svelte",
  },
};
