import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card } from "react-rainbow-components";

import Mailchimp from 'react-mailchimp-form'

import { StyledCard, Img } from "../components/styled"

import { Row, Container } from "../components/Grid";

const NewsLetterStyles = makeStyles({
  logo: {
    fontFamily: 'Merienda',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#999',
    border: 'ridge'
  },
  img: {
    display: 'flex',
    justifyContent: 'center',
    width: "100%",
    maxWidth: "100%",
  }
});


function NewsLetter() {
  const classes = NewsLetterStyles();
  return (
    <Container fluid>
      <Row>
        <Card>
          <nav>
            <img id="homePageLogo" className={classes.img} alt="Logo Her Story" src="/hslogo3.PNG"></img>
          </nav>
        </Card>
        <StyledCard style={{ padding: "0.5rem" }}>
          <h3 style={{ textAlign: 'center' }}>Join Our Fast Growing Community Of Women</h3>
          <Img src="/newsletter.png" />

          <Mailchimp
            action='https://netlify.us19.list-manage.com/subscribe/post?u=c29e77bbdf2fbd3bec36ae6d5&amp;id=7c6e36e074'

            //Adding multiple fields:
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                required: true
              },
              {
                name: 'FNAME',
                placeholder: 'Name',
                type: 'text',
                required: true
              }
            ]}
            // Change predetermined language
            messages={
              {
                sending: "Sending...",
                success: "Thank you for subscribing!",
                error: "An unexpected internal error has occurred.",
                empty: "You must write an e-mail.",
                duplicate: "Too many subscribe attempts for this email address",
                button: "Subscribe"
              }
            }
          // Add a personalized class
          />

        </StyledCard>
      </Row>
    </Container>
  );
}

export default NewsLetter;