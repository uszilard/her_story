import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const homeStyles = makeStyles({
  logo: {
    fontFamily: 'Merienda',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#999'
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Home() {
  const classes = homeStyles();
  return (
    <React.Fragment>
      <nav>
        <h1 className={classes.logo} id='homePageLogo'>Her Story</h1>
      </nav>
      <Carousel emulateTouch swipeScrollTolerance={10} showThumbs={false} showIndicators={false}>
        {[1, 2, 3, 4, 5].map(i =>
          <Card>
            <img alt="this is my immage" src="https://aruljohn.com/info/pix/yahoo_profile.png" />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Quote of the day
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Women, like men, should try to do the impossible. And when they fail, their failure should be a challenge to others.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
        </Button>
              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>)
        }
      </Carousel >

      <Card className={classes.root} variant="outlined">
        <CardContent>

          <Typography variant="h5" component="h2">
            Aabout Us
        </Typography>

          <Typography variant="body2" component="p">
            Sunt reprehenderit adipisicing adipisicing id. Consequat ea consectetur laborum laboris aliquip ut commodo nisi sint nulla laborum pariatur. Adipisicing quis magna fugiat voluptate ea consequat Lorem ipsum eiusmod laborum non veniam. Enim commodo eu adipisicing do eiusmod qui amet. Cillum mollit sit incididunt incididunt et do amet.
          </Typography>
        </CardContent>
      </Card>

    </React.Fragment >
  )
};

export default Home;
