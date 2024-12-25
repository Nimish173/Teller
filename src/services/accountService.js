// src/services/accountService.js
import axios from "axios";

const API_URL = "http://localhost:8081/api/accounts";

export const getAccounts = () => {
  return axios.get(API_URL);
};
