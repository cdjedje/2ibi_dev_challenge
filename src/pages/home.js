import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core';
import { NavBar, CountyTable } from '../components'
import Country from '../services/country'
import classes from '../App.module.css'


export const Home = () => {

    const [countries, setCountries] = useState([])
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Country.getCountries()
            .then(response => {
                // console.log(response)
                setCountries(response)
                setLoading(false)
            }).catch((err) => {
                console.log(err)
                setErrorMessage("Error: Failed to fetch")
                setError(true)
                setLoading(false)
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
            {!error && (
                <div className={classes.container}>
                    <CountyTable countries={countries} />
                </div>
            )}
            {error && (
                <div className={classes.container}>
                    {errorMessage}
                </div>
            )}
        </div>
    )
}