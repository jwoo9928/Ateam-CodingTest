import axios from 'axios'

export const getPositions = async (postcodeArr: object) => {
    const result = await axios.post('https://api.postcodes.io/postcodes', {
        "postcodes": postcodeArr
    }).then((response) => {
        const positionArr = [];
        response["data"]["result"].forEach((element) => {
            if (element.result) {
                positionArr.push({
                    "postcode": element.result.postcode,
                    "longitude": element.result.longitude,
                    "latitude": element.result.latitude
                })
            }
        })
        return positionArr;
    })
    return result;
}

export const getPosition = async (postcode: string) => {
    const result = await axios.get(`https://api.postcodes.io/postcodes/${postcode}`)
        .then((response) => {
            const data = response.data["result"];
            return {
                "postcode" : data["postcode"],
                "longitude": data["longitude"],
                "latitude": data["latitude"]
            }
        })
    return result;
}

export const ShopCalDistance = (startCoords : object, destCoords : object) => {
    let startLatRads = degreesToRadians(startCoords["latitude"]);
    let startLongRads = degreesToRadians(startCoords["longitude"]);
    let destLatRads = degreesToRadians(destCoords["latitude"]);
    let destLongRads = degreesToRadians(destCoords["longitude"]);

    let Radius = 6371; //지구의 반경(km)
    let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
                    Math.cos(startLatRads) * Math.cos(destLatRads) *
                    Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
    
}


function degreesToRadians(degrees : number) {
    let radians = (degrees * Math.PI)/180;
    return radians;
}