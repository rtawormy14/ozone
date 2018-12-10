import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator,createDrawerNavigator, createAppContainer } from 'react-navigation'; // 1.0.0-rc.2


import Splash from './features/login/Splash'
import Login from './features/login/Login'
import Register from './features/login/Register'
import HomeJRM from './features/home/HomeJRM'
import Kunjungan from './features/kunjungan/Kunjungan'
import KunjunganForm from './features/kunjungan/KunjunganForm'
import DetailKunjungan from './features/kunjungan/DetailKunjungan'
import RegisterMitra from './features/mitra/RegisterMitra'
import Mitra from './features/mitra/Mitra'
import DetailMitra from './features/mitra/DetailMitra'
import Notifikasi from './features/notifikasi/Notifikasi'
import DetailNotifikasi from './features/notifikasi/DetailNotifikasi'
import Search from './features/search/Search'
import UmkmForm from './features/umkm/UmkmForm'
import DetailUmkm from './features/umkm/DetailUmkm'
import Help from './features/drawer/Help'
import Setting from './features/drawer/Setting'

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title="Open Drawer"
        />
        <Button
          onPress={() => this.props.navigation.navigate('MyModal1')}
          title="Open Modal"
        />
        <Button
          onPress={() => this.props.navigation.navigate('MyModal2')}
          title="Open Other Modal"
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go back home"
        />
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title="Open Drawer"
        />
      </View>
    );
  }
}

class ModalScreen1 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings Modal1',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss Modal Screen 1"
        />
      </View>
    );
  }
}

class ModalScreen2 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Feedback Modal1',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss Modal Screen 2"
        />
      </View>
    );
  }
}

const MainDrawer = createDrawerNavigator({
  Help: {
    screen: Help, // you may want to use a stack here too
  },
  Setting: {
    screen: Setting, // and maybe also here
  },
});

const RootStack = createStackNavigator(
  {
    Splash: {
      screen: createStackNavigator({
        Splash :{ screen : Splash},
        Login :{ screen : Login },
        Register :{ screen : Register},
      },{
          headerMode: 'none',
          navigationOptions: {
              headerVisible: false,
          }
      })
    },
    Home: {
      screen: createStackNavigator({
        HomeJRM: { screen: HomeJRM, headerMode : "none" },
        Kunjungan: { screen: Kunjungan },
        KunjunganForm: { screen: KunjunganForm },
        DetailKunjungan : {screen :DetailKunjungan},
        RegisterMitra : {screen : RegisterMitra },
        Mitra: { screen: Mitra },
        DetailMitra: { screen: DetailMitra },
        UmkmForm: { screen: UmkmForm },
        DetailUmkm: { screen: DetailUmkm },
        Notifikasi: { screen: Notifikasi },
        DetailNotifikasi: { screen: DetailNotifikasi },
        Search: { screen: Search },
      },{
          defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#ff9000',
            },
            
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },
          initialRouteName : 'HomeJRM',
      }),
    },

    MainDrawer: {
      screen: MainDrawer,
    },
  },
  {
    initialRouteName : 'Home',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
