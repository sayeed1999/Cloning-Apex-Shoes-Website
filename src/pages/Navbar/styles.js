import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    appBar: {
        justifyContent: "center",
        background: "#fff",
    },
    toolBar: {
        display: "flex",
        flexWrap: "wrap",
    },
    logo: {
        height: "60px",
    },
    logoSm: {
        height: "30px",
    },
    icon: {
        color: "black",
    },
    searchBar: {
        display: "flex",
        justifyContent: "spaceBetween",
        alignItems: "center",
        marginLeft: "20px",
        flexGrow: "1",
    },
    grow: {
        flexGrow: "1",
    },
    navbarRight: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
    },

    [theme.breakpoints.down("sm")]: {
        logo: {
            height: "40px",
        },
        searchBar: {
            order: "1",
            width: "100%",
        },
        toBeHidden: {
            display: "none",
        }
    },

    leftBarGridRoot: {
        height: "91vh",
        overflowY: "auto",
        marginTop: "1vh",
    },
    leftBarGrid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#efefef",
        marginBottom: "4px",
        cursor: "pointer",
    },
    leftSubBarGrid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "crimson",
        color: "#fff",
        marginBottom: "4px",
        cursor: "pointer",
    },
    leftBarImg: {
        width: "100%"
    },
    card: {
        height: "100%",
    },
    cardMedia: {
        height: 0,
        height: "200px",
        width: "100%",
    },
}))

export default useStyles;