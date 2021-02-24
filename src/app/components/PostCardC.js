import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { IconButton } from "@material-ui/core";

export default function PostCardC({ image, title, isLiked, likes }) {
  const classes = useStyles();
  const text =
    " Lizards are a widespread group of squamate reptile Lizards are a widespread group of squamate reptile";

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            noWrap>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton>
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography component="strong">{likes}</Typography>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    width: "35vw",
  },
  media: {
    height: "15vw",
    objectFit: "contain",
  },
});
