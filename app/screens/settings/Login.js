import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';

export default function Login({navigation}) {
    return(
        <ScrollView>
            <Image 
                source={require("../../../assets/icon.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.viewContainer}>
                <Text>Form Login...</Text>
                <CreateAccount navigation={navigation}/>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.viewContainer}>
                <Text>Login Facebook ..</Text>
            </View>
        </ScrollView>
    )
}

function CreateAccount({navigation}){
    return(
        <Text style={styles.textRegister}>
            ¿Aún no tienes un cuenta?{ " " }
            <Text style={styles.btnRegister} onPress={() => navigation.navigate("Register")}>
                Registrar
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo: {
        width:"100%",
        height: 150,
        marginTop: 20
    },
    viewContainer: {
        marginLeft: 40,
        marginRight: 40
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    btnRegister: {
        color: "#107DAE",
        fontWeight: "bold"
    },
    divider: {
        backgroundColor: "#107DAE",
        margin: 40
    }
})