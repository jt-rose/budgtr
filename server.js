const express = require("express");

const main = async () => {
  const app = express();

  app.listen(3000, () => {
    console.log("app listening on port 3000");
  });
};

main().catch((err) => console.log(err));
