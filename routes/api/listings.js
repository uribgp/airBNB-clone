const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const axios = require('axios');

const mashkey = process.env.MASHVISOR_KEY

router.get("/",
asyncHandler(async function (_req, res, _next) {
  const apiURL = "https://api.mashvisor.com/v1.1/client/city/properties/"
      const apikey = mashkey
      const state = _req.query.state
      // _req.params. then key for state
      const city = _req.query.city
      // _req.params. then key for city
      const completeURL = `${apiURL}${state}/${city}`
        const response = await axios({
            url:completeURL,
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apikey
            },
        });
        // console.log(response.data)
        // console.log(response.data)
        // console.log('~~~')
        // console.log(response.ok)
        // res.data passed into dispatch
        if (response.status === 200) {
          res.send({data: response.data});
          return;
        }
        res.send({data: []})
        // sends empty array back to show there's no results
    })
  );

  module.exports = router;