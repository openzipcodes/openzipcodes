const adapter = require(process.env.ADAPTER || "@sveltejs/adapter-static");
const options = JSON.stringify(process.env.OPTIONS || "{}");

module.exports = {
  kit: {
    adapter: adapter(options),
    target: "#svelte",
  },
};
