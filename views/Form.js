import React from 'react';
import { StyleSheet, Text, View,Dimensions,TextInput,TouchableOpacity} from 'react-native';


const { height, width } = Dimensions.get('window');


export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lamzone</Text>
      <View style={styles.carte}>
        <View style={styles.content}>
          <TextInput style={styles.in} placeholder='Email' placeholderTextColor='black'></TextInput>
          <TextInput style={styles.in}placeholder='Password' placeholderTextColor='black'></TextInput>
          <TouchableOpacity style={styles.btnConnect}>  
            <Text style={styles.btnConnectTitle}>Se Connecter</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    marginTop:30,
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
  btnConnect:{
    backgroundColor:'#387987',
    width: width - 125,
    height:40,
    margin: 30,
      
  },
  btnConnectTitle:{
    margin: 5,
    textAlign:"center",
    fontSize: 20,
  },
  title:{
    color: 'black',
    flex: 5 ,
    margin:10,
    textAlign:"center",
    fontSize:30,
    fontStyle: "italic",
  },
  in:{
    borderBottomWidth: 1,
    width: width - 125,
    padding: 25,
    margin:25,
    borderStyle:"solid",
  }
  
});




