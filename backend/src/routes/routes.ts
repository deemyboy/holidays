import express from "express";
import * as controller from "../controllers/controller";

export const router = express.Router();

router.use((req, res, next) => {
  // we'll use this router to return specifically JSON
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  next();
});

router.get("/", (req, res) => res.send({message:"Welcome to weather API"}));

router.get("/cities", controller.getCities);

router.get("/city/1", controller.getOneDayForecast);

router.get("/city/5", controller.getFiveDayForecast);
