import axios from "axios";

const API_URL = "http://localhost:3001/users";

const register = async (user) => {
  const res = await axios.post(API_URL, user);
  return res.data; //action.payload
};

const login = async (user) => {
  const res = await axios.post(API_URL + "/login", user);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token);
  }

  return res.data; //action.payload
};

const authService = {
  register,
  login,
};

export default authService;
