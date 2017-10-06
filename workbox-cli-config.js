module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{html,json,ico,png,js,css,map}"
  ],
  "swDest": "build/service-worker.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ]
};
