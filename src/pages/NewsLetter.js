import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { makeStyles } from '@material-ui/core/styles';

const NewsLetterStyles = makeStyles({
    logo: {
        fontFamily: 'Merienda',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#999',
        border: 'ridge'
    },
});
function NewsLetter() {
    const classes = NewsLetterStyles();
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <nav>
                        <h1 className={classes.logo} id='homePageLogo'>NewsLetter</h1>
                    </nav>
                </Col>
                <Col size="md-6 sm-12">

                </Col>
            </Row>
        </Container>
    );
}

export default NewsLetter;