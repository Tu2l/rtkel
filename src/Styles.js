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
        marginRight: theme.spacing(2),
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
}))

export { useStyles };