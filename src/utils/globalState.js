import React from "react";

const BooksContext = React.createContext({
    title: "", //volumeInfo.title
    auther: "", ///volumeInfo.auther
    description: "", //volumeInfo.description
    img: "", //imageLinks.smallThumbnail
    link: "", //infoLink
    handleBtnClick: () => { }
});

export default BooksContext;
