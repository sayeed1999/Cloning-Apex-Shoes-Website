import React, {useState} from 'react'
import { Navbar, HomePage, ProductPage, CartPage, WishlistPage, Footer } from './pages'
import { Route, Switch } from 'react-router-dom'
import shortid from 'shortid'

/* pictures of categories */
import men from './images/men.jpeg'
import women from './images/women.jpeg'
import kids from './images/kids.jpeg'
/* pictures of categories/men */
import menShoes from './images/categories/men/shoes.png'
import menSandals from './images/categories/men/sandals.png'
import menSports from './images/categories/men/sports.png'
import menAccessories from './images/categories/men/accessories.png'
/* pictures of categories/women */
import womenFlats from './images/categories/women/flats.png'
import womenHeels from './images/categories/women/heels.png'
import womenSports from './images/categories/women/sports.png'
import womenAccessories from './images/categories/women/accessories.png'
/* pictures of categories/kids */
import kidsBoys from './images/categories/kids/boys.png'
import kidsGirls from './images/categories/kids/girls.png'
import kidsSchool from './images/categories/kids/school.png'
import kidsAccessories from './images/categories/kids/accessories.png'


function App() {

    /* navigation starts */
    const [layerOne, setLayerOne] = useState(category[0].name)
    const [layerTwo, setLayerTwo] = useState('')
    const [itemsToShow, setItemsToShow] = useState([])
    
    function handleChangeDirection(categoryName, subCategoryName) {
    
        setLayerOne( categoryName )
    
        if(!subCategoryName) { //if not provided, supply all..!
            setLayerTwo( '' )
            let items = category.find(c => c.name===categoryName).subCategory
            let arr = []
            for(const obj of items) {
                arr.push( ...obj.products )
            }
            setItemsToShow( arr )
        } else {
            setLayerTwo( subCategoryName )
            let arr = category.find(c => c.name===categoryName).subCategory.find(c => c.name===subCategoryName).products
            setItemsToShow( arr )
        }
    }
    /* navigation ends */
    
    return <>
        <Navbar
            category={category}
            handleChangeDirection={handleChangeDirection}
            cartSize={cart.length}
            wishlistSize={wishlist.length}
        />
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/productpage">
                <ProductPage
                    itemsToShow={itemsToShow}
                    brand={brand}
                    size={size}
                    layerOne={layerOne}
                    layerTwo={layerTwo}
                    handleChangeDirection={handleChangeDirection}
                />
            </Route>
            <Route exact path="/cartpage">
                <CartPage
                    cart={cart}
                />
            </Route>
            <Route exact path="/wishlistpage">
                <WishlistPage
                    wishlist={wishlist}
                />
            </Route>
        </Switch>
        <Footer />
    </>
}

export default App



const category = [
    {
        name: "MEN",
        img: men,
        subCategory: [
            {
                name: "SHOES",
                img: menShoes,
                products: [
                    {
                        name: "Venturi Formal Shoe",
                        price: 1760,
                        img: menShoes,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                    {
                        name: "Venturi Formal Shoe",
                        price: 2360,
                        img: menShoes,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                    {
                        name: "Venturi Formal Shoe",
                        price: 1960,
                        img: menShoes,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ],
            },
            {
                name: "SANDALS",
                img: menSandals,
                products: [
                    {
                        name: "APEX Comfort Sandals",
                        price: 1160,
                        img: menSandals,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                    {
                        name: "APEX Comfort Sandals",
                        price: 1360,
                        img: menSandals,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                    {
                        name: "APEX Comfort Sandals",
                        price: 1860,
                        img: menSandals,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ],
            },
            {
                name: "SPORTS",
                img: menSports,
                products: [
                    {
                        name: "Sports Running Shoe",
                        price: 3230,
                        img: menSports,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                    {
                        name: "Sports Running Shoe",
                        price: 2130,
                        img: menSports,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                    {
                        name: "Sports Running Shoe",
                        price: 1510,
                        img: menSports,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ],
            },
            {
                name: "ACCESSORIES",
                img: menAccessories,
                products: [
                    {
                        name: "SHOULDER BAG",
                        price: 1900,
                        img: menAccessories,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ]
            },
        ],
    },
    {
        name: "WOMEN",
        img: women,
        subCategory: [
            {
                name: "FLATS",
                img: womenFlats,
                products: [
                    {
                        name: "APEX Women Flats",
                        price: 2310,
                        img: womenFlats,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                    {
                        name: "APEX Women Flats",
                        price: 2200,
                        img: womenFlats,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ],
            },
            {
                name: "HEELS",
                img: womenHeels,
                products: [
                    {
                        name: "APEX Women Heels",
                        price: 1900,
                        img: womenHeels,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                    {
                        name: "APEX Women Heels",
                        price: 1700,
                        img: womenHeels,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ],
            },
            {
                name: "SPORTS",
                img: womenSports,
                products: [
                    {
                        name: "APEX Women Sports Shoe",
                        price: 2550,
                        img: womenSports,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ],
            },
            {
                name: "ACCESSORIES",
                img: womenAccessories,
                products: [
                    {
                        name: "APEX Women Purse",
                        price: 1600,
                        img: womenAccessories,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ],
            },
        ],
    },
    {
        name: "KIDS",
        img: kids,
        subCategory: [
            {
                name: "BOYS",
                img: kidsBoys,
                products: [
                    {
                        name: "Kids Shoe",
                        price: 1400,
                        img: kidsBoys,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ],
            },
            {
                name: "GIRLS",
                img: kidsGirls,
                products: [
                    {
                        name: "Kids Shoe (Girls)",
                        price: 1690,
                        img: kidsGirls,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ],
            },
            {
                name: "SCHOOL",
                img: kidsSchool,
                products: [
                    {
                        name: "Kids School Uniform Shoe",
                        price: 1200,
                        img: kidsSchool,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ],
            },
            {
                name: "ACCESSORIES",
                img: kidsAccessories,
                products: [
                    {
                        name: "School Bags For Kids",
                        price: 980,
                        img: kidsAccessories,
                        id: shortid.generate(),
                        description: "Get the best comfort from our product",
                    },
                ],
            },
        ],
    },
]

const brand = [
    {
        name: "APEX",
        total: 39,
    },
    {
        name: "MAVERICK",
        total: 23,
    },
    {
        name: "VENTURINI",
        total: 5,
    },
]

const size = [
    {
        name: 42,
        total: 69,
    },
    {
        name: 43,
        total: 69,
    },
    {
        name: 44,
        total: 69,
    },
    {
        name: 40,
        total: 68,
    },
    {
        name: 41,
        total: 68,
    },
    {
        name: 39,
        total: 66,
    },
]

const cart = [
    {
        name: "Kids Shoe",
        price: 1400,
        img: kidsBoys,
        description: "Get the best comfort from our product",
        id: shortid.generate(),
        qty: 1,
    },
]

const wishlist = [
    {
        name: "Kids Shoe",
        price: 1400,
        img: kidsBoys,
        description: "Get the best comfort from our product",
        id: shortid.generate(),
        qty: 1,
    },
    {
        name: "Kids Shoe",
        price: 1400,
        img: kidsBoys,
        description: "Get the best comfort from our product",
        id: shortid.generate(),
        qty: 1,
    },
]