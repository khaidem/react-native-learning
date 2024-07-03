//Short cut rsf => React statless Function

import React from 'react';
import {  Image, ImageBackground, StyleSheet,  Text,  View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/restaurant.jpg")}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
            <Text>World Best Cafe</Text>
            </View>
           
             <View style={styles.loginButton}>
                <Text>Login</Text>
             </View>
             <View style={styles.registerButton}>
                <Text>Register</Text>
             </View>
        </ImageBackground>
        
    );
}

//rnss => short cut for react-navtive style sheet 
const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: "center",
        width: null,
        height: null,
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
        justifyContent: "center",
        alignItems: "center",
        
    },
    registerButton: {
        backgroundColor: "#4ecdc4",
        height: 50,
        width: "100%",
        justifyContent: "center",
            alignItems: "center",
        },
    logo: {
        width: 100,
        height: 100,
        
        
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
                alignItems: "center",
        


    },
    
})
export default WelcomeScreen;