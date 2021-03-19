import React from 'react'
import { Container, Typography, CssBaseline } from '@material-ui/core'
import useStyles from './styles.js'
import Carousel from 'react-elastic-carousel'

import img1 from '../../images/shop-by-brand/1.png'
import img2 from '../../images/shop-by-brand/2.png'
import img3 from '../../images/shop-by-brand/3.png'
import img4 from '../../images/shop-by-brand/4.png'
import img5 from '../../images/shop-by-brand/5.png'
import img6 from '../../images/shop-by-brand/6.png'

const array = [img1, img2, img3, img4, img5, img6]


function HomePage() {
    
    const classes = useStyles();

        return <>
            <CssBaseline />
            <main>
                <Container maxWidth="md" className={classes.container} >
                    <Typography variant="h4" align="center" gutterBottom>SHOP BY BRAND</Typography>
                    <Carousel itemsToShow={3} itemsToScroll={2} pagination={0} >
                      {array.map(item => (
                          <img src={item} style={{ width: "100%" }} />
                      ))}
                    </Carousel>
                </Container>
            </main>
        </>
}

export default HomePage
