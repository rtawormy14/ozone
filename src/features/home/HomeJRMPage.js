import React from 'react';
import { Button, Text, View } from 'react-native';

class HomeJRMPage extends Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Home JRM</Text>
            </View>
            <Button title="Kunjungan"
            />
            <Button title="Cari UMKM"
            />
            <Button title="Tambah UMKM"
            />
            <Button title="Registrasi Mitra"
            />
            <Button title="Mitra yang Dikelola"
            />
            <Button title="Notifikasi"
            />
            
         );
    }
}
 
export default HomeJRMPage;