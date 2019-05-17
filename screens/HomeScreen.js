import React from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Card} from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import { YellowBox } from "react-native";
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Products',
    headerStyle: {
      backgroundColor: "#03A9F4"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };


  render() {
    return (
        <View>
        <View style={styles.cards}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ListView')}>
          <Card
              image={require('../assets/images/air-compressor.jpg')}>
            <Text style={{marginBottom: 10}}>
              Air Compressor
            </Text>
          </Card>
          </TouchableOpacity>
          <Card
              image={require('../assets/images/air-compressor.jpg')}>
            <Text style={{marginBottom: 10}}>
              Air Compressor
            </Text>
          </Card>
        </View>
          <View style={styles.cards}>
          <Card
              image={require('../assets/images/air-compressor.jpg')}>
            <Text style={{marginBottom: 10}}>
              Air Compressor
            </Text>
          </Card>
          <Card
              image={require('../assets/images/air-compressor.jpg')}>
            <Text style={{marginBottom: 10}}>
              Air Compressor
            </Text>
          </Card>
        </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cards:{
    flexDirection: 'row',
    alignItems:'center'
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
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
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
