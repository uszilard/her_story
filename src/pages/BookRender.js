
import React, { useState } from 'react';
import { StyledCard, Quote } from '../components/styled';
import { Card } from 'react-rainbow-components';
import styled from 'styled-components';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Row, Container } from '../components/Grid';

const VoteCard = styled(Card)`
box-shadow: rgba(0,0,0,0.12) 0px 2px 10px;
padding: 0.5rem;
border: 1px solid #ccc;
border-radius: 7px;
width: -webkit-fill-available;
margin-bottom: 10px;
`;

const voteStyleUp = {
paddingRight: '10px'
};

const voteStyleDown = {
paddingLeft: '10px'
};

const counterStyle = {
    border: '2px solid rgb(204, 204, 204)',
    padding: '5px',
    fontSize: 'x-large',
    fontStyle: 'italic'
};

export default ({ volumeInfo }) => {

    const [
        count, getCount
    ] = useState(0)

    return <Container>
        <Row>
        <StyledCard style={{ display: 'flex' }}>
        {volumeInfo.imageLinks ? <div class={'bgContain'} style={{ backgroundImage: `URL('${volumeInfo.imageLinks.thumbnail}')` }} /> : null}

            <Quote>
                <div>
                    <h4>{volumeInfo.title}</h4>
                    <p>By: {volumeInfo.authors}</p>
                    <p>{volumeInfo.description ? volumeInfo.description.substring(0, 100) + '...' : ''}</p>
                    <a href={volumeInfo.infoLink} target='_blank' rel='noopener noreferrer'>more info</a>  
                </div>
            </Quote>
        </StyledCard>

        </Row>
            <VoteCard>
                <Row xs='12'>
                    <div>
                    <ThumbUpIcon className='countUp' showLabel='true' style={voteStyleUp} onClick={() => getCount(count + 1)} icon={<ThumbUpIcon />} />
                    <counter style={counterStyle}>{count}</counter>
                    <ThumbDownIcon className='countDown' showLabel='true' style={voteStyleDown} onClick={() => getCount(count - 1)} icon={<ThumbDownIcon />} />
                    </div>
                </Row>
            </VoteCard>
    
    </Container>
}