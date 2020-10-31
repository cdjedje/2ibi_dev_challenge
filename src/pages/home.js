import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core';
import { NavBar, CountyTable } from '../components'
import Country from '../services/country'
import classes from '../App.module.css'


export const Home = () => {

    const [countries, setCountries] = useState([])
    const [loading, setLoafing] = useState(true)

    useEffect(() => {
        Country.getCountries()
            .then(response => {
                // console.log(response)
                setCountries(response)
                setLoafing(false)
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
                <CountyTable countries={countries} />
            </div>
        </div>
    )
}