import React, {useState} from 'react';
import { View, Text , ScrollView, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'
import Slider from '../Components/Slider';
import Games from '../Components/Games';
import ScoreBoard from '../Components/ScoreBoard';


export default function HomeScreen() {
    const [ison, setIson] = useState(false)
    return (
        <View style={{flex:1 ,  marginBottom:85}} >
            <ScrollView>
            <View style={{ marginHorizontal:32}} >
                <View style={{flexDirection:'row'}} >
                    <View style={{ flex:1 ,justifyContent:'flex-start'}} >
                        <Text style={{ marginTop:50}} >Hello,</Text>
                        <Text>Wade Warren</Text>
                    </View>
                    <View style={{justifyContent:'flex-end'}} >
                        <AntDesign name="pluscircle" size={24} color="#FF4B00" />
                    </View>
                </View>
                <View  style={{borderColor:'#000000' , borderWidth:1 , backgroundColor:'#F3F4F5' , borderRadius:8, marginTop:16 ,height:40 ,paddingLeft:14 , flexDirection:'row' }}>
                    <View style={{justifyContent:'center' , alignItems:'flex-start' , paddingRight:15}} >
                        <AntDesign name="search1" size={20} style={{}} color="black" />
                    </View>
                    <TextInput placeholder="Search by events, teams" />
                </View>
            </View>
            <Slider />
            <View style={{flexDirection:'row' , paddingHorizontal:32 , marginTop:20}} >
                <View style={{flex:1 , justifyContent:'flex-start'}} >
                    <Text>Top Events</Text>
                </View>
                        <ToggleSwitch
                            isOn={ison}
                            onColor="#FF4B00"
                            label="Live"
                            offColor="black"
                            onToggle={isOn => setIson(!ison)}
                        />
        </View>
        <Games />
       <ScoreBoard />
       <ScoreBoard />
       <ScoreBoard />
       </ScrollView>
        </View>
    )
}
