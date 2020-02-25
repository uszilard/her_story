import React, { useEffect, useState } from "react";
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

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(BASEURL + "women" + "?maxResults=10?printType=book");
            console.log(result)
            setData(result.data.items);
        };
        fetchData();
    }, []);

    const classes = bookStyles();
    console.log("dsafdshj", data);
    return (
        <Container fluid>
            <nav>
                <h1 className={classes.logo} id='homePageLogo'>Books</h1>
            </nav>

            <ul className="list-group">
                {data.length && data.map(result => (
                    <li className="list-group-item" key={result.volumeInfo.title}>
                        <h4>{result.volumeInfo.title}</h4>
                        <p>By:{result.volumeInfo.auther}</p>
                        <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks.smallThumbnail} />
                        <p>{result.volumeInfo.description}</p>
                        <a href={result.infoLink}>more info</a>
                    </li>
                ))}
            </ul>

        </Container>
    );
}

export default Books;

