import React from 'react';
import { Button, Text, View } from 'react-native';

class HomeJRM extends React.Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Home JRM</Text>
                <Button title="Kunjungan"
                    onPress={() => this.props.navigation.push('Kunjungan')}
                ></Button>
                <Button title="Cari UMKM"
                    onPress={() => this.props.navigation.push('Search')}
                ></Button>
                <Button title="Tambah UMKM"
                    onPress={() => this.props.navigation.push('Umkm')}
                ></Button>
                <Button title="Registrasi Mitra"
                    onPress={() => this.props.navigation.push('RegisterMitra')}
                ></Button>
                <Button title="Mitra yang Dikelola"
                    onPress={() => this.props.navigation.push('Mitra')}
                ></Button>
                <Button title="Notifikasi"
                    onPress={() => this.props.navigation.push('Notifikasi')}
                ></Button>
            </View>
         );
    }
}
 
export default HomeJRM;