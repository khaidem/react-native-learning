import { ImageBackground,Dimensions,View, Text,Image, StyleSheet, TouchableWithoutFeedback, TouchableNativeFeedback ,Button, SafeAreaView} from 'react-native'
import React from 'react'
import WelcomeScreen from './app/screen/WelcomeScreen';



export default function App(){
  return <WelcomeScreen/>
}

// const App = () => {
//   // const handlePress = () => console.log("Text pressed");
//   return (
   
    // Flex Direction is used to align its elements vertical and Horizontally.
    // JustifyContent is used to distribute the elements inside the container.
    // Alignltems is used to distribute the elements inside the container along the secondary axis.
    // Primary axis is the Horizontal and Cross Axis is the vertical
    //
    // <View style={{backgroundColor: "#fff",flex: 1, flexDirection: "row",//Horizontal
    // justifyContent: "Center",//main
    //  alignItems: "center",//secondary
    //  }}>
    //   <View style={{backgroundColor: "gold",width: 100, height: 50,top: 20 
    //     // alignSelf: "flex-start"
    //     }}/>
    //   <View style={{backgroundColor: "tomato",width: 100, height: 50}}/>
    //   <View style={{backgroundColor: "dodgerblue",width: 100, height: 50}}/>
    // </View>
    

    // <SafeAreaView style={style.container}>

    //   <View style={{
    //     backgroundColor: "dogglerblue",
    //     width: "30%",
    //     height: "50%",
    //   }}>
        
    //   </View>
    // </SafeAreaView>
    // <View style={style.container}>
    // <Text onPress={handlePress}>Hello React Native</Text>
    
  
    //   <TouchableWithoutFeedback onPress={()=> console.log("Image Tapped")}>
     
    //   <Image source={
      
    //   require ("./assets/images.jpeg")}/>
    //   </TouchableWithoutFeedback>
    //   <TouchableNativeFeedback>
    //    <View style={{width: 200, height: 70, backgroundColor: "doggerblue"}}></View> 
    //   </TouchableNativeFeedback>
    //   {/* <Image source={{
    //     width: 200,
    //     height: 300,
    //     uri: "https://picsum.photos/200/300"}}/> */}
    // </View>
//   );
// }


// const style = StyleSheet.create({
//   container: {
    
//     backgroundColor : "blue",
//     alignItems : "center",
//     justifyContent : "center",
//   }
// })
