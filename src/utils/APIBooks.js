import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
export default {


  search: function (query) {
    return axios.get(BASEURL + query) + "?maxResults=10?printType=book";
  }


};
