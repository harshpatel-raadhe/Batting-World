import React from 'react'
import { View, Text } from 'react-native'

export default function Score() {
    return (
        <View style={{flex:1 , justifyContent:'center' , alignItems:'center' , marginVertical:16 }} >
            <Text style={{opacity:0.5}} >Premier League</Text>
            <Text style={{fontSize:22 , marginTop:10 , fontWeight:'bold'}} >1:2</Text>
            <View style={{flexDirection:'row' , justifyContent:'center' ,alignItems:'center' , marginTop:7}} >
                <View style={{height:8 , width:8 , borderRadius:4 , backgroundColor:'#FF4B00'}}></View>
                <Text style={{marginLeft:5 , opacity:0.5}} >49:30</Text>
            </View>
            <View style={{height:34 ,width:83 , justifyContent:'center' , alignItems:'center' , borderWidth:0.5 ,   borderColor:'rgba(0, 0, 0, 0.05)' , marginTop:8 , backgroundColor:'#F3F4F5' , borderRadius:6}} >
                    <Text style={{fontWeight:'700'}} >2.1</Text>
                </View>
        </View>
    )
}
