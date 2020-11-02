import React from 'react'
import { NavBar } from '../components'
import classes from '../App.module.css'


export const NoMatch = () => {
    return (
        <div>
            <NavBar />
            <div className={classes.wrapperNotFound}>
                <img className={classes.imgNotFound} src="/404.png" />
            </div>
        </div>
    )
}