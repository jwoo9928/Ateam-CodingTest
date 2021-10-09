import { NextFunction, Response, Request } from "express";

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
            const store = mapList.filter((store)=> {
                if(store.name == key) return store;
            })
            res.status(200).json(store);

        } catch(e) {
            console.log(e);
            res.status(500).json({
                result : "error"
            })
        }
    }
}

export default new MapController;