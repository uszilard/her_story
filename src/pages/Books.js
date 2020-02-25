import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import { makeStyles } from '@material-ui/core/styles';
import APIBooks from "../utils/APIBooks"



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

    const [data, setData] = useState({ hits: [] });



    useEffect(() => {
        const fetchData = async () => {
            const result = await APIBooks.search()
            setData(result.data);
        };
        fetchData();
    }, []);

    const classes = bookStyles();

    console.log(data)
    return (
        <Container fluid>
            <nav>
                <h1 className={classes.logo} id='homePageLogo'>Books</h1>
            </nav>

        </Container>
    );
}

export default Books;

