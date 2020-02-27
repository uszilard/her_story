import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { Card } from "react-rainbow-components";

const NewsLetterStyles = makeStyles({
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

function NewsLetter() {
    const classes = NewsLetterStyles();
    return (
        <Container fluid>
            <Row>
                <Card>
                    <nav>
                        <img id="homePageLogo" className={classes.img} alt="Logo Her Story" src="/hslogo3.PNG"></img>
                    </nav>
                </Card>
                <Col size="md-6 sm-12">

                </Col>
            </Row>
        </Container>
    );
}

export default NewsLetter;