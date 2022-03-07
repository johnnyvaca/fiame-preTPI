import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import File from "../components/Header/file";
import TasksScreen from "../screens/Tasks/TaskScreen2";
import SalesScreen from "../screens/Sales";
const TopTab = createMaterialTopTabNavigator();

export default function TopTabs(){
    return(
        <TopTab.Navigator>
            <TopTab.Screen name="prochaines" component={SalesScreen} />
            <TopTab.Screen name="anterieurs" component={File} />
            <TopTab.Screen name="mes achats" component={File} />
        </TopTab.Navigator>
    )

}
