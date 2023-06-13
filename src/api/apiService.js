export function getDayInfo(neos){

    return neos.reduce( (value, neo) => {
        const max_diameter = neo.estimated_diameter.kilometers.estimated_diameter_max
        const distance = neo.close_approach_data[0].miss_distance.kilometers
        const speed = neo.close_approach_data[0].relative_velocity.kilometers_per_hour

        if(value.max_estimated_diameter < max_diameter) value.max_estimated_diameter = max_diameter

        if(neo.is_potentially_hazardous_asteroid) value.number_of_potentially_hazardous ++

        if(value.closest_NEO === null) value.closest_NEO = distance
        else if (value.closest_NEO > distance) value.closest_NEO = distance
       
        if(value.fastest_NEO === null) value.fastest_NEO = speed
        else if (value.fastest_NEO > speed) value.fastest_NEO = speed
        
        return value
    }, {
        max_estimated_diameter: 0,
        number_of_potentially_hazardous: 0,
        closest_NEO: null,
        fastest_NEO: null
    })

}