import axios from "axios";


const BASE_URL="https://youtube-v31.p.rapidapi.com"
const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': "d9b49cf6b2mshff30f365be332bcp11a2e3jsn6da65d0fcdac",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI=async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}