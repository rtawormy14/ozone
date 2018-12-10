import React from 'react';
import { Image, ImageBackground,StatusBar, Button, TouchableWithoutFeedback, Text, View, StyleSheet } from 'react-native';
import Orientation from "react-native-orientation";
 
class HomeJRM extends React.Component {
    constructor(props) {
        super(props);
        this._willFocusSubscription = this.props.navigation.addListener("willFocus", payload => {
            // lock to portrait when this screen is about to appear
            Orientation.lockToPortrait();
        })
        this.state = {  }
    }

    componentWillUnmount() {
        // remove subscription when unmount
        this._willFocusSubscription.remove();
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header : null,
        }
      };


    render() { 
        return ( 
            <View style={styles.container}>
                <StatusBar
                    translucent={false}
                    backgroundColor='#006577'
                    barStyle='dark-content'
                >

                </StatusBar>
                <View style={styles.headerContainer}>
                    <ImageBackground
                            resizeMode="stretch"
                            source={require('./../../assets/images/background.png')}
                            style={styles.bannerContainer}>
                            <View style={styles.headerInfoContainer}>
                                <View style={styles.drawerContainer}>
                                    <Image
                                        source={require('./../../assets/images/user.png')}
                                        style={styles.menuIconBorder}>
                                    </Image>
                                </View>
                                <View style={styles.headerTitleContainer}>
                                    <Text style={{textAlign : 'center', fontWeight :'normal', fontSize : 20, color :'#fff'}}>Selamat Datang,</Text>
                                    <Text style={{textAlign : 'center', fontWeight :'bold', fontSize : 20, color :'#fff'}}>Kevin</Text>
                                </View>
                            </View>
                    </ImageBackground>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoLayout}>
                            <View style={styles.subInfoLayout}>
                                <View style={styles.infoTitleContainer}>
                                    <Text style={styles.infoTitle}>Cabang BNI Saya</Text>
                                </View>
                                <View style={styles.infoContentContainer}>
                                    <Text style={styles.infoContentSmall}>KCU Gambir Jakarta</Text>
                                </View>
                            </View>
                            <View style={styles.subInfoLayout}>
                                <View style={styles.infoTitleContainer}>
                                    <Text style={styles.infoTitle}>Kunjungan Minggu Ini</Text>
                                </View>
                                <View style={styles.infoContentContainer}>
                                    <Text style={styles.infoContentBig}>8</Text>
                                </View>
                            </View>
                            <View style={styles.subInfoLayout}>
                                <View style={styles.infoTitleContainer}>
                                    <Text style={styles.infoTitle}>Mitra Kelolaan Saya</Text>
                                </View>
                                <View style={styles.infoContentContainer}>
                                    <Text style={styles.infoContentBig}>16</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.contentTitleContainer}>
                        <Text style={{color : '#006577', fontSize : 32}}>Jelajahi Ozone</Text>
                        <Text style={{color : '#006577', fontSize : 13}}>Kelola UMKM Mitra dengan mudah menggunakan Ozone</Text>
                    </View>
                    <View style={styles.contentMenuContainer}>
                        <View style={styles.contentMenuRowContainer}>
                            <View style={styles.menu}>
                                <TouchableWithoutFeedback
                                 onPress={() => this.props.navigation.navigate('Kunjungan')}>
                                    <View  style={styles.menuContainer}>
                                        <Text style={styles.menuText}>Kunjungan UMKM</Text>
                                        <Image
                                            source={require('./../../assets/images/kunjungan.png')}
                                            style={styles.menuIcon}>
                                        </Image>
                                    </View>                                    
                                </TouchableWithoutFeedback>
                            </View>
                                
                            <View style={styles.menu}>
                                <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.navigate('Search')}>
                                    <View  style={styles.menuContainer}>
                                        <Text style={styles.menuText}>Cari UMKM</Text>
                                        <Image
                                            source={require('./../../assets/images/cariUMKM.png')}
                                            style={styles.menuIcon}>
                                        </Image>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            
                            <View style={styles.menu}>
                                <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.navigate('UmkmForm')}>
                                    <View  style={styles.menuContainer}>
                                        <Text style={styles.menuText}>Tambah UMKM</Text>
                                        <Image
                                            source={require('./../../assets/images/tambahUMKM.png')}
                                            style={styles.menuIcon}>
                                        </Image>
                                    </View>
                                    
                                </TouchableWithoutFeedback>
                            </View>
                            
                        </View>
                        <View style={styles.contentMenuRowContainer}>
                            <View style={styles.menu}>
                                <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.navigate('Mitra')}>
                                    <View  style={styles.menuContainer}>
                                        <Text style={styles.menuText}>Mitra Kelolaan Saya</Text>
                                        <Image
                                            source={require('./../../assets/images/mitrakelolaan.png')}
                                            style={styles.menuIcon}>
                                        </Image>
                                    </View>    
                                </TouchableWithoutFeedback>
                            </View>
                            
                            <View style={styles.menu}>
                                <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.navigate('RegisterMitra')}>
                                    <View  style={styles.menuContainer}>
                                        <Text style={styles.menuText}>Registrasi Mitra UMKM Baru</Text>
                                        <Image
                                            source={require('./../../assets/images/daftarMitra.png')}
                                            style={styles.menuIcon}>
                                        </Image>
                                    </View>
                                    

                                </TouchableWithoutFeedback>
                            </View>
                            
                            <View style={styles.menu}>
                                <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.navigate('Notifikasi')}>
                                    <View  style={styles.menuContainer}>
                                        <Text style={styles.menuText}>Notifikasi</Text>
                                        <Image
                                            source={require('./../../assets/images/notifikasi.png')}
                                            style={styles.menuIcon}>
                                        </Image>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            
                        </View>

                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.footerContainer}>
                            <Image
                                source={require('./../../assets/images/ozone_logo.jpeg')}
                                style={styles.footerImage}>
                            </Image>
                            <Text style={styles.footerText}>Ozone </Text>
                        </View>
                        
                    </View>
                </View>
                
            </View>
         );
    }
}
 
