import React from 'react'
import { CssBaseline, IconButton, Typography, Grid, Container, Paper, Button, ButtonGroup, useMediaQuery } from '@material-ui/core'
import './styles.css'
import { useTheme } from '@material-ui/core/styles'
import { Delete, RemoveShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'


function CartPage({ cart }) {

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme.breakpoints.down('xs'));


    return (
        <main>
            <CssBaseline />
            <div style={{ background: "#000", padding: "2vh 0", marginBottom: "3vh"}} >
                <Typography variant="h5" align="center" style={{ color: "#fff" }} >SHOPPING CART</Typography>
            </div>
            <Container style={{ padding: "12px" }}>
                <Grid container spacing={1} justify="center" >
                    <Grid item container md={9} justify="center" >
                        <Grid item xs={12} align="center" >
                        <table style={{ background: "#fff", boxShadow: "0 5px 10px #424242" }} >
                            <tr style={{ background: "#efefef" }}>
                                <th>{!xs ? "Remove" : <Delete />}</th>
                                <th>Move To {xs?"Wish..":"Wishlist"}</th>
                                {
                                    sm ? <>
                                        <th>Product Name:</th>
                                    </>
                                    : <>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    </>
                                }
                                <th>Qty.</th>
                                <th>Total</th>
                            </tr>
                            {cart.map(c => <tr key={c.id}>
                                <td><IconButton><Delete color="error" /></IconButton></td>
                                <td><IconButton><RemoveShoppingCart color="primary" /></IconButton></td>
                                {
                                    sm ? <td>
                                        <img src={c.img} alt="lala.." style={{ maxHeight: xs ? "60px" : "95px" }} /> <br />
                                        <Typography variant="body1" color="textPrimary">{c.name}</Typography>
                                        <Typography variant="subtitle2" color="primary">Tk. {c.price}</Typography>
                                    </td> :
                                    <>
                                        <td><img src={c.img} alt="lala.." style={{ height: "110px" }} /></td>
                                        <td>{c.name}</td>
                                        <td>Tk. {c.price}</td>
                                    </>
                                }
                                <td>
                                    <ButtonGroup  variant="contained" size="small" style={{ display: "flex", flexDirection: xs ? "column": "row" }} >
                                        <Button color="secondary">-</Button>
                                        <Button>{c.qty}</Button>
                                        <Button color="primary">+</Button>
                                    </ButtonGroup>
                                </td>
                                <td style={{ fontWeight: "bold" }} >Tk. {c.price}</td>
                            </tr>)}
                        </table>
                        </Grid>
                        <Grid item xs={10}>
                            <div style={{ margin: "4vh 0", display: "flex", justifyContent:"center" }}>
                                <Button component={Link} to='/wishlistpage' variant="outlined" color="secondary" style={{ flexGrow: "1", background: "#fff", margin: "1vh" }} >Add More From Wishlist</Button>
                                <Button component={Link} to='/productpage' variant="contained" color="primary" style={{ flexGrow: "1", margin: "1vh" }} >Continue Shopping</Button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} sm={7} md={3}>
                        <Paper elevation={1} style={{ background: "#000", color: "#fff", padding: "20px", borderRadius: "28px" }} >
                            <Typography color="inherit" variant="body1" style={{ display: "flex" }} gutterBottom >
                                <div>Sub-total:</div>
                                <div style={{flexGrow: "1"}} ></div>
                                <div>Tk.{5000}</div>
                            </Typography>
                            <Typography color="inherit" variant="body1" style={{ display: "flex" }} gutterBottom >
                                <div>Shipping:</div>
                                <div style={{ flexGrow: "1" }} ></div>
                                <div style={{ textAlign: "right" }} >Calculated during checkout!</div>
                            </Typography>
                            <Typography color="inherit" variant="body1" style={{ display: "flex" }} gutterBottom >
                                <div>Total:</div>
                                <div style={{ flexGrow: "1" }} ></div>
                                <div style={{ textAlign: "right" }} >Calculated during checkout!</div>
                            </Typography>
                            <Button style={{ background: "rgb(223, 0, 36)", color: "#fff", width: "100%" }} variant="contained" >Checkout</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default CartPage
