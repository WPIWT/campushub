import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


import Category from '../components/news/Category';
import LinksScreen from './LinksScreen';
import DiningScreen from './DiningScreen';

export default class HomeScreen extends React.Component {

  _onPress() {
    Alert.alert('on Press!');
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
       
      <View style={styles.container}>
        <ScrollView>
          <View style={{ height: 130, marginTop: 100 }}>
            <ScrollView
              horizontal={true}>
              <Category
                imageUri={require('../assets/images/robot-dev.png')}
                name="Robot">
              </Category>
              <Category
                imageUri={require('../assets/images/robot-dev.png')}
                name="Robot 1">
              </Category>
              <Category
                imageUri={require('../assets/images/robot-dev.png')}
                name="Robot 2">
              </Category>
              <Category
                imageUri={require('../assets/images/robot-dev.png')}
                name="Robot 3">
              </Category>
              <Category
                imageUri={require('../assets/images/robot-dev.png')}
                name="Robot 4">
              </Category>
            </ScrollView>
          </View>
        {/* </ScrollView>   

        <ScrollView> */}
        
          <View style={styles.buttonFirstRow}>
            <View style={styles.buttonContainer}>
              <FontAwesome name="pencil" size={40} color="white" />
              <Button 
                onPress={() => this.props.navigation.navigate('Links')} 
                title="Study" color="#FFFFFF" accessibilityLabel="Tap on Me" titleStyle ={{fontFamily: 'MinionPro-BoldDisp'}} />
            </View>
            <View style={styles.buttonContainer}>
              <MaterialIcons name="local-dining" size={42} color="white" />
              <Button 
                onPress={() => this.props.navigation.navigate('Dining')} 
                title="Dining" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
            <View style={styles.buttonContainer}>
              <Button 
                onPress={() => this.props.navigation.navigate('Links')} 
                title="Campus Map" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
          </View>

          <View style={styles.button}>
            <View style={styles.buttonContainer}>
              <FontAwesome name="calendar" size={40} color="white" />
              <Button 
                onPress={() => this.props.navigation.navigate('Links')} 
                title="Calendar" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
            <View style={styles.buttonContainer}>
              <MaterialCommunityIcons name="calendar-clock" size={42} color="white" />
              <Button 
                onPress={() => this.props.navigation.navigate('Links')} 
                title="Booking" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
            <View style={styles.buttonContainer}>
              <MaterialIcons name="local-laundry-service" size={42} color="white" />
              <Button 
                onPress={() => this.props.navigation.navigate('Links')} 
                title="Laundry" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
          </View>

          <View style={styles.button}>
            <View style={styles.buttonContainer}>
              <MaterialIcons name="people-outline" size={42} color="white" />
              <Button 
                onPress={() => this.props.navigation.navigate('Links')} 
                title="Clubs" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
            <View style={styles.buttonContainer}>
              <FontAwesome name="building-o" size={40} color="white" />
              <Button 
                onPress={() => this.props.navigation.navigate('Links')} 
                title="Hours of Operation" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
            <View style={styles.buttonContainer}>
              <Feather name="book" size={40} color="white" />
              <Button
                onPress={() => this.props.navigation.navigate('Links')} 
                title="Catalogue" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
            </View>
          </View>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Go to Dining"
              onPress={() => this.props.navigation.navigate('Dining')}
            />
          </View>
         
          </ScrollView>


        <View style={styles.tabBarInfoContainer}>
          <Text style={[styles.tabBarInfoText, styles.navigationFilename]}>WPI</Text>
        </View> 
      </View >

    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Links: LinksScreen,
    Dining: {screen: DiningScreen},
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

 class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonFirstRow: {
    flex: 1,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    backgroundColor: '#AC2B37',
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'white',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#AC2B37',
    paddingVertical: 0,

  },
  tabBarInfoText: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'MinionPro-BoldDisp',
  },
  navigationFilename: {
    marginTop: 30,
  },
});
