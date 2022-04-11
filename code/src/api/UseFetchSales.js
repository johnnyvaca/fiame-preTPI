import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {addSales} from "../redux/actions";
import {URL} from "../../env"

export const useFetchSales = () => {
    const dispatch = useDispatch()
    const getAllSales = async () => {
        try {
            const response = await axios.get(URL + "/api/products")
            dispatch(addSales(response.data))
            //  console.log("log1",URL2)
        } catch (e) {
            console.error("Error in getAllSales", e)
        }

    }
    return {
        getAllSales
    }
}
