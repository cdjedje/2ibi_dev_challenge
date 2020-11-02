import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core';
import { NavBar, CountyCard } from '../components'
import Country from '../services/country'
import classes from '../App.module.css'


export const Details = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({ status: false, type: "notFound" })
    const [country, setCountry] = useState(null)
    const { countryName } = useParams();

    useEffect(() => {

        Country.getCountryByName(countryName)
            .then(response => {
                console.log(response)
                if (response?.length == 1) {
                    setCountry(response[0])
                    setLoading(false)
                } else {
                    setError({ status: true, type: "notFound" })
                    setLoading(false)
                }
            }).catch((err) => {
                setError({ status: true, type: "internalError" })
                setLoading(false)
            })

    }, [])

    if (loading) {
        return (
            <CircularProgress />
        )
    }

    console.log({ error })

    return (
        <div>
            <NavBar />
            {error.status == false && (
                <div className={classes.container}>
                    <CountyCard country={country} />
                </div>
            )}
            {error.status == true && (
                <div>
                    {error.type == "notFound" ? (
                        <div className={classes.wrapperNotFound}>
                            <img className={classes.imgNotFound} src="/404.png" />
                        </div>
                    ) : (
                            <div>
                                Error: failed to fetch data
                            </div>
                        )}
                </div>

            )}
        </div>
    )
}