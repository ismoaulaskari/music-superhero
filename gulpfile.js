const fs = require("fs");

if (process.env.NODE_ENV !== "production") {
  fs.readdirSync("./gulp")
  .filter(file => (/\.(js)$/i).test(file))
  .map(file => require("./gulp/" + file));
} else {
  require("./gulp/build:prod");
}
