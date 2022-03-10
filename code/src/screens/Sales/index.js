import React from "react";
import {FlatList} from "react-native";
import {useState} from "react";
import SaleItem from "./SaleItem";



const DATA = [
    {title:'pollos al horno22sssss',price:10,seller:'Johnny Vaca',date:'12.03.2022', id:10, image:require('../../../assets/icons/pollo.png')},
    {title:'pollos al horno22sssss',price:20,seller:'Johnny Vaca',date:'12.03.2022', id:20, image:require('../../../assets/icons/pollo.png')},
    {title:'pollos al horno22sssss',price:30,seller:'Johnny Vaca',date:'12.03.2022', id:30, image:require('../../../assets/icons/pollo.png')}
]

export default function SalesScreen(){
    const [sales,setSales] = useState(DATA)

const renderItem = ({item}) => {

        return (
            <SaleItem sale={item}  />

        )

    }

    return(
        <FlatList
            data={sales}
            keyExtractor={(item,index) => index.toString()}
            renderItem={renderItem}
        />
    )
}
