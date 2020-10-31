import React, { useEffect, useState } from 'react'
import { NavBar } from '../components'
import Country from '../services/country'


export const Home = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        Country.getCountries()
            .then(response => {
                console.log(response)
            })
    }, [])


    return (
        <div>
            <NavBar />
            Home Page
        </div>
    )
}