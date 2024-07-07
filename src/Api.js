import axios from "axios";

const urlApi                 = "http://preguntados-api.vercel.app/api/";
const get = (url, config = {})            => axios.get(url, config);
const post = (url, data, config = {})      => axios.post(url, data, config);

export const getDifficulty = () => get( urlApi  + "difficulty" );
export const getQuestions = (query) => get( urlApi + "questions?difficulty=" + query )
export const addComment = (data) => post( urlApi + "answer", data);