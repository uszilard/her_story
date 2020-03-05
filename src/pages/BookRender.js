
import React, { useState } from "react"
import { Input, StyledCard, Quote } from "../components/styled"



export default ({ volumeInfo }) => {

    const [
        count, getCount
    ] = useState(0)

    return <StyledCard style={{ display: "flex" }}>
        {volumeInfo.imageLinks ? <div class={'bgContain'} style={{ backgroundImage: `URL('${volumeInfo.imageLinks.thumbnail}')` }} /> : null}
        <Quote>
            <h4>{volumeInfo.title}</h4>
            <p>By: {volumeInfo.authors}</p>
            <p>{volumeInfo.description ? volumeInfo.description.substring(0, 100) + "..." : ''}</p>
            <a href={volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">more info</a>
        </Quote>
        <div>
            <div>{count}</div>
            <button className="countUp" onClick={() => getCount(count + 1)}>UP</button>
            <button className="countDown" onClick={() => getCount(count - 1)}>DOWN</button>
        </div>
    </StyledCard>
}