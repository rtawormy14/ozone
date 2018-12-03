import React from 'react';
import { Image, Text, Alert, ScrollView, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, KeyboardAvoidingView, StatusBar, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'


import {FloatingButton, CustomButton} from '../../components/input/Button';
import CardUMKM from '../../components/card/Umkm'
import styles from '../../styles/styles'


class Kunjungan extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Catatan Kunjungan',
        }
    };

    alert = (msg) => {
        console.log(msg);
    }

    onClick = () => {
        this.alert('onConfirm');
        this.props.navigation.navigate('KunjunganForm');
      }

    onClickDetail = () => {
        this.alert('onClickDetail');
        this.props.navigation.navigate('DetailKunjungan');
    }

    state = {  }
    render() { 
        initialData = [
            {
                id : 1,
                title : 'Toko Maju Jaya',
                content : 'Jl Cendrawasih, No 12 Jakarta Pusat',
                image : 'Image 1',
            },
            {
                id : 2,
                title : 'RM Padang Sejahtera',
                content : 'Jl. Nuri, Block C3, No 19 Jakarta Pusat',
                image : 'Image 1',
            },
            {
                id : 3,
                title : 'Queen Mango',
                content : 'Jl Cendrawasih, No 12 Jakarta Pusat',
                image : 'Image 1',
            }
        ];
        cardList = initialData.map(card =>(
            <CardUMKM
                key ={card.id}
                title={card.title}
                content={card.content}
                onPress = {() => this.onClickDetail(card.id)}>
            </CardUMKM>
        ))
        return ( 
            <View style={StyleSheet.absoluteFill}>
                <ScrollView contentContainerStyle={styles.container}>
                    <StatusBar
                        translucent={false}
                        backgroundColor="#ff9000"
                        barStyle="light-content"
                    /> 
                    <View style={styles.listTitle}>
                        <Text style={styles.titleText}>Riwayat Kunjungan Saya</Text>
                    </View> 
                    <ScrollView contentContainerStyle={styles.listContent}>
                        <View style={styles.separatorDate}>
                            <Text style={styles.separatorDateText}>
                                27 November 2018
                            </Text>
                        </View>
                        {cardList}
                    </ScrollView>
                </ScrollView>
                <FloatingButton
                    onPress={() => this.onClick()}
                ></FloatingButton>
            </View>
         );
    }
}
 
export default Kunjungan;