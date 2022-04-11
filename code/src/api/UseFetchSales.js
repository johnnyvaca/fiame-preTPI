import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {addSales} from "../redux/actions";

export const URL= "http://10.229.57.10:8000";

// const API_KEY = "j5pnlUMGQ8groNYW9+3dlxGw8ZePPNhG5xN56ELkTUY="
const MAX_RESULT = 30
export const useFetchSales = () => {
    const dispatch = useDispatch()
    const getAllSales = async () => {
        try{
            const response = await axios.get(URL+"/api/products")
            dispatch(addSales(response.data))
          //  console.log("log1",URL2)
        }catch (e){
            console.error("Error in getAllSales", e)
        }

    }
    return{
        getAllSales
    }
}
