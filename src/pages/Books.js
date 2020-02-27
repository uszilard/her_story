import React, { useEffect } from "react";
import { Container } from "../components/Grid";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'


const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="

const bookStyles = makeStyles({
    logo: {
        fontFamily: 'Merienda',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#999',
        border: 'ridge'
    },
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
            <nav>
                <h1 className={classes.logo} id='homePageLogo'>Books</h1>
            </nav>

            <div className="App">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>

            <ul className="list-group">
                {searchResults.length && searchResults.map(({ volumeInfo, infoLink }) => {
                    return (
                        <li className="list-group-item" key={volumeInfo.title}>
                            <h4>{volumeInfo.title}</h4>
                            <p>By:{volumeInfo.auther}</p>
                            <img alt={volumeInfo.title} className="img-fluid" src={volumeInfo.imageLinks.smallThumbnail} />
                            <p>{volumeInfo.description}</p>
                            <a href={infoLink}>more info</a>
                        </li>
                    )
                })}
            </ul>

        </Container>
    );
}

export default Books;

