import React from 'react';
import  { Component } from 'react';
import { StyleSheet, Text, View,Dimensions,TextInput,TouchableOpacity, Alert} from 'react-native';
import  DatePicker  from 'react-native-datepicker';
import TimePicker  from 'react-native-simple-time-picker';


const { height, width } = Dimensions.get('window');


export default class Add extends Component {
  constructor(props){
    super(props)
   this.state = {
      TextInputSujet: '',
      TextInputLieu: '',
      TextInputDate: '',
      TextInputParticipants: '',
      TextInputTimeH: '12',
      TextInputTimeM: '00'


    }
  }
  
  addMeetings = () =>{
    const {TextInputSujet} = this.state;
    const {TextInputLieu} = this.state;
    const {TextInputDate} = this.state;
    const {TextInputParticipants} = this.state;
    const {TextInputTimeH} = this.state;
    const {TextInputTimeM} = this.state;


    fetch('http://192.168.1.130/meetingapp/addMeetings.php',{ 
      method: 'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        sujet : TextInputSujet,
        lieu  : TextInputLieu,
        datee : TextInputDate,
        participants : TextInputParticipants,
        heure: TextInputTimeH+' : '+ TextInputTimeM

      })
      
    }).then((response) => response.json()).then((responseJson) => {
      Alert.alert(responseJson);
    }).catch((error) => {
      console.error(error);
    })

  }
  
  
  render(){
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Lamzone</Text>
      <View style={styles.carte}>
        <View style={styles.content} >
          <TextInput style={styles.in} 
          placeholder='Objet' 
          placeholderTextColor='grey' 
          onChangeText={TextInputValue => this.setState({TextInputSujet : TextInputValue})}>
          </TextInput>

          <TextInput style={styles.in}placeholder='Lieu' 
          placeholderTextColor='grey'
          onChangeText={TextInputValue => this.setState({TextInputLieu : TextInputValue})}>
          </TextInput>

          <TextInput style={styles.in} 
          placeholder='Participants' 
          placeholderTextColor='grey' 
          onChangeText={TextInputValue => this.setState({TextInputParticipants : TextInputValue})}>
          </TextInput>
          <DatePicker androidMode='default' placeholder='Selectionner la date'
          date = {this.state.TextInputDate}
          onDateChange={TextInputValue => this.setState({TextInputDate: TextInputValue})}
           style={styles.inputdate}>
            
          </DatePicker>
          <TimePicker 
          selectedHours={this.state.TextInputTimeH}
          selectedMinutes={this.state.TextInputTimeM}
          onChange={(hours, minutes) => this.setState({ 
               TextInputTimeH: hours, TextInputTimeM: minutes 
         })}
          
          ></TimePicker>
          
          <TouchableOpacity style={styles.btnConnect} onPress={ this.addMeetings }>  
            <Text style={styles.btnConnectTitle}>Enregistrer</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    
  )}
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
    alignItems:"center"
    

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
    
  },
  inputdate:{
    width: width - 125,
    height:40,
    margin: 30,
  }
});




