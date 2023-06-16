import { dateFormats } from "../constants/date"
import { getDayInfo } from "./apiService"

const api_key = "PXjG2k4gTiQT1uLnemaLCDAX3RDa7jRbL69WIROx"

export function getNeoByDate(date, onGet){
    const formattedDate = date.format(dateFormats.defaultApiFormat)

    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedDate}&end_date=${formattedDate}&api_key=${api_key}`)
    .then(res=>res.json())
    .then((data) => {
        const dayInfo = getDayInfo(data.near_earth_objects[formattedDate])
        onGet({...dayInfo, date: formattedDate})
    })
}