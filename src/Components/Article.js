import React from 'react';
import { useStyles } from '../Styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const timeAgo = (prevDate) => {
    const diff = Number(new Date()) - prevDate;
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
        case diff < minute:
            const seconds = Math.round(diff / 1000);
            return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`
        case diff < hour:
            return Math.round(diff / minute) + ' minutes ago';
        case diff < day:
            return Math.round(diff / hour) + ' hours ago';
        case diff < month:
            return Math.round(diff / day) + ' days ago';
        case diff < year:
            return Math.round(diff / month) + ' months ago';
        case diff > year:
            return Math.round(diff / year) + ' years ago';
        default:
            return "";
    }
};

function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

const Article = ({ article }) => {
    const classes = useStyles();
    return (
        <Card
            className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.articleMedia}
                    image={article.media}
                    title={article.title}
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="primary"
                        component="p"
                        className={classes.darkText}
                        onClick={() => {
                            window.open((isValidHttpUrl(article.clean_url)) ? article.clean_url : "https://" + article.clean_url, "_blank")
                        }}
                    >
                        {article.clean_url}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="primary"
                        component="p"
                        className={classes.darkText}
                        onClick={() => {
                            window.open((isValidHttpUrl(article.twitter_account)) ? article.twitter_account : "https://twitter.com/" + article.twitter_account, "_blank")
                        }}>
                        {article.twitter_account}
                    </Typography>

                    {/* <Typography
                        variant="body2"
                        color="primary"
                        component="p"
                        className={classes.darkText}>
                        {article.country}
                    </Typography> */}

                    <Typography
                        variant="body2"
                        color="primary"
                        component="p"
                        className={classes.darkText}>
                        {timeAgo(new Date(article.published_date))}
                    </Typography>

                    <Typography
                        gutterBottom
                        variant="h6"
                        onClick={() => {
                            window.open(article.link, "_blank")
                        }}>
                        {article.title}
                    </Typography>
                    <hr />

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        {article.summary}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        className={classes.learnMoreBtn}
                        onClick={() => {
                            window.open(article.link, "_blank")
                        }}>
                        Learn more
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}

export default Article;
