import React, { useState, Fragment } from 'react';
import { StyleSheet, View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements';

export default function RegisterForm() {

    const[hiddePassword, setHiddePassword] = useState(true);
    const[hiddeRepeatPassword, setHiddeRepeatPassword] = useState(true);
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[repeatPassword, setRepeatPassword] = useState("");

    const register = () => {
        console.log("Usuario Registrado");
        console.log(`Los datos recogidos son: ${email} ${password} ${repeatPassword}`)
    }
    
    return ( 
        <View style={styles.formContainer}>
            <Input
                placeholder="Email"
                containerStyle={styles.inputForm}
                onChange={(e) => setEmail(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder="Contraseña nueva"
                password={true}
                secureTextEntry={hiddePassword}
                containerStyle={styles.inputForm}
                onChange={(e) => setPassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={hiddePassword ? "eye-outline" :  "eye-off-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setHiddePassword(!hiddePassword)}
                    />
                }
            />
            <Input
                placeholder="Repetir Contraseña"
                password={true}
                secureTextEntry={hiddeRepeatPassword}
                containerStyle={styles.inputForm}
                onChange={(e) => setRepeatPassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={hiddeRepeatPassword ? "eye-outline" :  "eye-off-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setHiddeRepeatPassword(!hiddeRepeatPassword)}
                    />
                }
            />
            <Button 
                title="Unirse"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={register}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 30
    },
    inputForm: {
        width: "100%",
        marginTop: 20
    },
    iconRight: {
        color: "#c1c1c1"
    },
    btnContainerRegister: {
        marginTop: 20,
        width: "95%"
    },
    btnRegister: {
        backgroundColor: "#0FA4E7"
    }
})