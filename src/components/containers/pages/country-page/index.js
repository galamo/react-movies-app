import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import WithLoading from "../../hoc/isLoading"

const API_COUNTRIES_URL = "https://restcountries.eu/rest/v2/name"

export default function CountryPage() {
    const params = useParams()
    const { country: countryParam } = params;
    const firstCountry = getFirstCountry(countryParam)
    function getFirstCountry(country) {
        const [firstCountry] = country.split(",")
        return firstCountry
    }
    const [country, setCountry] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCountryDetails(firstCountry)
    }, [])

    async function getCountryDetails(country) {
        try {
            const { data } = await axios.get(`${API_COUNTRIES_URL}/${country}`)
            setCountry(data[0] || data)
        } catch (ex) {
            console.log(ex)
        } finally {
            setIsLoading(false)
        }
    }

    const CountryWithLoading = WithLoading(CountryComponent)
    return <div>
        <CountryWithLoading isLoading={isLoading} country={country} />
    </div>
}

function CountryComponent(props) {
    if (!props.country) return null
    return <div>
        <img src={props.country.flag} style={{ border: "1px solid black" }} />
    </div>
}