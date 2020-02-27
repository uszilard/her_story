import React from "react";
//import ReactDOM from "react-dom"
import { Col, Row, Container } from "../components/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "react-rainbow-components";

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

const meetupEvents = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];

function Events() {
  const classes = eventStyles();

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = meetupEvents => {
    setSearchTerm(meetupEvents.target.value);
  };
  React.useEffect(() => {
    const results = meetupEvents.filter(meetupEvents =>
      meetupEvents.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Container fluid>
      <Row>
        <Card>
          <nav>
            <img id="homePageLogo" className={classes.img} alt="Logo Her Story" src="/hslogo3.PNG"></img>
          </nav>
        </Card>
        <Col size="md-6 sm-12">
          <div className="App">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
            <ul>
              {searchResults.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Events;
