import { NextFunction, Response, Request, response } from "express";
import {getPosition, getPositions} from "./mapTools";

const mapList = require('../../stores.json');

class MapController {
    public getMaps = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json(mapList);

        } catch (e) {
            console.log(e);
            res.status(500).json({
                result: "error"
            })
        }
    }

    public getStore = (req: Request, res: Response, next: NextFunction) => {
        try {
            const key = req.params.name;
            const store = mapList.filter((store) => {
                if (store.name == key) return store;
            })
            res.status(200).json(store);

        } catch (e) {
            console.log(e);
            res.status(500).json({
                result: "error"
            })
        }
    }

    public getposition = async (req: Request, res: Response, next: NextFunction) => {
        //console.log(`api.postcodes.io/postcodes/${req.params.adress}`)
        const inputPosition = await getPosition(`${req.params.postcode}`);
        res.status(200).json(inputPosition);
    }


    public getStoreRadius = async (req: Request, res: Response, next: NextFunction) => {
        const { body: { postcode, radius } } = req;
        const postcodeArr = [];
        mapList.forEach(element => {
            postcodeArr.push(element.postcode);
        });
        const positionArr = await getPositions(postcodeArr);
        const inputPosition = await getPosition(postcode);

        res.status(200).json(inputPosition);
        // console.log(positionArr);
    }
}

export default new MapController;