import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,Image,
    View,
    TouchableOpacity,
} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';

const ComponentLeft = () => {
    return(
        <View style={{ flex: 1, alignItems: 'flex-start', backgroundColor:'yellow'}} >
            <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}}>
                <Image
                    source={require('./img/ic_back.png')}
                    style={{ resizeMode: 'contain', width: 20, height: 20, alignSelf: 'center' }}
                />
                <Text style={{ color: 'blue', }}>Back Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const ComponentCenter = () => {
    return(
        <View style={{ flex: 1, backgroundColor: 'blue'}}>
            <Image
                source={require('./img/ic_logo.png')}
                style={{resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
            />
        </View>
    );
};

const ComponentRight = () => {
    return(
        <View style={{ flex: 1, alignItems: 'flex-end', backgroundColor:'red' }}>
            <TouchableOpacity>
                <Text style={{ color: 'white', }}> Rights </Text>
            </TouchableOpacity>
        </View>
    );
};

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                <NavigationBar
                    componentLeft={ () => <ComponentLeft />}
                    componentCenter   = { () =>  <ComponentCenter /> }
                    componentRight    = { () =>  <ComponentRight />  }
                    navigationBarStyle= {{ backgroundColor: 'orange' }}
                    statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'rgba(219,220,208,0.92)',

    },
    navbar : {
        position: 'absolute',
        top: '10%',
        left: 0,
        right: 0,
    }
});
export default App;
