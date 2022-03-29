import React, { useEffect, useState } from 'react';
import axios from "axios"
const URL= "http://10.229.32.194:8000/api/products"
const API_KEY = "j5pnlUMGQ8groNYW9+3dlxGw8ZePPNhG5xN56ELkTUY="
const MAX_RESULT = 30
export const useFetchSales = () => {
    const getAllSales = async () => {
        try{
            const response = await axios.get(URL,{
                params:{
                    apiKey: API_KEY,
                    number: MAX_RESULT
                }

            })
            console.log("response",response.data)
        }catch (e){
            console.error("Error in getAllSales", e)
        }

    }
    return{
        getAllSales
    }
}
