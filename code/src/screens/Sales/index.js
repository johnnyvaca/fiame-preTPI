import React, {useEffect} from "react";
import {FlatList, Text} from "react-native";
import {useState} from "react";
import SaleItem from "./SaleItem";
import {useFetchSales} from "../../api/UseFetchSales";
import {useSelector} from "react-redux";
import {getSalesList} from "../../redux/selectors";


const DATA = [
    {title:'pollos al horno',price:10,seller:'Johnny Vaca',date:'12.03.2022', id:10, image:require("../../../assets/icons/venta.png"),quantity:5,paid:3},
    {title:'Bandera Ecuatoriana',price:20,seller:'Johnny Vaca',date:'12.03.2022', id:20, image:require("../../../assets/icons/chaulafan.png"),quantity:5,paid:4},
    {title:'Chaulafan',price:15,seller:'Johnny Vaca',date:'12.03.2022', id:30, image:require("../../../assets/icons/chaulafan.png"),quantity:5,paid:3}
]

export default function SalesScreen(){

const allSales = useSelector(getSalesList)
    const {getAllSales} = useFetchSales()
    console.log("ALL Sales: ",allSales)

    useEffect(() =>  {
        getAllSales()
    },[])

    const [sales,setSales] = useState(DATA)

const renderItem = ({item}) => {

        return (
            <SaleItem sale={item} />

        );

    }

    return(

        <FlatList
            data={allSales}
            keyExtractor={(item,index) => index.toString()}
            renderItem={renderItem}
        />

    )
}
