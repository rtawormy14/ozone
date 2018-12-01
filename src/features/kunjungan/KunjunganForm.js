import React from 'react';
import { Button, Text, ScrollView, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar, TextInput} from 'react-native';

class KunjunganForm extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Catat Kunjungan',
        }
    };

    state = {  }
    render() { 
        return ( 
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-500} style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.formLayout}>
                        <StatusBar barStyle="light-content"/>
                        <View>
                            <View style={styles.labelContainer}>
                                <Text  style={styles.label}>Nama UMKM</Text>
                            </View>
                            <View style={styles.inputContainer}>     
                                <TextInput style = {styles.input} 
                                            keyboardType='default' 
                                            returnKeyType="next" 
                                            placeholder='Cari Nama UMKM' 
                                            placeholderTextColor='#bbbbbb'/>        
                            </View>
                        </View>
                        
                        <View style={{marginBottom:15}}>
                            <View style={styles.labelContainer}>
                                <Text  style={styles.smallLabel}>UMKM belum terdaftar ?</Text>
                            </View>
                            <TouchableOpacity style={styles.secondaryButtonContainer} 
                                    onPress={() => this.props.navigation.goBack()}>
                                <Text  style={styles.buttonText}>Tambah UMKM</Text>
                            </TouchableOpacity> 
                        </View>

                        <View>
                            <View style={styles.labelContainer}>
                                <Text  style={styles.label}>Tanggal Kunjungan</Text>
                            </View>
                            <View style={styles.inputContainer}>     
                                <TextInput style = {styles.input}
                                            keyboardType='default' 
                                            returnKeyType="next" 
                                            placeholder='Tanggal Kunjungan' 
                                            placeholderTextColor='#bbbbbb'/>        
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
                                <Text  style={styles.label}> Hasil Kunjungan</Text>
                            </View>
                            <View style={styles.inputContainer}>     
                                <TextInput style = {styles.input} 
                                            keyboardType='default' 
                                            returnKeyType="next" />        
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonLayout}>
                        <TouchableOpacity style={styles.buttonContainer} 
                                onPress={() => this.props.navigation.goBack()}>
                            <Text  style={styles.buttonText}>Simpan</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </KeyboardAvoidingView>
         );
    }
}
 
export default KunjunganForm;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        backgroundColor: '#eeeeee',
    },
    formContainer: {
        flexGrow : 1,
        padding: 20,
    },
    formLayout: {
        flexGrow : 10,
    },
    buttonLayout: {
        flexGrow : 1,
    },
    labelContainer : {
        height : 30,
    },
    label:{
        color: '#000',
        textAlign: 'justify',
        fontWeight: '400'
    }, 
    inputContainer:{
        borderColor : '#000',
        height: 40,
        marginBottom : 10,
    },
    input:{
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderColor: "#000",
    },
    inputAreaContainer:{
        borderColor : '#000',
        height: 100,
        marginBottom : 10,
    },
    inputArea:{
        height: 100,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderColor: "#000",
    },
    buttonContainer:{
        backgroundColor: '#2c3e50',
        paddingVertical: 15
    },
    secondaryButtonContainer:{
        backgroundColor: '#ff9000',
        padding: 15,
        alignSelf :'flex-start',
    },
    
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }, 
});