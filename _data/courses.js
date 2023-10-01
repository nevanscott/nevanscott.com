const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = "https://buttonschool.com/courses.json";

  const data = await EleventyFetch(url, {
    duration: "1h", // save for 1 hour
    type: "json", // we’ll parse JSON for you
  });

  /* This returns a promise */
  return data.courses;
};
