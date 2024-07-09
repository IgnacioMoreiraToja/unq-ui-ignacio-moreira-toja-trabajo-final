import axios from "axios";

const urlApi = "https://preguntados-api.vercel.app/api/";
const get = (url = {}) => axios.get(url);
const post = (url, body = {}) => axios.post(url, body);

export const getDifficulty = () => get(urlApi + "difficulty");
export const getQuestions = (query) => get(urlApi + "questions?difficulty=" + query);
export const postAnswer = (body) => post(urlApi + "answer", body);