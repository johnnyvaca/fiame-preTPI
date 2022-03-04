import React from "react";
import {View} from "react-native";
import TaskTile from "./TaskTile_2";

export default function TaskScreen2(){
    return(
        <View style={{paddingTop:20}}>
        <TaskTile  nom="Sushi" date="02 mars 2022" vendeur="XIAMO XONG" prix="10.-" />
        <TaskTile  nom="Sushi" date="02 mars 2022" vendeur="Patricia Rio" prix="20.-" />
        <TaskTile  nom="Sushi" date="02 mars 2022" vendeur="XIAMO XONG" prix="30.-" />
        <TaskTile  nom="Sushi" date="02 mars 2022" vendeur="XIAMO XONG" prix="30.-" />
        <TaskTile  nom="Sushi" date="02 mars 2022" vendeur="XIAMO XONG" prix="30.-" />


        </View>
    )
}
