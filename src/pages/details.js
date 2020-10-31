import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core';
import { NavBar, CountyCard } from '../components'
import Country from '../services/country'
import classes from '../App.module.css'


export const Details = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [country, setCountry] = useState(null)
    const { countryName } = useParams();

    useEffect(() => {

        Country.getCountryByName(countryName)
            .then(response => {
                if (response?.length == 1) {
                    setCountry(response[0])
                    setLoading(false)
                } else {
                    //TODO: handle errors
                }

            })

    }, [])

    if (loading) {
        return (
            <CircularProgress />
        )
    }

    return (
        <div>
            <NavBar />
            <div className={classes.container}>
                <CountyCard country={country} />
            </div>
        </div>
    )
}