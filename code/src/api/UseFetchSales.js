import axios from "axios";
export const useFetchSales = () =>{
    const URL_API = "http://localhost:8000/api/products"
    const API_KEY = ""
    //const API_KEY = "j5pnlUMGQ8groNYW9+3dlxGw8ZePPNhG5xN56ELkTUY="
    const MAX_RESULT = 30

   /* const getAllSales = async () => {
        try {
            const response = await axios.get(
                URL_API,
               {
                   params:{
                       apiKey: API_KEY,
                       number: MAX_RESULT
                   }

            })

            console.log(response.data);
        }catch (e) {
console.error("error in getAllSales: ",e)
        }

    } */
    const getAllSales = async () => {
        try {
            const response = await fetch(
                'https://reactnative.dev/movies.json'
            );
            const json = await response.json();
            return json.movies;
        } catch (error) {
            console.error(error);
        }
    };
    return{
getAllSales
    }
}