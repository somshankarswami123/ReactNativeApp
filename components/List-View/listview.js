import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, Card} from "react-native-elements";

const data = [
    {
        imageUrl: require("../../assets/images/air-compressor.jpg"),
        title: "Air Compressor(N4) 225cc",
        subtitle:'₹ 9641',
        innerContent:'KB Part No.141590'
    },
    {
        imageUrl: require("../../assets/images/air-compressor.jpg"),
        title: "Air Compressor(N4) 360cc with ESS",
        subtitle:'₹ 9651',
        innerContent:'KB Part No.141591'
    },
    {
        imageUrl: require("../../assets/images/air-compressor.jpg"),
        title: "Air Compressor(N4) 151cc with ESS",
        subtitle:'₹ 9652',
        innerContent:'KB Part No.141592'
    },
    {
        imageUrl:require("../../assets/images/air-compressor.jpg"),
        title: "Air Compressor(N4) 152cc with ESS",
        subtitle:'₹ 9653',
        innerContent:'KB Part No.141593'
    },
];
export default class ListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }


    render() {
        return (
            <View>
                <Button onPress={() => this.props.navigation.navigate('Home')}>
                    Back
                </Button>
                <FlatList
                    vertical
                    data={this.state.data}
                    renderItem={({item: rowData}) => {
                        return (
                            <Card
                                title={rowData.title}
                                image={rowData.imageUrl} imageStyle={{height:80,width:80}}
                                featuredSubtitle={rowData.subtitle}
                                containerStyle={{padding: 0, width: 400}}>
                                <Text>
                                    {rowData.innerContent}
                                </Text>
                            </Card>
                        );
                    }}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
