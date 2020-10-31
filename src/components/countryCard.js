import React from 'react'
import { Paper, Grid, Button } from '@material-ui/core';
import classes from '../App.module.css'

export const CountyCard = ({ country }) => {

    console.log({ country })

    return (
        <div>
            <Paper className={classes.detailCard}>
                <Grid container>
                    <Grid item xs={2}>
                        <div>
                            <img className={classes.imgPreview} src={country.flag} />
                        </div>
                        <Button href={country?.flag} color="primary">
                            See Flag
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>Name</h4>
                        <p>{country?.name}</p>

                        <h4>Capital</h4>
                        <p>{country?.capital}</p>

                        <h4>Region</h4>
                        <p>{country?.region}</p>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>Sub Region</h4>
                        <p>{country?.subregion}</p>

                        <h4>Capital</h4>
                        <p>{country?.capital}</p>

                        <h4>Region</h4>
                        <p>{country?.region}</p>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>Sub Region</h4>
                        <p>{country?.subregion}</p>

                        <h4>Capital</h4>
                        <p>{country?.capital}</p>

                        <h4>Region</h4>
                        <p>{country?.region}</p>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}