import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card } from "react-rainbow-components";
import styled from "styled-components";

import Mailchimp from 'react-mailchimp-form'


import { Input, StyledCard, Quote, Img } from "../components/styled"
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


const Button = styled.button`
    background-color: #802D45; 
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px;
    margin-top: 5px;
    width: 100%;
    border: none;
    color: white;
    padding: 5px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 4px;
  `;

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
        <StyledCard>
          <h3>Join Our Fast Growing Community Of Women</h3>
          <Img src="/newsletter.png" />


          <Mailchimp
            action='https://snufka.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'

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
                placeholder: 'name',
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
                button: "Subscribe!"
              }
            }
            // Add a personalized class
            className='<YOUR_CLASSNAME>'
          />


          <Quote>
            <form>
              <Input type="text" placeholder="Name"></Input>
              <Input type="text" placeholder="Email"></Input>
              <Button>Submit</Button>
            </form>
          </Quote>






        </StyledCard>
      </Row>
    </Container>
  );
}

export default NewsLetter;

