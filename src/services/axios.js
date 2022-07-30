import axios from "axios";
const instance = axios.create({
  baseURL: "http://assessment.tabit-gmbh.de",
});

export default instance;
