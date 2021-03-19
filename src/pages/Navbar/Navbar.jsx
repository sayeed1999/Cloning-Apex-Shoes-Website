import React, {useState} from 'react';
import { Badge, CssBaseline, AppBar, Toolbar, Typography, Input, IconButton, useMediaQuery, Button, ButtonGroup, Paper, Grid, Card, CardMedia, CardContent, CardActionArea } from '@material-ui/core'
import logo from '../../images/logo.png'
import rewardLogo from '../../images/reward-logo.png'
import rewardLogoSm from '../../images/reward-logo-sm.png'
import useStyles from './styles.js'
import { useTheme } from '@material-ui/core/styles';
import { Menu, Search, HeadsetMic, Room, Person, Favorite, ShoppingCart, Close } from '@material-ui/icons'
import { Link } from 'react-router-dom';


function Navbar({ category, handleChangeDirection, cartSize, wishlistSize }) {

  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));


  /* **** Empty Page Dark Opens **** */
  function EmptyPage() {
    return <div id="emptyPage" style={{ width: "100%", height: "100vh", background: "rgba(0,0,0,0.4)", zIndex: "2", position: "fixed", top: "0", left: "-100%", transition: "350ms ease-in-out" }}></div>
  }
  /* **** Empty Page Dark Closes **** */

  /* **** Left Menu Opens **** */
  function menuOpenClicked() {
    document.getElementById('leftSideBar').style.left = "0";
    document.getElementById('emptyPage').style.left = "0";
  }

  function menuCloseClicked() {
    subMenuCloseClicked();
    document.getElementById('leftSideBar').style.left = "-100%";
    document.getElementById('emptyPage').style.left = "-100%";
  }

  function LeftSideBar() {
    return <Paper elevation={0} id="leftSideBar" style={{ zIndex: "3", height: "100vh", width: "300px", background: "#fff", position: "fixed", top: "0", left:"-100%", transition: "350ms ease" }} >
      <Paper elevation={2} style={{ height: "8vh", background: "#efefef", display: "flex", flexDirection: "row-reverse" }} >
        <IconButton><Close onClick={e=>menuCloseClicked()} color="secondary" /></IconButton>
      </Paper>
      <Grid container className={classes.leftBarGridRoot} >
        {category.map(c => (
          <Grid  item container xs={12} key={c.name} className={classes.leftBarGrid} onClick={e=>subMenuOpenClicked(c.name)} >
            <Grid xs={5} >{c.name}</Grid>
            <Grid xs={5} ><img src={c.img} className={classes.leftBarImg} /></Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  }
  /* **** Left Menu Closes **** */  

  /* **** Left Sub Menu Opens ***** */
  function subMenuOpenClicked(name) {
    categoryClicked(name)
    setTimeout(() => {
      menuOpenClicked();
      document.getElementById('leftSubSideBar').style.left = "0";    
    }, 100)
  }

  function subMenuCloseClicked() {
    document.getElementById('leftSubSideBar').style.left = "-100%";
  }
  
  function LeftSubSideBar() {
    return <Paper elevation={3} id="leftSubSideBar" style={{ zIndex: "4", height: "100vh", width: "250px", background: "#fff", position: "fixed", top: "0", left:"-100%", transition: "340ms ease" }} >
      <Paper elevation={2} style={{ height: "8vh", background: "#cdcdcd", display: "flex", flexDirection: "row-reverse" }} >
        <IconButton><Close onClick={e=>subMenuCloseClicked()} color="secondary" /></IconButton>
      </Paper>
      <Grid container className={classes.leftBarGridRoot} >
        {modalState.subCategory.map(c => (
          <Grid item container xs={12} key={c.name} className={classes.leftSubBarGrid} component={Link} to="/productpage" onClick={e=>( handleChangeDirection(modalState.name, c.name), setIsModalOpen(false) )} >
            <Grid xs={5} >{c.name}</Grid>
            <Grid xs={5} ><img src={c.img} className={classes.leftBarImg} /></Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  }
  /* **** Left Sub Menu Closes ***** */

  /*   **** Modal opens ****   */
  const [ismodalOpen, setIsModalOpen] = useState(false)
  const [modalState, setModalState] = useState(category[0])

  function categoryClicked(name) {
    if(name===modalState.name) {
      setIsModalOpen( !ismodalOpen )
    } else {
      const obj = category.find(c => c.name===name)
      setModalState(obj)
      setIsModalOpen( true )
    }
  }

  function Modal() {
    return <Paper elevation={6} style={{zIndex: "2", width: "90%", background: "#fff", position: "fixed", top: "20%", left: "5%", padding: "2vh" }} >
      <Button component={Link} to='/productpage' style={{ marginBottom: "1.4vh" }} variant="contained" color="primary" size="large" onClick={e=>( handleChangeDirection(modalState.name), setIsModalOpen(false) )}>Visit {modalState.name}</Button>
      <Grid container spacing={3}>
        { modalState.subCategory.map(item => (
            <Grid item md={3}>
              <Card className={classes.card} >
                <CardActionArea component={Link} to='/productpage' onClick={e=>( handleChangeDirection(modalState.name, item.name), setIsModalOpen(false) )} >
                  <CardMedia className={classes.cardMedia} image={item.img} />
                  <CardContent>
                    <Typography variant="h5" color="textSecondary">{item.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
        ))}
      </Grid>
      <Button style={{ marginTop: "1vh" }} variant="contained" color="secondary" onClick={e=>setIsModalOpen(false)} >Close</Button>
    </Paper>
  }
  /*   **** Modal closes ****   */

  return (
    <>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          
          { sm && 
            <IconButton onClick={e=>menuOpenClicked()} ><Menu color="textSecondary" fontSize="large" /></IconButton>}
          <Link to="/">
            <img src={ logo } className={classes.logo} />
          </Link>
          
          <div className={classes.searchBar}>
            <Input placeholder="Search product" />
            <div className={classes.grow} ></div>
            <IconButton>
              <Search className={classes.icon} />
            </IconButton>
          </div>

          <div className={classes.grow} ></div>
          
          
          <div className={classes.navbarRight}>
            <img src={ rewardLogo } className={`${classes.logo} ${classes.toBeHidden}`} />
            
            { sm &&
              <IconButton>
                <img src={ rewardLogoSm } className={classes.logoSm} />
              </IconButton>
            }
            <IconButton color="textPrimary">
              <HeadsetMic color="primary" />
              <Typography variant="body1" className={classes.toBeHidden} >+015215***</Typography>
            </IconButton>
            <IconButton color="textPrimary" className={classes.iconButton}>
              <Room color="error" />
            </IconButton>
            <IconButton className={classes.iconButton}>
              <Person color="primary" />
              <Typography variant="body1" className={classes.toBeHidden}>Login</Typography>
            </IconButton>
            <IconButton color="secondary" className={classes.iconButton} component={Link} to="/wishlistpage" >
              <Badge badgeContent={wishlistSize} color="primary" >
              <Favorite />
              </Badge>
            </IconButton>
            <IconButton color="primary" className={classes.iconButton} component={Link} to="/cartpage" >
              <Badge badgeContent={cartSize} color="secondary" >
              <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
        
        { !sm &&
        <ButtonGroup variant="text" color="inherit" style={{ display: "flex", justifyContent: "center", background: "rgb(223, 0, 36)", color: "#fff" }} >
          {category.map(c => <Button key={c.name} onClick={e=> categoryClicked(c.name)} >{c.name}</Button>)}
        </ButtonGroup> }

      </AppBar>
      
      { sm && <>
        <LeftSubSideBar />
        <LeftSideBar />
        <EmptyPage />
      </> }

      { !sm && ismodalOpen && <>
        <Modal />
      </> }
      
      </>
  );
}
/* document.getElementById('leftSideBar').style.left="-300px" */

export default Navbar