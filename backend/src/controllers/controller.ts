import { Request, Response } from "express";
// import { connected } from "process";
// import { start } from "repl";
// import { cities } from '../database/database';
import { servGet5DaysForecast } from "../services/fiveDay";
import { servGet1DayForecast } from "../services/oneDay";
import { servGetCityList } from "../services/cities";


export const getCities = async (req: Request, res: Response) => {
  try {
    const data = await servGetCityList();
    res.json(data).status(200);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};


export const getFiveDayForecast = async (req: Request, res: Response) => {
  try {

    if (!req.query.id) {
      res.status(404).json("City ID required.");
    } else {

      const data = await servGet5DaysForecast(req.query.id.toString());

      if (!data) {
        res.status(404).json("Unknown city.");
      } else {
        res.status(200).json(data);
      }
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }

};

export const getOneDayForecast = async (req: Request, res: Response) => {

  try {

    if (!req.query.id) {
      res.status(404).json("City ID required.");
    } else {

      const data = await servGet1DayForecast(req.query.id.toString());
      if (!data) {

        res.status(404).json("Unknown city.");
      } else {
        res.status(200).json(data);
      }
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }

};

export default servGetCityList;
