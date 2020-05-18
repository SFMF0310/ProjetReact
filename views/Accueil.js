import React from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity,ScrollView} from 'react-native';


const { height, width } = Dimensions.get('window');



export default function Accueil({ navigation }) {
  const meetlist = () => {
    navigation.navigate('Meetings');
  }
  const loginAd = () => {
    navigation.navigate('Add');
  }
 
 
  return (
    <View style={styles.container}>
                <Text style={styles.title}>Lamzone</Text>
                <View style={styles.carte}>
      <TouchableOpacity style={styles.button} onPress={meetlist}>
            <Text style={styles.buttonText}>Voir la liste des reunions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={loginAd}>  
            <Text style={styles.buttonText}>Ajouter une reunion</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
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
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#E1F8FE',
    margin: 20,
    marginTop: 200
  },
  button2: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#E1F8FE',
  
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'black',
    fontSize: 18,
  }

  
});