export default HomeJRM;


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor : '#f0f0f0',
    },
    headerContainer: {
        flex : 2,
    },
    bannerContainer: {
        flex : 4,
        backgroundColor:'transparent',
    },
    headerInfoContainer : {
        height : 75, 
        flexDirection : 'row',
    },
    drawerContainer : {
        width : 75, 
        justifyContent : 'center', 
        alignItems : 'center'
    },
    headerTitleContainer : {
        flex :1, 
        marginLeft : -75, 
        justifyContent : 'center', 
        alignItems : 'center'
    },
    infoContainer :{
        flex : 1,
        paddingLeft : 20,
        paddingRight : 20,
    },
    infoLayout : {
        flex : 1,
        flexDirection : 'row',
        backgroundColor : '#fff',
        borderWidth : 1,
        borderColor : '#ccc',
        borderRadius : 5,
        marginTop : -50,
    },
    subInfoLayout : {
        flex:1,
        justifyContent : 'flex-start',
        alignItems : 'center',
    },
    infoTitleContainer : {
        flex : 2,
        padding : 5,
    },
    infoTitle : {
        color : '#006577',
        textAlign : 'center',
        fontSize : 14,
    },
    infoContentContainer :{
        flex : 3,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 5,
    },
    infoContentSmall : {
        color : '#006577',
        textAlign : 'center', 
        fontWeight:'bold',
        fontSize : 13,
    },
    infoContentBig : {
        color : '#006577',
        textAlign : 'center', 
        fontWeight:'bold',
        fontSize : 36,
    },
    contentContainer :{
        flex : 3,
        padding : 20
    },
    contentTitleContainer : {
        flex : 1,
        padding : 5,
    },
    contentMenuContainer : {
        flex : 4,
    },
    contentMenuRowContainer : {
        flex:1,
        flexDirection  : 'row',
    },
    menu : {
        padding:5,
        flex:1,
    },
    menuContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#fff',
        borderRadius : 5,
    },
    menuText : {
        color : '#006577', 
        fontSize : 13, 
        marginBottom : 10,
        textAlign : 'center',
    }, 
    menuIcon : {
        width: 50,
        height: 50,
        alignItems : 'center',
        justifyContent:'center',
    },
    menuIconBorder : {
        width: 50,
        height: 50,
        borderRadius : 100,
        borderWidth : 1,
        borderColor : '#FFF',
        alignItems : 'center',
        justifyContent:'center',
    },
    bottomContainer : {
        flex : 2,
        justifyContent : 'flex-end',
        alignItems : 'center',
        flexDirection : 'column',
    },
    footerContainer : {
        flexDirection :'row',
        height : 50,
        justifyContent : 'flex-end',
        alignItems : 'flex-end',
        padding : 5,
    },
    footerImage : {
        width: 25,
        height: 25,
        borderRadius:100,
        alignItems : 'center',
        justifyContent:'center',
        marginRight : 5,
    },
    footerText : {
        color :'#FF9000',
        fontSize : 18,
        fontWeight : 'bold'
    }
});