import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

import RegisterForm from '../../components/account/RegisterForm';

export default function Register() {
    return (
        <KeyboardAvoidingView style={styles.container}  behavior="padding" enabled>
            <Image 
                source={require("../../../assets/img/imgRegister.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.viewForm}>
                <RegisterForm/>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    logo: {
        width:"100%",
        height: 250,
        marginTop: 10
    },
    viewForm: {
        marginRight: 40,
        marginLeft: 40
    }
})