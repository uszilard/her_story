import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styled from "styled-components";

import { Card } from "react-rainbow-components";

require("typeface-open-sans");

const homeStyles = makeStyles({
  logo: {
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "center",
    color: "pink"
  },
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export const Quote = styled.div`
  padding: 0.5rem;
  font-family: "Open Sans", sans-serif;
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;

const Nav = styled.nav`
  border: 1px solid pink;
  border-radius: 3px;
  margin: 0.5rem 0rem;
`;

function Home() {
  const classes = homeStyles();
  return (
    <React.Fragment>
      <Nav>
        <h1 className={classes.logo} id="homePageLogo">
          her story
        </h1>
      </Nav>
      {[
        {
          name: "Simone de Beauvoir, french author and philosopher",
          img: "/simone.jpeg",
          quote: "One is not born, but rather becomes, a woman."
        },
        {
          name: "Florence Nightingale, the founder of modern nursing",
          img: "/florence.jpeg",
          quote:
            "I attribute my success to this: I never gave or took an excuse."
        },
        {
          name: "Janis Joplin, American musician",
          img: "/janis.jpeg",
          quote: "Don’t compromise yourself. You are all you’ve got."
        },

        {
          name: "Malala Yousafzai, Pakistani activist and Nobel laureate",
          quote:
            "We realize the importance of our voices only when we are silenced."
        },
        {
          name: "Sojourner Truth, American abolitionist",
          quote:
            "If the first woman God ever made was strong enough to turn the world upside down all alone, these together ought to be able to turn it back and get it right side up again."
        },
        {
          name: "Grace Hopper, U.S. Naval Admiral and computer scientist",
          quote:
            "If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission."
        },
        {
          name: "Simone de Beauvoir, U.S. Naval Admiral and computer scientist",
          quote:
            "If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission."
        }
      ].map(({ quote, name, img }) => (
        <div style={{ margin: "1rem 0rem" }}>
          <Card>
            <Img src={img} />
            <Quote>
              {quote} - {name}
            </Quote>
          </Card>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Home;
