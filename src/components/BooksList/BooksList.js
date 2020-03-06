import React from 'react';
/* title: '', //volumeInfo.title
    auther: '', ///volumeInfo.auther
    description: '', //volumeInfo.description
    img: '', //imageLinks.smallThumbnail
    link: '', //infoLink*/

function ResultBookList(props) {
    return (
        <ul className='list-group'>
            {props.results.map(result => (
                <li className='list-group-item' key={result.volumeInfo.title}>
                    <h4>{result.volumeInfo.title}</h4>
                    <p>By:{result.volumeInfo.auther}</p>
                    <img alt={result.volumeInfo.title} className='img-fluid' src={result.imageLinks.smallThumbnail} />
                    <p>{result.volumeInfo.description}</p>
                    <a href={result.infoLink}>more info</a>
                </li>
            ))}
        </ul>
    );
}

export default ResultBookList;
