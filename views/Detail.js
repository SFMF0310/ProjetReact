import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions,FlatList,ActivityIndicator, Alert } from 'react-native';
import DetailItem from '../views/MeetList'

const { height, width } = Dimensions.get('window');



export default function Detail({ navigation }) {

    
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{ navigation.getParam('sujet')}</Text>
                <View style={styles.carte}>
                <View style={styles.content}>
                 <Text style={styles.txt}>Lieu :<Text>{ navigation.getParam('lieu') }</Text></Text>
                 <Text style={styles.txt}>Date :  <Text>{ navigation.getParam('date') }</Text></Text>
                 <Text style={styles.txt}>Heure :<Text> { navigation.getParam('heure') }</Text></Text>
                 <Text style={styles.txt}>Participants: <Text>{ navigation.getParam('participant') }</Text></Text>
                 </View>
                 </View>    
            </View>
        )
        }  
        const styles = StyleSheet.create({
            container:{
              flex:1,
              backgroundColor: 'white',
              borderRadius:10,
            },
            carte:{
              flex:50,
              backgroundColor:'#387987',
              alignItems: "center",
            },
            content:{
              backgroundColor:'white',
              width: width - 25 ,
              height: height ,
              margin: 30,
              shadowColor: 'black',
              shadowOpacity: 100, 
              borderRadius:10,
              
          
            },
            title:{
                color: 'black',
                flex: 5 ,
                margin:10,
                textAlign:"center",
                fontSize:30,
                fontStyle: "italic",
              },
            txt:{
                fontSize: 18,
                color: 'black',
                margin:10,
                textAlign:"center",
                fontSize:30,
                fontStyle: "italic",
            }


        })