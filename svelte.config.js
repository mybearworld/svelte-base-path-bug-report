import adapter from "@sveltejs/adapter-static";

const dev = process.argv.includes("dev");

const config = {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    paths: {
      base: dev ? "" : "/svelte-base-path-bug-report",
    },
  },
};

export default config;
