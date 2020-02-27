import React from "react";
//import ReactDOM from "react-dom"
import { Col, Row, Container } from "../components/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "react-rainbow-components";
import styled from "styled-components";

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

const meetupEvents = [];

const Input = styled.input`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px;
  border-radius: 7px;
  padding: 0.5rem;
  border: 1px solid pink;
  width: -webkit-fill-available;
  font-size: 16px;
  margin-top: 5px;
`;

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
            <Input
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
