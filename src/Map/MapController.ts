import { NextFunction, Response, Request } from "express";

class MapController {
    public getMaps = async (req: Request, res: Response, next: NextFunction) => {
		try {
            let mapList = require('../../stores.json');
            res.status(200).json(mapList);
			
		} catch (e) {
			console.log(e);
			res.status(500).json({
				result: "error"
			})
		}
	}
}

export default new MapController;