import { StatusBar } from 'expo-status-bar';
//for navigation
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';

// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//react 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import HomeStatus from './components/HomeStatus';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Explore from './components/Explore';
import Article from './components/Article';
import Search from './components/Search';
import InterestedTopics from './components/InterestedTopics'
import TopBarSC from './components/TopBarSC'
import SingleContent from './components/SingleContent';
import StoryHeader from './components/StoryHeader';
import BackButton from './components/BackButton';
import StoryLanding from './components/Pages/StoryLanding';
import JournalSuggestions from './components/Pages/JournalSuggestions';
import JournalEntry from './components/Pages/JournalEntry';
import BottomBar from './components/BottomBar';
import BottomBarSC from './components/BottomBarSC';
import Share from './components/Share';
import StorySave from './components/Pages/StorySave';
import SecretSharerFirst from './components/Pages/SecretSharerFirst';
import SecretSharerWait from './components/Pages/SecretSharerWait';
import ContentEntry from './components/Pages/ContentEntry';
import ContentReview from './components/Pages/ContentReview';
import metrics from './Themes/Metrics';
import { SafeAreaView } from 'react-native-safe-area-context';
import Response from './components/Pages/Response';
import UserPressable from './components/UserPressable';
import SecretSharerFound from './components/Pages/SecretSharerFound';
import SearchResult from './components/SearchResult';
import User from './components/User';
import EditProfile from './components/EditProfile';
import EditSetting from './components/EditSetting';


const Stack = createStackNavigator();


export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
  const MyTheme = {
    dark: false,
    colors: {
      primary: metrics.pink,
      background: 'white',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    

    <NavigationContainer theme={MyTheme}>

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: metrics.darkPink,
            
          },
          headerTitleStyle: {
            // color: 'transparent',
            fontWeight: 'bold',
            fontSize: 24,
          },
          headerTintColor:'#fff',
        }}>
        <Stack.Screen name='Home' component={Home} options={{title:''}} />
        <Stack.Screen name='Login' component={Login} options={{title: 'Login'}}/>
        <Stack.Screen name='Suggestions' component={InterestedTopics} options={{title:''}} />
        <Stack.Screen name='HomeStatus' component={HomeStatus} options={{title:''}}/>
        <Stack.Screen name='Explore' component={Explore} options={{title: 'Feed'}} />
        <Stack.Screen name='SingleContent' component={SingleContent} options={{title:''}}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='Results' component={SearchResult}/>
        <Stack.Screen name='Article' component={Article} options={{title: 'Feed'}}/>
        {/* story navs */}
        <Stack.Screen name='Story' component={StoryLanding} options={{title:'Story'}}/>
        <Stack.Screen name='JournalEntry' component={JournalEntry} options={{title:''}}/>
        <Stack.Screen name='JournalSuggestions' component={JournalSuggestions} options={{title:''}}/>
        <Stack.Screen name='Response' component={Response}/>
        <Stack.Screen name='SecretSharerWait' component={SecretSharerWait} options={{title:'Matching...'}}/>
        <Stack.Screen name ='SecretSharerFound' component={SecretSharerFound} options={{title:'Secret Sharer'}}/>

        <Stack.Screen name='Share' component={ContentEntry}/>
        <Stack.Screen name='Review' component={ContentReview}/>

        <Stack.Screen name='User' component={User} options={{title:'Me'}}/>
        <Stack.Screen name='EditProfile' component={EditProfile} options={{title:'Edit Profile'}}/>
        <Stack.Screen name='EditSetting' component={EditSetting} options={{title:'Settings'}}/>
        

      </Stack.Navigator>




      {/* <Home/> */}
    </NavigationContainer>


    // <View style={styles.container}>
    //  <JournalEntry/>

    // </View>






  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',
  },
});