import React from 'react';
import { Header } from 'react-navigation';
import { Image, Text, Alert, ScrollView, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar, TextInput} from 'react-native';
import { Icon } from 'react-native-elements'

const img = './../../assets/images/image_detail_kunjungan.png';
class DetailUmkm extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Detail UMKM',
        }
    };

    state = {  }
    render() { 
        return ( 
            <ScrollView contentContainerStyle={styles.container}>
                    <StatusBar
                        translucent={false}
                        backgroundColor="#ff9000"
                        barStyle="light-content"
                    />
                    <View style={styles.imageContainer}>
                        <Image
                            style={{
                                flex:1
                            }} 
                            source={require(img)} 
                        />
                    </View>
                    <ScrollView contentContainerStyle={styles.formContainer}>
                        <View style={styles.rowContainer}>
                            <View style={styles.titleContainer}>
                                <Text  style={styles.titleText}>Queen Mango</Text>
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.labelContainer}>
                                <Text  style={styles.label}>Nama Pemilik</Text>
                            </View>
                            <View style={styles.contentContainer}>
                                <Text  style={styles.content}>Roy Tri Afandi</Text>
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.labelContainer}>
                                <Text  style={styles.label}>Alamat</Text>
                            </View>
                            <View style={styles.contentContainer}>
                                <Text  style={styles.content}>Jl. KH. Wahid Hasyim No.41 RT 02 RW 04</Text>
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.labelContainer}>
                                <Text  style={styles.label}>Nomor Telepon</Text>
                            </View>
                            <View style={styles.contentContainer}>
                                <Text  style={styles.content}>+62855655293924</Text>
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.labelContainer}>
                                <Text  style={styles.label}>Email</Text>
                            </View>
                            <View style={styles.contentContainer}>
                                <Text  style={styles.content}>roytriafandi@gmail.com</Text>
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.labelContainer}>
                                <Text  style={styles.label}>Status Kemitraan</Text>
                            </View>
                            <View style={styles.contentContainer}>
                                <View style={{flexDirection:'row'}}>
                                    <Text  style={styles.content}>Non Mitra</Text>
                                    <Text  style={{
                                        fontSize : 16,
                                        color: '#00bb33',
                                        textAlign: 'justify',
                                    }}> - Potensial</Text>
                                </View>
                                
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.labelContainer}>
                                <Text  style={styles.label}>Kunjungan JRM Terakhir</Text>
                            </View>
                            <View style={styles.contentContainer}>
                                <Text  style={styles.content}>27 November 2018</Text>
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.labelContainer}>
                                <Text  style={styles.label}>Tanggal Bergabung</Text>
                            </View>
                            <View style={styles.contentContainer}>
                                <Text  style={styles.content}>30 November 2018</Text>
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.labelContainer}>
                                <Text  style={styles.label}>No. Rekening Kredit BNI</Text>
                            </View>
                            <View style={styles.contentContainer}>
                                <Text  style={styles.content}>1234567890</Text>
                            </View>
                        </View>
                    </ScrollView>
            </ScrollView>
         );
    }
}
 
export default DetailUmkm;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        backgroundColor: '#f0f0f0',
    },
    imageContainer :{
        height : 150,
    },
    formContainer: {
        flexGrow : 1,
        padding: 20,
    },
    rowContainer :{
        
    },
    titleContainer : {
        height : 30,
        marginBottom : 10,
    },
    titleText:{
        color: '#333',
        fontSize : 20,
        textAlign: 'justify',
        fontWeight: 'bold',
    }, 
    labelContainer : {
        height : 30,
        paddingTop : 5,
        paddingBottom : 5,
    },
    label:{
        fontSize : 12,
        color: '#000',
        textAlign: 'justify',
    }, 
    contentContainer : {
        height : 30,
        paddingTop : 5,
        paddingBottom : 5,
        borderBottomWidth : 1,
        borderBottomColor : '#333',
        marginBottom : 10,
    },
    content:{
        fontSize : 16,
        color: '#333',
        textAlign: 'justify',
    }, 
});