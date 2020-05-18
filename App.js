import React from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity,} from 'react-native';
import Navigator  from './routes/nav';


const { height, width } = Dimensions.get('window');



export default function App() {
  return (
    <Navigator/>

  
    
  );
}


const styles = StyleSheet.create({
  container:{
    
  },
  
  
});




