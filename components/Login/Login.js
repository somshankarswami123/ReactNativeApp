import React from 'react';
import {Button, CheckBox, Image, Platform, StyleSheet, Text, TextInput, View,} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    button1: {},
    container1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
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
        width: 172,
        height: 70,
        resizeMode: 'contain',
        marginTop: 100,
        marginLeft: 94,
        marginRight: 94,

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
    TextInputContainer: {
        borderRadius: 3,
        marginTop: 96,
        marginLeft: 44,
        marginRight: 44
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

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        placeholder="Phone Number"
                        style={{
                            height: 42,
                            borderColor: 'gray',
                            borderWidth: 1,
                            marginTop: 96,
                            marginLeft: 44,
                            marginRight: 44,
                            borderRadius: 30
                            }}
                    />
                </View>
                <View>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Phone Number"
                        style={{
                        height: 42,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginTop: 25,
                        marginLeft: 44,
                        marginRight: 44,
                        borderRadius: 30
                        }}

                    />
                </View>
                <View style={styles.container1}>
                    <CheckBox title='Click Here' checked="true"/><Text>Remember ME</Text>
                    <Text style={{color: 'blue'}}>
                        Forgot Password?
                    </Text>
                </View>
                <View style={styles.container1}>
                    <Button style={styles.button1} title="Login" color="#841584"
                            onPress={() => this.props.navigation.navigate('Home')}/>
                    <Button
                        title='Register' onPress={() => this.props.navigation.navigate('Register')} />

                </View>
            </View>
        );
    }
}
