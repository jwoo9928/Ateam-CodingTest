import MapController from './MapController'
import express from "express";

const MapRouter = express.Router();


MapRouter.get("/getlist",MapController.getMaps);
MapRouter.get("/getStore/:name",MapController.getStore)


export = MapRouter;