import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import styled from "styled-components";
import { Card } from "react-rainbow-components";
import _ from "lodash"


import { Input, StyledCard, Quote, Img } from "../components/styled"
import { Container } from "../components/Grid";

const Ul = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
`

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="

const bookStyles = makeStyles({
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


function Books() {
    const fetchData = async (str) => {
        const result = await axios.get(BASEURL + str + "&maxResults=10&printType=books");
        console.log(result)
        setSearchResults(result.data.items || []);
    };
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleSubmit = searchBooks => {
        searchBooks.preventDefault();
        fetchData(searchTerm);
    };

    const handleChange = e => {
        setSearchTerm(e.target.value)

    }


    useEffect(() => {
        fetchData('women empowerment');
    }, []);

    const classes = bookStyles();

    return (
        <Container fluid>
            <Card>
                <nav>
                    <img id="homePageLogo" className={classes.img} alt="Logo Her Story" src="/hslogo3.PNG"></img>
                </nav>
            </Card>

            <div className="App">
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange} />
                </form>
            </div>

            <Ul className="list-group">
                {searchResults.length ? searchResults.map(({ volumeInfo }) => {
                    console.log(volumeInfo.imageLinks)
                    return (
                        <StyledCard style={{ display: "flex" }}>
                            {volumeInfo.imageLinks ? <div class={'bgContain'} style={{ backgroundImage: `URL('${volumeInfo.imageLinks.thumbnail}')` }} /> : null}
                            <Quote>
                                <h4>{volumeInfo.title}</h4>
                                <p>By: {volumeInfo.authors}</p>
                                <p>{volumeInfo.description ? volumeInfo.description.substring(0, 100) + "..." : ''}</p>
                                <a href={volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">more info</a>
                            </Quote>
                        </StyledCard>

                    )
                }) : "Loading....."}
            </Ul>

            <br></br>

        </Container>
    );
}

export default Books;

