import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import logo from '../../../assets/logo.png'
import { colors, hr80 } from '../../globals/style';

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome To FoodGo</Text>
        <View style={styles.logoout}>
                <Image source={logo} style={styles.logo}/>
        </View>
        <View styles={hr80} />
        <Text style={styles.text}>Find the best food around you
        at lowest price.</Text>
        <View styles={hr80} />

        <View style={styles.btnout}>
        <TouchableOpacity onPress={()=>navigation.navigate
          ('signup')}>
            <Text style={styles.btn}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate
          ('login')}>
            <Text style={styles.btn}>Log In</Text>
        </TouchableOpacity>
        </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff4242',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      color: colors.col1,
      textAlign: 'center',
      marginVertical: 10,
      fontWeight: '200',
    },
    logoout: {
      width: "80%",
      height: "30%",
      //backgroundColor: '#fff',
      alignItems: 'center',
    },
    logo: {
      width: '80%',
      height: '80%',
      justifyContent: 'center',
    },
    text: {
      fontSize: 18,
      width: '80%',
      color: colors.col1,
      textAlign: 'center',
    },
    btnout: {
      flexDirection: 'row',
    },
    btn: {
      fontSize: 20,
      color: colors.text1,
      textAlign: 'center',
      marginVertical: 30,
      marginHorizontal: 10,
      fontWeight: '700',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      paddingHorizontal: 20,
    }
})

export default WelcomeScreen