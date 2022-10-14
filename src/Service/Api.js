import axios from "axios";

const api = {
  method: 'GET',
  url: 'https://betesporte.com/api/Live/GetEvents?includeMarkets=true',
  
  headers: {
    'X-RapidAPI-Key': '30d0e128d9msh501fd066b9da5dfp1e55fbjsn6f79ecc5260f',
    'X-RapidAPI-Host': 'divanscore.p.rapidapi.com'
  }
};



export default api;