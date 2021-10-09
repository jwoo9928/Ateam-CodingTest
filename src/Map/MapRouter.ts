import MapController from './MapController'
import express from "express";

const MapRouter = express.Router();


MapRouter.get("/getlist",MapController.getMaps);
MapRouter.get("/getstore/:name",MapController.getStore);
MapRouter.get("/getposition/:postcode",MapController.getposition);
MapRouter.post("/getstoreradius",MapController.getStoreRadius);


export = MapRouter;