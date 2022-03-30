import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {addRecipes} from "../redux/actions";
const URL= "http://192.168.1.104:8000/api/products"
const API_KEY = "j5pnlUMGQ8groNYW9+3dlxGw8ZePPNhG5xN56ELkTUY="
const MAX_RESULT = 30
export const useFetchSales = () => {
    const dispatch = useDispatch()
    const getAllSales = async () => {
        try{
            const response = await axios.get(URL,{
                params:{
                    apiKey: API_KEY,
                    number: MAX_RESULT
                }

            })
            dispatch(addRecipes(response.data))
        }catch (e){
            console.error("Error in getAllSales", e)
        }

    }
    return{
        getAllSales
    }
}
