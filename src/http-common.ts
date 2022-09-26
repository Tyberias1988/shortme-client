import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5146", //https://localhost:7200
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  }
});