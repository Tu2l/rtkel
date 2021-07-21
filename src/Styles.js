import { makeStyles } from "@material-ui/core/styles";
import { Block } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    searchForm: {
        marginTop: "80px ",
        padding: "20px",
    },

    SearchBtn: {
        width: "100%",
        padding: "8px",
        marginLeft: "5px",
        fontSize: "0.8em"
    },

    searchInput: {
        width: "100%"
    },

    root: {
        flexGrow: 1,
        display: "flex"
    },

    headerMenuButton: {
        marginRight: theme.spacing(0),
    },


    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    articleRoot: {
        maxWidth: "xs",
        // height: "350px",
    },

    articleMedia: {
        height: "150px",
    },

    articleSummary: {
        
    },

    darkText: {
        display: "inline",
        padding: "10px",
        margin: "5px",
        backgroundColor: "#cacaca",
        borderRadius: "3px",
    },

    articleBody:{
        position:"relative"
    },

    learnMoreBtn: {
        width: "100%",
        height: "100%",
        padding: "10px",
    },
    paginationBtn: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(0.5),

    },
    
    searchResultText: {

    },

    splashScreen: {
        width: "100%",
        height: "100%",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: 'fixed'
    },

}))

export { useStyles };