import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { btn1, colors, hr80, titles} from '../../globals/style'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export const SignupScreen = ({ navigation }) => {
    const [emailfocus ,setEmailfocus] = useState(false);
    const [passwordfocus ,setPasswordfocus] = useState(false);
    const [phonefocus, setPhonefocus] = useState(false);
    const [namefocus, setNamefocus] = useState(false);

    const [showpassword, setShowpassword] = useState(false);
    const [showcpassword, setShowcpassword] = useState(false);
    const [cpasswordfocus ,setcPasswordfocus] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.head1}>Sign Up</Text>
            <View style={styles.inputout}>
                <AntDesign name="user" size={22} color={namefocus === true ? colors.text1 : colors.text2}/>
                <TextInput style={styles.inputout} placeholder='Full name' 
                onFocus={() => {
                    setEmailfocus(false)
                    setPasswordfocus(true)
                    setShowpassword(false)
                    setNamefocus(true)
                    setPhonefocus(false)
                }} />
            </View>


            <View style={styles.inputout}>
                <Entypo name="email" size={24} color={emailfocus === true ? colors.text1 : colors.text2}/>
                <TextInput style={styles.inputout} placeholder='Email' 
                onFocus={() => {
                    setEmailfocus(true)
                    setPasswordfocus(false)
                    setShowpassword(false)
                    setNamefocus(false)
                    setPhonefocus(false)
                }} />
            </View>
            {/* */}

        <View style={styles.inputout}>
                <Feather name="smartphone" size={24} color={phonefocus === true ? colors.text1 : colors.text2} />
                <TextInput style={styles.inputout} placeholder='Phone Number' 
                onFocus={() => {
                    setEmailfocus(false)
                    setPasswordfocus(true)
                    setShowpassword(false)
                    setNamefocus(false)
                    setPhonefocus(true)
                }} />
            </View>

            {/* password start */}
            <View style={styles.inputout}>
                <MaterialCommunityIcons name= "lock-outline" size={24}
                color={cpasswordfocus === true ? colors.text1 : colors.text2}/>
                <TextInput style={styles.inputout} placeholder='Password' onFocus={() => 
                {
                    setEmailfocus(false)
                    setPasswordfocus(true)
                    setShowpassword(false)
                    setNamefocus(false)
                    setPhonefocus(false)
                }}
                
                    secureTextEntry={showpassword === false ? true : false}
                />
                <Octicons name={showpassword == false ? "eye-closed" : 
                "eye"} size={24} color="black" onPress={() => 
                    setShowpassword(!showcpassword)} />
            </View>
            {/* */}
            <View style={styles.inputout}>
                <MaterialCommunityIcons name= "lock-outline" size={24}color={cpasswordfocus === 
                true ? colors.text1 : colors.text2} />
                <TextInput style={styles.inputout} placeholder='Confirm Password' onFocus={() => 
                {
                    setEmailfocus(false)
                    setcPasswordfocus(false)
                    setShowpassword(true)
                    setNamefocus(false)
                    setPhonefocus(false)
                    
                }}
                
                    secureTextEntry={showcpassword === false ? true : false}
                />

                <Octicons name={showcpassword == false ? "eye-closed" : 
                "eye"} size={24} color="black" onPress={() => 
                    setShowcpassword(!showcpassword)} />
            </View>
            {/* password end */}

            <Text style={styles.address}>Please enter your address</Text>
            <View style={styles.inputout}>
                <TextInput style={styles.inputout} placeholder='Enter your Address' />
            </View>



            <TouchableOpacity style={btn1}>
            <Text style={{color: colors.col1, fontSize: titles.btntxt,
            fontWeight: "bold" }}>Sign up</Text>
            </TouchableOpacity>


            {/* <Text style={styles.forgot}>Forgot Password</Text> */}
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
            <Text style={styles.signup}> Already have an acount? 
                <Text style={{color: colors.text1}} onPress={()=>navigation.navigate('login')}>Sign In</Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 60,
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
        marginVertical: 5,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        //paddingVertical: 1,
        //alignSelf: 'center',
        elevation: 30,
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
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
        marginBottom: 30,
        fontSize: 25,
    },
    gf:{
        flexDirection: 'row', 
    },
    gficon:{
        backgroundColor: 'white',
        width: 50,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 20,
    },
    signup: {
        color: colors.text1,
    },
    address:{
        fontSize: 18,
        color: colors.text2,
        textAlign: 'center',
        marginTop: 20,
    }
})

export default SignupScreen