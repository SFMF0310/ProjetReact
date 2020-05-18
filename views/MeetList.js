import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions,FlatList,ActivityIndicator, Alert } from 'react-native';


const { height, width } = Dimensions.get('window');



export default class MeetList extends Component {
  constructor(props)
  {
 
    super(props);
 
    this.state = { 
    isLoading: true
  }
  }
 
  componentDidMount() {
    
       return fetch('http://192.168.1.130/meetingapp/list.php')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
             
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }
 
FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
 
  
 
 
  render() {
 
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
 
<View style={styles.container}>
      <Text style={styles.title}>Meetings</Text>
      <View style={styles.carte}>
        <View style={styles.content}>
  
       <FlatList
       
          data={ this.state.dataSource }
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => <Text style={styles.FlatListItemStyle}
          onPress={() => { this.props.navigation.navigate('Detail',{
          id:item.id,
          sujet: item.sujet,
          lieu:item.lieu,
          date: item.datee,
          heure: item.heure,
          participant:item.participants
         })}} > {item.sujet} </Text>}
 
          keyExtractor={(item, index) => item.id}
          
         />
    </View>
    </View>
</View>
            
    );
  }
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
    FlatListItemStyle: {
      padding: 10,
      fontSize: 18,
      height: 44,
    }


}
 /*
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,
 
},
 
FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
 
});


*/)