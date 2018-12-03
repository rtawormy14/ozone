import React from 'react';
import { Header } from 'react-navigation';
import { Text, Alert, ScrollView, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar, TextInput} from 'react-native';
import { Icon } from 'react-native-elements'

import {CustomButton} from '../../components/input/Button';
import styles from '../../styles/styles'

class RegisterMitra extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Registrasi Mitra UMKM',
        }
    };
    alert = (msg) => {
        console.log(msg)
    }

    onConfirm = () => {
        this.alert('onConfirm');
        Alert.alert(
            'Sukses',
            'Catatan kunjungan berhasil disimpan',
            [
                { text : 'OK', onPress :() => this.props.navigation.goBack() },
            ]
        )
      }

    onSubmit = () => {
        this.alert(' onSubmit');
        Alert.alert(
            'Tambah Catatan Kunjungan',
            'Apakah anda yakin untuk menambakan catatan kunjungan ini?',
            [
                { text : 'Batal'},
                { text : 'Iya', onPress :() => this.onConfirm() },
            ]
        )    

    } 

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
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Kategori Usaha</Text>
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
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Jenis Izin Usaha</Text>
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
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Jenis Kredit</Text>
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
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <View style={styles.labelContainer}>
                                        <Text style={styles.label}>Jenis Kredit</Text>
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
                                <View style={{flexDirection:'column'}}>
                                    <View style={styles.labelContainer}>
                                        <Text style={styles.label}>Jenis Kredit</Text>
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
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <View style={styles.labelContainer}>
                                        <Text style={styles.label}>Jenis Kredit</Text>
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
                                <View style={{flexDirection:'column'}}>
                                    <View style={styles.labelContainer}>
                                        <Text style={styles.label}>Jenis Kredit</Text>
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
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Besaran Kredit</Text>
                                </View>
                                <View style={styles.inputContainer}>     
                                        
                                    <View style={{flex:8}}>
                                        <TextInput style = {styles.input} 
                                                keyboardType='phone-pad' 
                                                returnKeyType="next" />         
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}> Jangka Waktu Kredit</Text>
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
                            <CustomButton style={styles.buttonPrimary} onPress={() => this.onSubmit()}
                                text="Simpan"
                            >
                            </CustomButton> 
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ScrollView>
            
         );
    }
}
 
export default RegisterMitra;