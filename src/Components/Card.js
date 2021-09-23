import React from 'react'
import { View, Text , Image} from 'react-native'

export default function Card({image , title , score}) {
    return (
        <View style={{flex:1 , justifyContent:'center' , alignItems:'center' , marginVertical:16  }} >
                <Image source={image} />
                <Text style={{paddingTop:10}}>{title}</Text>
                <View style={{height:34 ,width:83 , justifyContent:'center' , alignItems:'center' , borderWidth:0.5 ,   borderColor:'rgba(0, 0, 0, 0.05)' , marginTop:13 , backgroundColor:'#F3F4F5' , borderRadius:6}} >
                    <Text style={{fontWeight:'700'}} >{score}</Text>
                </View>
        </View>
    )
}
