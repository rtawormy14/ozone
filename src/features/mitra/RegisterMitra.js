import React from 'react';
import { Header } from 'react-navigation';
import { Text, Alert, ScrollView, View,Picker, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar, TextInput} from 'react-native';
import { Icon } from 'react-native-elements'

import {CustomButton,AddImageButton} from '../../components/input/Button';
import styles from '../../styles/styles'

class RegisterMitra extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data :{ 
                umkmID : 0,
                kategoriUsaha : '',
                jenisUsaha: '',
                jenisKredit: '',
                jangkaWaktu: '',
            }
         }
    }

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
            'Data Berhasil Disimpan',
            '',
            [
                { text : 'OK', onPress :() => this.props.navigation.goBack() },
            ]
        )
      }

    onSubmit = () => {
        this.alert(' onSubmit');
        Alert.alert(
            'Registrasi Mitra Baru',
            'Apakah anda yakin dengan data yang telah dimasukkan?',
            [
                { text : 'Batal'},
                { text : 'Ya, Simpan', onPress :() => this.onConfirm() },
            ]
        )    

    } 
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
                                <View style={styles.pickerContainer}>                                            
                                <Picker
                                    selectedValue={this.state.data.kategoriUsaha}
                                    onValueChange={(dt) => this.setState({data : {...this.state.data, kategoriUsaha: dt}})}>
                                        <Picker.Item label="-Pilih Kategori Usaha-" value="" />
                                    </Picker>
                                </View>
                            </View>
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Jenis Izin Usaha</Text>
                                </View>
                                <View style={styles.pickerContainer}>                                            
                                <Picker
                                    selectedValue={this.state.data.jenisUsaha}
                                    onValueChange={(dt) => this.setState({data : {...this.state.data, jenisUsaha: dt}})}>
                                        <Picker.Item label="-Pilih Jenis Usaha-" value="" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={{flexDirection:'row', flex:1}}>
                                <View style={{flexDirection:'column',flex:1}}>
                                    <View style={styles.labelContainer}>
                                        <Text style={styles.label}>Foto KTP</Text>
                                    </View>
                                    <View style={styles.iconButton}>                                                 
                                        <AddImageButton
                                            onPress={()=> console.log("press image")}>

                                        </AddImageButton>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column',flex:1}}>
                                    <View style={styles.labelContainer}>
                                        <Text style={styles.label}>Foto NPWP</Text>
                                    </View>
                                    <View style={styles.iconButton}>                                                 
                                        <AddImageButton
                                            onPress={()=> console.log("press image")}>

                                        </AddImageButton>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <View style={styles.labelContainer}>
                                        <Text style={styles.label}>Foto Surat Izin Usaha</Text>
                                    </View>
                                    <View style={styles.iconButton}>                                                 
                                        <AddImageButton
                                            onPress={()=> console.log("press image")}>

                                        </AddImageButton>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Jenis Kredit</Text>
                                </View>
                                <View style={styles.pickerContainer}>                                            
                                    <Picker
                                    selectedValue={this.state.data.jenisKredit}
                                    onValueChange={(dt) => this.setState({data : {...this.state.data, jenisKredit: dt}})}>
                                        <Picker.Item label="-Pilih Jenis Kredit-" value="" />
                                        <Picker.Item label="Kredit Usaha Rakyat" value="kur" />
                                        <Picker.Item label="Kredit Usaha Kecil" value="kuk" />
                                        <Picker.Item label="Kredit Usaha Menengah" value="kum" />
                                    </Picker>
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
                                <View style={styles.pickerContainer}>                                            
                                    <Picker
                                            selectedValue={this.state.data.jangkaWaktu}
                                            onValueChange={(dt) => this.setState({data : {...this.state.data, jangkaWaktu: dt}})}>
                                        <Picker.Item label="-Jangka Waktu Kredit-" value="" />
                                        <Picker.Item label="1 Bulan" value="1" />
                                        <Picker.Item label="3 Bulan" value="3" />
                                        <Picker.Item label="6 Bulan" value="6" />
                                        <Picker.Item label="1 Tahun" value="12" />
                                    </Picker>
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