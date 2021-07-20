import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    searchForm: {
        padding: theme.spacing(2),
        alignItems: "center",
    },
    SearchBtn: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(2),
        margin: theme.spacing(1),
    },
    searchText: {
        width: "100%",
    },

    root: {
        flexGrow: 1,
    },

    headerMenuButton: {
        marginRight: theme.spacing(0),
    },


    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    articleRoot: {
        maxWidth: "xs",
    },

    articleMedia: {
        height: 140,
    },

    darkText: {
        padding: theme.spacing(1),
        marginRight: "5px",
        backgroundColor: "#cacaca",
        borderRadius: "6px",
        display: "inline",
    },

    learnMoreBtn: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    paginationBtn: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(1),

    },
    searchResultText: {

    },

    splashScreen: {
        width:"100%",
        height:"100%",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: 'fixed'
    },
    
}))

export { useStyles };