import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { btn1, colors, hr80, titles} from '../../globals/style'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const LoginScreen = ({ navigation }) => {
    const [emailfocus ,setEmailfocus] = useState(false);
    const [passwordfocus ,setPasswordfocus] = useState(false);
    const [showpassword, setShowpassword] = useState(false);


    return (
        <View style={styles.container}>
            <Text style={styles.head1}>Sign In</Text>
            <View style={styles.inputout}>
                <AntDesign name="user" size={22} color={emailfocus === true ? colors.text1 : colors.text2}/>
                <TextInput style={styles.inputout} placeholder='Email' 
                onFocus={() => {
                    setEmailfocus(true)
                    setPasswordfocus(true)
                    setShowpassword(false)
                }} />
            </View>
            <View style={styles.inputout}>
                <MaterialCommunityIcons name= "lock-outline" size={24}
                color={passwordfocus === true ? colors.text1 : colors.text2}/>
                <TextInput style={styles.inputout} placeholder='Password' 
                  onFocus={() => {
                    setEmailfocus(true)
                    setPasswordfocus(true)

                }}
                
                secureTextEntry={showpassword === false ? true : false}
                />
                <Octicons name={showpassword == false ? "eye-closed" : 
                "eye"} size={24} color="black" onPress={() => 
                setShowpassword(!showpassword)} flexDirection={'row'}/>
            </View>
            <TouchableOpacity style={btn1}>
            <Text style={{color: colors.col1, fontSize: titles.btntxt,
            fontWeight: "bold" }}>Sign in</Text>
            </TouchableOpacity>


            <Text style={styles.forgot}>Forgot Password</Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.gftxt}>Sign In With</Text>


            <View style={styles.gf}>
                <TouchableOpacity>
                    <View style={styles.gficon}>
                    <AntDesign name="google" size={24} 
                    color="#EA4335" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.gficon}>
                    <AntDesign name="facebook-square" size={24} 
                    color="#4267B2" />
                </View>
                    </TouchableOpacity>
            </View>
            <View style={hr80}></View>
            <Text style={styles.signup}> Don't have acount? 
                <Text style={{color: colors.text1}} onPress={()=>navigation.navigate('signup')}>Sign Up</Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head1: {
        fontSize: titles.title1,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 10,
    },
    inputout:{
        flexDirection: 'row',
        width: '85%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        //alignSelf: 'center',
        elevation: 20,
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '80%',
    },
    forgot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10,
    },
    or:{
        color: colors.text1,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    gftxt:{
        color: colors.text2,
        marginVertical: 10,
        fontSize: 25,
    },
    gf:{
        flexDirection: 'row', 
    },
    gficon:{
        backgroundColor: 'white',
        width: 50,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 20,
    },
})

export default LoginScreen