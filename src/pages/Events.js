import React from 'react';
import { Row, Container } from '../components/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from 'react-rainbow-components';
import { StyledCard, Quote, Img } from '../components/styled';

const eventStyles = makeStyles({
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

function Events() {
  const classes = eventStyles();

  return (
    <Container fluid>
      <Row>
        <Card>
          <nav>
            <img id="homePageLogo" className={classes.img} alt="Logo Her Story" src="/hslogo3.PNG"></img>
          </nav>
        </Card>
      </Row>
      {[{
        eventTitle: "Women's Empowerment Brunch - Berlin: Self-Worth Edition",
        host: "Female Leaders Berlin",
        Date: "Mon, March 2",
        startHour: "10:00 AM ",
        endHour: "11:30 AM",
        eventDiscription: "How to start a business in Berlin? What is Finanzamt and what should I know before I go there? What to know before I start? Where to find funding? Is my business plan doable?",
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F94083153%2F265910673666%2F1%2Foriginal.20200225-172630?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=da73879085fdc7b067022bf1a13a941e",

        eventLink: "https://www.eventbrite.com/e/female-leaders-berlin-tickets-92711517645?aff=ebdssbdestsearch"
      },
      {
        eventTitle: "Women's Empowerment Brunch - Berlin: Self-Worth Edition",
        host: "Female Leaders Berlin",
        Date: "Mon, March 2",
        startHour: "10:00 AM ",
        endHour: "11:30 AM",
        eventDiscription: "How to start a business in Berlin? What is Finanzamt and what should I know before I go there? What to know before I start? Where to find funding? Is my business plan doable?",
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F93385789%2F313768158343%2F1%2Foriginal.20200220-152917?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C170%2C2666%2C1333&s=8cecee2a49f76369ca1c3d8801cae38d",

        eventLink: "https://www.eventbrite.com/e/female-leaders-berlin-tickets-92711517645?aff=ebdssbdestsearch"
      }, {
        eventTitle: "Women's Empowerment Brunch - Berlin: Self-Worth Edition",
        host: "Female Leaders Berlin",
        Date: "Mon, March 2",
        startHour: "10:00 AM ",
        endHour: "11:30 AM",
        eventDiscription: "How to start a business in Berlin? What is Finanzamt and what should I know before I go there? What to know before I start? Where to find funding? Is my business plan doable?",
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F82952049%2F99471336139%2F1%2Foriginal.20191128-174950?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=13163deb11b60e304e33a0819906637d",

        eventLink: "https://www.eventbrite.com/e/female-leaders-berlin-tickets-92711517645?aff=ebdssbdestsearch"
      }, {
        eventTitle: "Women's Empowerment Brunch - Berlin: Self-Worth Edition",
        host: "Female Leaders Berlin",
        Date: "Mon, March 2",
        startHour: "10:00 AM ",
        endHour: "11:30 AM",
        eventDiscription: "How to start a business in Berlin? What is Finanzamt and what should I know before I go there? What to know before I start? Where to find funding? Is my business plan doable?",
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F93852397%2F388934702595%2F1%2Foriginal.20200103-195300?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C46%2C1920%2C960&s=f53c2c2ee792cbbbd234f86daed7445b",

        eventLink: "https://www.eventbrite.com/e/female-leaders-berlin-tickets-92711517645?aff=ebdssbdestsearch"
      },
      {
        eventTitle: "Women's Empowerment Brunch - Berlin: Self-Worth Edition",
        host: "Female Leaders Berlin",
        Date: "Mon, March 2",
        startHour: "10:00 AM ",
        endHour: "11:30 AM",
        eventDiscription: "How to start a business in Berlin? What is Finanzamt and what should I know before I go there? What to know before I start? Where to find funding? Is my business plan doable?",
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F91321141%2F298686225692%2F1%2Foriginal.20200206-232537?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C75%2C1234%2C617&s=e5a2dce9573ce652df5ca5d4d2b83127",

        eventLink: "https://www.eventbrite.com/e/female-leaders-berlin-tickets-92711517645?aff=ebdssbdestsearch"
      }].map(({ eventTitle, Date, img, eventLink, eventDiscription }) => (
        <div style={{ margin: "1rem 0rem" }}>
          <Row>

            <StyledCard>

              <Img src={img} />

              <Quote>
                <h4> {eventTitle} </h4>
                <h5>{Date}</h5>
                <p>{eventDiscription}</p>
                <a href={eventLink} target="_blank" rel="noopener noreferrer">Event Info</a>
              </Quote>
            </StyledCard>
          </Row>
        </div>
      ))}}
  
    </Container>
  );
}

export default Events;
