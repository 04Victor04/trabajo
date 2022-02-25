import axios from "axios";
//Creada la clave api , con mi cuenta de gmail ,si no funciona en el proyecto central es porque esta ligado a este y tenemos que generar otra en https://www.googleapis.com/youtube/v3
const KEY = 'AIzaSyCTobYAWP0F12VKYdfXSo-t0yl9-67_5bA';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }

})