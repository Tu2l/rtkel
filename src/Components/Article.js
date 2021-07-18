import React from 'react';
import { useStyles } from '../Styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Article = ({ article }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} onClick={() => {
            window.open(article.link, "_blank")
        }}>
            <CardActionArea>
                <CardMedia
                    className={classes.articleMedia}
                    image={article.media}
                    title={article.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6">
                        {article.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {article.summary}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Article;
