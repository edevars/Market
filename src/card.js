import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    margin: 15,
  },
  media: {
    height: 50,
    paddingTop: '50.25%', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes,cover, title,description,price } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={cover}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
          <Typography component="h5">
            $ {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" color="secondary">
            Comprar
          </Button>
          <Button size="small" color="secondary">
            Mas info
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
