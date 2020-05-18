import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import  MeetList from '../views/MeetList';
import Accueil from '../views/Accueil';
import Add from '../views/Add';
import Detail from '../views/Detail';


const page = {
    Lamzone:{
        screen : Accueil   
    },
    Meetings:{
        screen : MeetList
    },
    Detail:{
        screen : Detail
    },
    Add:{
        screen : Add
    }
}
const nav = createStackNavigator(page); 
export default createAppContainer(nav);