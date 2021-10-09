import axios from 'axios'

export const getPositions = async (postcodeArr: object) => {
    const result = await axios.post('https://api.postcodes.io/postcodes', {
        "postcodes": postcodeArr
    }).then((response) => {
        const positionArr = [];
        response["data"]["result"].forEach((element) => {
            console.log(element.result);
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