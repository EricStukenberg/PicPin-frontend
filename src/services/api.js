const API_ROOT = `http://localhost:3001`;
const token = () => localStorage.getItem("token");

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accepts: "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      Authorization: token()
    };
  };