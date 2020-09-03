const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Listing } = require("../../db/models");
const router = express.Router();

router.get("/api/listings",
    asyncHandler(async function (_req, res, _next) {
      const listings = await Listing.findAll();
      res.json({ listings });
    })
  );

  //fetch goes here