import React, {useState} from 'react';
import { View, Text , Image, ScrollView, TextInput, ImageBackground, TouchableOpacity} from 'react-native';

export default function Games() {    

    const [data, setData] = useState([
        {
            id:1, 
            title:'Football',
            isSelected:true,
        },
        {
            id:2, 
            title:'Baseball',
            isSelected:false,
        },
        {
            id:3, 
            title:'Vollyball',
            isSelected:false,
        },
        {
            id:4, 
            title:'Rugby',
            isSelected:false,
        },
        {
            id:5, 
            title:'Basketball',
            isSelected:false,
        }
    ])

    const changeLocation = (selectedItem) => {
        let currentData = data;
        currentData.map((item,index)=>{
            if(index === selectedItem){
                item.isSelected = true;
            } else{
                item.isSelected = false;
            }
        })
        setData(currentData.slice());
    }
    
    // let selectedLocation;
    // data2.map((location, index)=>{
    //     if(location.isSelected == true){
    //         selectedLocation = location;
    //     }
    // })

    return (
        <View style={{ marginTop:16  ,alignItems:'center' }} >
                <ScrollView horizontal={true} >
                {
                    data.map((item, index ) => {
                        return(
                            <TouchableOpacity activeOpacity={1} onPress={() => changeLocation(index)} style={{display:'flex' , flexDirection:'row'}}>
                            <View style={[ item.isSelected == true ? {width:95 , height:40 , flexDirection:'row' , justifyContent:'space-evenly' , marginRight:5 , borderRadius:8 , alignItems:'center' , backgroundColor:'black'} : {height:40, width:40 , flexDirection:'row' , justifyContent:'space-evenly' , marginRight:5 , borderRadius:8 , alignItems:'center' , backgroundColor:'#F3F4F5'}]} key={item.id}>
                                {
                                item.isSelected ? 
                                <Image source={require('../../assets/ball.png')} /> 
                                : 
                                <Image source={require('../../assets/anotherball.png')} /> 
                                } 
                            {
                                !item.isSelected ? <></> : 
                                <Text style={{color:'#fff'}} >{item.title}</Text> 
                            }
                        </View>
                        </TouchableOpacity>
                        )
                    })
                }
                </ScrollView>
        </View>
    )
}
