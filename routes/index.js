const express = require("express");
const router = express.Router();

import { renderToString } from "react-dom/server";
import App from "../public/javascripts/components/calculator"
import React from "react";

/* GET home page. */
router.get("/", function(req, res) {
  const markup = renderToString(<Calculator />);

  res.render("index", {
    title: "Express",
    markup: markup
  });
});

module.exports = router;
