const { COURSE_SLUG } = require("./constants/config");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  basePath: `/courses/${COURSE_SLUG}`,
  env: {
    CHANNEL_TALK_PLUGIN_KEY: process.env.CHANNEL_TALK_PLUGIN_KEY,
  },
});
