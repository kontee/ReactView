import React from 'react';
import {Text,View} from 'react-native';

export default class ViewBox extends React.Component{
  render(){
    return(
      <View style={{
        flexDirection:"row",
        height:100,
        padding:20,
      
      }}>
        <View style={{backgroundColor:"#4169E1",flex:0.3}}>
          <Text style={{color:"White",textAlign:"center"}}>Blue</Text>
        </View>
        <View style={{backgroundColor:"#FF0000",flex:0.5}}>
        <Text style={{color:"White",textAlign:"center"}}>red</Text>
        </View>
        <Text> Veera</Text>
      </View>
    )
  }
}