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

const logout = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.delete(API_URL + "/logout", {
    headers: {
      Authorization: token,
    },
  });
  if (res.data) {
    localStorage.clear();
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
  }
  return res.data //action.payload
};

const authService = {
  register,
  login,
  logout
};

export default authService;
