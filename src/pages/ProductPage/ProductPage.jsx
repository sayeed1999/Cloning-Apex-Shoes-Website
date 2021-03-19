import React, { useState, useEffect } from 'react'
import { CssBaseline, Typography, Container, Paper, Grid, Button, IconButton, Input, Checkbox, Card, CardContent, CardActions, CardMedia, CardActionArea, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Search, Add, Remove, FavoriteBorderOutlined } from '@material-ui/icons'

function SortBy({ handleSortBy, sortBy, setSortBy }) {


    useEffect(() => {
        setSortBy("D")
    }, [])

    return <>
        <FormControl style={{ minWidth: "120px" }} >
        <InputLabel>Sort By: </InputLabel>
        <Select
          labelId="sortBy"
          id="sortBy"
          value={sortBy}
          onChange={e=>( setSortBy(e.target.value) , handleSortBy(e.target.value) )}
          style={{ color: "#3f51b5", fontSize: "14px" }}
        >
          <MenuItem value="A">Price: high to low</MenuItem>
          <MenuItem value="B">Price: low to high</MenuItem>
          <MenuItem value="C">Latest</MenuItem>
          <MenuItem value="D">None</MenuItem>
        </Select>
      </FormControl>
    </>
}


function LeftSection({ title, items }) {

    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const [isItemsOpen, setIsItemsOpen] = useState(false);

    return <div style={{ padding: "1vh", border: "solid 1px #efefef" }} >
        <div style={{ display: "flex", alignItems: "center" }} >
            <Typography variant="body1" color="secondary">{title}</Typography>
            <div style={{ flexGrow: "1" }} ></div>
            <IconButton onClick={e=>setIsSearchBarOpen(!isSearchBarOpen)} >
                <Search />
            </IconButton>
            <IconButton onClick={e=>setIsItemsOpen(!isItemsOpen)} >
                {isItemsOpen ? <Remove /> : <Add />}
            </IconButton>
        </div>
        {isSearchBarOpen && <Input placeholder="Search here" />}
        {isItemsOpen && <div style={{ display: "flex", flexDirection: "column" }}>
            { items.map(item => <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox />
                <Typography variant="subtitle1" color="textSecondary">{item.name}</Typography>
                <Typography variant="subtitle2" color="textSecondary" style={{ alignSelf:"flex-start" }} >{item.total}</Typography>
            </div>) }
        </div>}
    </div>
}

function ProductPage({ itemsToShow, brand, size, layerOne, layerTwo, handleChangeDirection }) {

    const [items, setItems] = useState([]);
    const [sortBy, setSortBy] = useState('')


    useEffect(() => {
        const _items = itemsToShow;
        setItems( _items );
        setSortBy("D")
    }, [itemsToShow]) //componentDidMount when dependency array is empty!

    function handleSortBy(value) {
        //console.log(value)
        if(value==='A') {
            const _items = [...items].sort((a,b) => {
                return b.price - a.price
            })
            setItems( _items )
        }
        else if(value==='B') {
            const _items = [...items].sort((a,b) => {
                return a.price - b.price
            })
            setItems( _items )
        }
    }

    return (
        <main>
            <CssBaseline />
            <div style={{ background: "#000", display: "flex", flexDirection: "column", marginBottom: "2vh" }} >
                <Typography variant="h5" align="center" style={{ color: "#fff", padding: "1.6vh 0" }}>{layerOne}</Typography>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#818181", fontWeight: "bold", fontSize: "16px" }} >
                    <Button size="small" component={Link} to="/" style={{ color: "#fff", padding: "0" }} >HOME</Button>
                    { layerOne && <> / <Button size="small" style={{ color: "#fff" }} onClick={e=>handleChangeDirection(layerOne )} >{layerOne}</Button> </> }
                    { layerTwo && <> / <Button size="small" style={{ color: "#fff" }} onClick={e=>handleChangeDirection(layerOne, layerTwo )} >{layerTwo}</Button> </> }
                </div>
            </div>
            <Container>
            
            
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={3}>
                    <Paper elevation={3} style={{ display: "flex", flexDirection:"column" }} >
                        <LeftSection title="BRAND" items={brand} />
                        <LeftSection title="SIZE" items={size} />
                    </Paper>
                </Grid>
                
                <Grid item container xs={12} sm={8} md={9} justify="center">
                    <Grid item xs={12} style={{ marginBottom: "2vh" }} >
                        <Paper elevation={2} style={{ background: "#efefef" }} >
                            <SortBy handleSortBy={handleSortBy} sortBy={sortBy} setSortBy={setSortBy} />
                        </Paper>
                    </Grid>
                    <Grid item container xs={12} spacing={2} justify="center">
                    {
                    items.map((item, index) => <Grid key={index} item xs={9} sm={6} md={4}><Card>
                        
                        <CardActionArea>
                        <CardMedia image={item.img} style={{ paddingTop: "56.25%" }} />
                        <CardContent>
                            <Typography variant="h6" align="center" color="textPrimary">{item.name}</Typography>
                            <Typography variant="subtitle1" align="center" color="secondary">Tk.{item.price}</Typography>
                        </CardContent>
                        </CardActionArea>

                        <CardActions style={{ display: "flex" }} >
                            <Button variant="contained" style={{ flexGrow: "1", color: "rgb(223, 0, 36)", fontWeight: "bold" }} >ADD TO CART</Button>
                            <Button variant="contained" color="primary" > <FavoriteBorderOutlined /> </Button>
                        </CardActions>

                    </Card></Grid>)
                    }
                    </Grid>
                </Grid>
            </Grid>
            </Container>
        </main>
    )
}

export default ProductPage
