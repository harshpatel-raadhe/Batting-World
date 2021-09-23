import React from 'react'
import { View, Text } from 'react-native'
import Card from '../Components/Card';
import Score from '../Components/Score';

export default function ScoreBoard() {
    const teamData = [
        {
            id:1,
            url:require('../../assets/team1.png'),
            title:'Chelesea',
            score:'1.8'
        },
        {
            id:2,
            url:require('../../assets/team2.png'),
            title:'Leicester C',
            score:'1.3'
        }
    ]
    return (
        <View style={{flexDirection:'row' , borderColor:'#E4E5E5' ,  borderWidth:1  , borderRadius:8, marginTop:24 , marginHorizontal:32 , justifyContent:'center' , alignItems:'center'  }} >
            <Card title={teamData[0].title} image={teamData[0].url} score={teamData[0].score} />
            <Score />
            <Card title={teamData[1].title} image={teamData[1].url} score={teamData[1].score}/>
        </View>
    )
}
