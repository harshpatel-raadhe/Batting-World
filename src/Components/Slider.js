import React, {useState} from 'react';
import { View, Text , Image, ScrollView, TextInput, ImageBackground} from 'react-native';
import { Theme } from '../Constants/Theme'
import { AntDesign } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'


export default function Slider() {

    const data = [{id:1},{id:2},{id:3},{id:4},{id:5}]

    return (
        <View>
        <Text style={{paddingTop:15 , paddingLeft:32 }} >Tournaments</Text>

        <ScrollView style={{paddingLeft:32 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    data.map((value) => {
                        return(
                            <View style={[ {width:280 ,height:136 ,borderRadius:8 , marginTop:24 , marginRight:15 , backgroundColor:'#FF4B00'} , data.length == value + 1 ? {marginRight:32} : {} ]}   key={value.id}>
                            <ImageBackground style={{flex:1}} source={require('../../assets/path56.png')}>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1 }}>
                                    <View style={{flex:1 , marginLeft:24}} >
                                        <View style={{flexDirection:'row', marginTop:24}} >
                                          <AntDesign name="rightsquare" size={24} color="white" />
                                          <Text style={{marginLeft:12 , color:'#FFF' , alignSelf:'center'}} numberOfLines={1}>All matches</Text>
                                        </View>
                                        <View style={{marginTop:24}} >  
                                            <Text style={{color:'#fff'}} numberOfLines={1}>PREMIER</Text>
                                            <Text style={{color:'#fff'}}>LEAGUE</Text>
                                        </View>
                                    </View>
                                    </View>
                                    <View style={{justifyContent:'flex-end' , alignItems:'flex-end'}} >
                                        <Image source={require('../../assets/player.png')} />
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        )
                    })
                }
            </ScrollView>
            </View>
    )
}
