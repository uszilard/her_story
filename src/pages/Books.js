import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import styled from 'styled-components';
import { Card } from 'react-rainbow-components';
import BookRender from './BookRender';
import { Input } from '../components/styled';
import { Container } from '../components/Grid';

const Ul = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
`
const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q='

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

export class VoteUpDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        this.setState({
            score: this.state.score + 1,
        });
    }
    decrement() {
        this.setState({
            score: this.state.score - 1,
        });
    }
    render() {
        return <Books score={this.state.score} />
    }
};

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
                    return (
                        <BookRender volumeInfo={volumeInfo} />
                    )
                }) : "Loading....."}
            </Ul>

            <br></br>

        </Container>
    );
}

export default VoteUpDown;

