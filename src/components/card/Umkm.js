import React from 'react';
import {Text, View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const img = './../../assets/images/image_card_1.png';

class CardUMKM extends React.Component {
    state = {  }
    render() { 
        console.log(this.props.onPress)
        return ( 
            <View style={styles.card}>
                <View style={styles.cardImageContainer}>
                    <Image
                        style={styles.cardImage} 
                        source={require(img)} 
                    />
                </View>
                <View style={styles.cardContentContainer}>
                    <View style={styles.cardItem}>
                        <View style={styles.cardItemTitle}>
                            <Text style={styles.cardItemTitleText}>{this.props.title}</Text>
                        </View>
                        <View style={styles.cardItemContent}>
                            <Text style={styles.cardItemContentText}>{this.props.content}</Text>
                        </View>
                    </View>
                    <TouchableWithoutFeedback
                        onPress={this.props.onPress}
                    >
                        <Text style={styles.link}>Detail</Text>
                    </TouchableWithoutFeedback>
                </View>
                
            </View>
         );
    }
}
 
export default CardUMKM;

const styles = StyleSheet.create({
    card : {
        height : 100,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection : 'row',
        flex : 1,
    },
    cardImageContainer :{
        flex : 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardContentContainer : {
        flex : 5,
        flexDirection : 'row',
    },
    cardItem : {
        flex : 1,
        flexDirection : 'column',
    },
    cardItemTitle : {
        flex : 2,
        paddingTop : 5,
    },
    cardItemContent : {
        flex : 4,
    },
    cardItemTitleText : {
        color: '#333',
        fontSize : 16,
        textAlign: 'justify',
    },
    cardItemContentText : {
        color: '#333',
        fontSize : 14,
        textAlign: 'justify',
    },
    link :{
        color : '#0000EE',
        textAlign: 'center',
        textAlignVertical: "center",
        padding : 10,
    }
});