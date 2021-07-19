import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "../Styles"


const SplashScreen = () => {
    const classes = useStyles();
    return (
       <SearchIcon className={classes.splashScreen}/>
    )
}

export default SplashScreen