import React from "react";
//import ReactDOM from "react-dom"
import { Col, Row, Container } from "../components/Grid";
import { makeStyles } from "@material-ui/core/styles";

const eventStyles = makeStyles({
  logo: {
    fontFamily: 'Merienda',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#999',
    border: 'ridge'
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
        <Col size="md-6">
          <nav>
            <h1 className={classes.logo} id="homePageLogo">
              Events
            </h1>
          </nav>
        </Col>
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
