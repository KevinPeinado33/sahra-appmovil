import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'

export default function LoginForm() {

    const[hidePassword, setHidePassword]  = useState(true);

    return (
        <View style={styles.formContainer}>
            <Input 
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                onChange={() => console.log('Email actualizado')}
                rightIcon= {
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input 
                placeholder="Contraseña" 
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={hidePassword}
                onChange={() => console.log('contraseña actualizado')}
                rightIcon= {
                    <Icon
                        type="material-community"
                        name={hidePassword ? "eye-outline" : "eye-off-outline"}
                        iconStyle={styles.iconRight}
                        onPress={(e) => setHidePassword(!hidePassword)}
                    />
                }
            />
            <Button 
                title="Iniciar Sesion" 
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    inputForm: {
        width: "100%",
        marginTop: 20
    },
    iconRight: {
        color: "#c1c1c1"
    },
    btnContainerLogin: {
        marginTop: 20,
        width: '80%'
    },
    btnLogin: {
        backgroundColor: "#0FA4E7",
        borderRadius: 30
    }
})