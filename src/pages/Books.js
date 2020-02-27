import React, { useEffect } from "react";
import { Container } from "../components/Grid";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import styled from "styled-components";
import { Card } from "react-rainbow-components";


const Input = styled.input`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px;
  border-radius: 7px;
  padding: 0.5rem;
  border: 1px solid pink;
  width: -webkit-fill-available;
  font-size: 16px;
  margin-top: 5px;
`;
const StyledCard = styled(Card)`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px;
  border-radius: 7px;
  margin-top: 5px;
`;
export const Quote = styled.div`
  padding: 0.5rem;
  font-family: "Open Sans", sans-serif;
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

`;

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

    const [searchTerm, setSearchTerm] = React.useState("women enpwerment");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = searchBooks => {
        setSearchTerm(searchBooks.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(BASEURL + searchTerm + "&maxResults=10&printType=books");
            console.log(result)
            setSearchResults(result.data.items || []);
        };
        fetchData();
    }, [searchTerm]);

    const classes = bookStyles();
    return (
        <Container fluid>
            <Card>
                <nav>
                    <img id="homePageLogo" className={classes.img} alt="Logo Her Story" src="/hslogo3.PNG"></img>
                </nav>
            </Card>

            <div className="App">
                <Input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>

            <Ul className="list-group">
                {searchResults.length && searchResults.map(({ volumeInfo }) => {
                    return (
                        <li className="list-group-item" key={volumeInfo.title}>
                            <StyledCard>
                                <Img src={volumeInfo.imageLinks.smallThumbnail} />
                                <Quote>
                                    <h4>{volumeInfo.title}</h4>
                                    <p>By: {volumeInfo.authors}</p>
                                    <p>{volumeInfo.description.substring(0, 100) + "..."}</p>
                                    <a href={volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">more info</a>
                                </Quote>
                            </StyledCard>
                        </li>
                    )
                })}
            </Ul>

        </Container>
    );
}

export default Books;

