import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 


import Category from '../components/news/Category';
import LinksScreen from './LinksScreen';

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

        <View style={{ height: 130, marginTop: 80 }}>
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

        <ScrollView>
        
          <View style={styles.button}>
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPress} title="Button 1" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPress} title="Button 2" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPress} title="Button 3" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
          </View>

          <View style={styles.button}>
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPress} title="Button 4" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPress} title="Button 5" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPress} title="Button 6" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
          </View>

          <View style={styles.button}>
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPress} title="Button 7" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPress} title="Button 8" color="#FFFFFF" accessibilityLabel="Tap on Me" />
            </View>
            <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.props.navigation.navigate('Links')} title="Button 9" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
            </View>
          </View>

        </ScrollView>


        <View style={styles.tabBarInfoContainer}>
          <Text style={[styles.tabBarInfoText, styles.navigationFilename]}>WPI</Text>
        </View>
      </View >

    );
  }
  

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Links: LinksScreen,
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
    marginTop: 20,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
