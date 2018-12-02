import React from 'react';
import { Header } from 'react-navigation';
import { Button, Text, ScrollView, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar, TextInput} from 'react-native';
import { Icon } from 'react-native-elements'

import styles from '../../styles/styles'

class KunjunganForm extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Catat Kunjungan',
        }
    };

    state = {  }
    render() { 
        return ( 
            <ScrollView contentContainerStyle={styles.container}>
                <KeyboardAvoidingView behavior="height" keyboardVerticalOffset = {-500} style={styles.container} enabled>
                    <StatusBar
                        translucent={false}
                        backgroundColor="#ff9000"
                        barStyle="light-content"
                    />
                    <ScrollView contentContainerStyle={styles.formContainer}>
                        <View style={styles.formLayout}>
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text  style={styles.label}>Nama UMKM</Text>
                                </View>

                                <View style={styles.inputContainer}> 
                                    <View style={styles.inputIconContainer}> 
                                        <View style={styles.iconContainer}>
                                            <Icon style={styles.icon} name="ios-search" type='ionicon' size={30} color="#bbbbbb"/>
                                        </View>
                                        <View style={{flex:8}}>
                                            <TextInput style = {styles.input} 
                                                keyboardType='default' 
                                                returnKeyType="next" 
                                                placeholder='Cari Nama UMKM' 
                                                placeholderTextColor='#bbbbbb'/>        
                                        </View>
                                    </View>
                                    
                                </View>
                            </View>
                            <View style={{marginBottom:10}}>
                                <View style={styles.labelContainer}>
                                    <Text  style={styles.smallLabel}>UMKM belum terdaftar ?</Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.buttonSecondary} 
                                            onPress={() => this.props.navigation.goBack()}>
                                        <Text  style={styles.buttonText}>Tambah UMKM</Text>
                                    </TouchableOpacity>
                                </View>
                                                            
                            </View>
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text  style={styles.label}>Tanggal Kunjungan</Text>
                                </View>
                                <View style={{flex:1, flexDirection:'row'}}>     
                                    <View style={{flex:5}}>
                                        <View style={styles.inputIconContainer}>
                                            <View style={{flex:4}}>
                                                <TextInput style = {styles.input}
                                                    keyboardType='default' 
                                                    returnKeyType="next" 
                                                    placeholder='04/12/2018 00:00' 
                                                    placeholderTextColor='#bbbbbb'/>          
                                            </View>
                                            <View style={styles.iconContainer}>
                                                <Icon style={styles.icon} name="calendar" type='evilicon' size={40} color="#bbbbbb"/>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{flex:4}}>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text  style={styles.label}>Deskripsi Kunjungan</Text>
                                </View>
                                <View style={styles.inputAreaContainer}>     
                                    <TextInput style = {styles.inputArea} 
                                                multiline={true}
                                                numberOfLines={4}
                                                textAlignVertical= 'top'
                                                autoCorrect={false} 
                                                keyboardType='default' 
                                                returnKeyType="next"
                                                />        
                                </View>
                            </View>
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}> Hasil Kunjungan</Text>
                                </View>
                                <View style={styles.inputIconContainer}>     
                                        
                                    <View style={{flex:8}}>
                                        <TextInput style = {styles.input} 
                                                keyboardType='default' 
                                                returnKeyType="next" />         
                                    </View>
                                    <View style={styles.iconContainer}>
                                        <Icon style={styles.icon} name="ios-arrow-dropdown" type='ionicon' size={30} color="#bbbbbb"/>
                                    </View>  
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonLayout}>
                            <TouchableOpacity style={styles.buttonPrimary} 
                                    onPress={() => this.props.navigation.goBack()}>
                                <Text  style={styles.buttonText}>Simpan</Text>
                            </TouchableOpacity> 
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ScrollView>
            
         );
    }
}
 
export default KunjunganForm;
