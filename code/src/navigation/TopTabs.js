import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import File from "../components/Header/file";
import TasksScreen2 from "../screens/Tasks/TaskScreen2";
const TopTab = createMaterialTopTabNavigator();

export default function TopTabs(){
    return(
        <TopTab.Navigator>
            <TopTab.Screen name="prochaines" component={TasksScreen2} />
            <TopTab.Screen name="anterie" component={File} />
            <TopTab.Screen name="achats" component={File} />
        </TopTab.Navigator>
    )

}
