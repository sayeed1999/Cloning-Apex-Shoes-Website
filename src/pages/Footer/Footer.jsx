import { Container, Typography } from '@material-ui/core'
import React from 'react'

function Footer() {
    return (
        <main style={{ marginTop: "67px" }} >
            <Container>
            <Typography align="center" variant="subtitle2" color="textSecondary" >This website was intended to clone "ApexShoes" UI for learning purposes only.</Typography>
            <Typography align="center" variant="subtitle1" color="textSecondary" >Original Website: https://apex4u.com</Typography>
            <Typography align="center" variant="body2" color="primary" style={{ fontWeight: "bold" }} >&copy; Md. Sayeed Rahman <span style={{ color: "crimson" }}>| 2021</span></Typography>
            </Container>
        </main>
    )
}

export default Footer
