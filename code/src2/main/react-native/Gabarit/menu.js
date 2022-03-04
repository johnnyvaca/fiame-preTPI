import * as React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {NavigationBar} from "navigationbar-react-native";

const ComponentLeft = () => {
    return(
        <View style={{ flex: 1, alignItems: 'flex-start', backgroundColor:'yellow', width:'100%'}} >
            <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}}>
                <Image
                    source={require('../img/ic_back.png')}
                    style={{ resizeMode: 'contain', width: 20, height: 20, alignSelf: 'center' }}
                />
                <Text style={{ color: 'blue', }}>prochaines</Text>
            </TouchableOpacity>
        </View>
    );
};

const ComponentLogo = () => {
    return(
        <View style={{ flex: 1, backgroundColor: 'blue'}}>
            <Image
                source={require('../img/ic_logo.png')}
                style={{resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
            />
        </View>
    );
};
const ComponentCenter = () => {
    return(
        <View style={{ flex: 1, alignItems: 'flex-end', backgroundColor:'blue' }}>
            <TouchableOpacity >
                <Text style={{ color: 'white', textAlign: "center"}}>passé</Text>
            </TouchableOpacity>
        </View>
    );
};

const ComponentRight = () => {
    return(
        <View style={{ flex: 1, alignItems: 'flex-end', backgroundColor:'red' }}>
            <TouchableOpacity >
                <Text style={{ color: 'white', }}> mes achats </Text>
            </TouchableOpacity>
        </View>
    );
};

const Menu = () => {
    return (
        <View  style={styles.navbar}>
            <NavigationBar
                componentLeft={() => <ComponentLeft/>}
                componentRight={() => <ComponentRight/>}
                navigationBarStyle={{backgroundColor: 'orange'}}
                statusBarStyle={{barStyle: 'light-content', backgroundColor: '#215e79'}}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    navbar: {
backgroundColor: 'blue',
        width : '100%',
        height : '7%'
    }
});


export default Menu;
