import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

function UserGuest({ navigation }) {
    return (
        <ScrollView style={styles.viewBody} centerContent={true}>
            <Image 
                source={require('../../../assets/img/imgPresentacion.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.title}>
                Bienvenid@ ah Sahra SPA
            </Text>
            <Text style={styles.descripcion}>
                ¿Quieres administrar tu spa?, en esta aplicación usted podrá
                agendar citas, enviar notificaciones, ver reportes, adminstrar a empleados
                y muchas cosas mas.
            </Text>
            <View style={styles.viewBtn}>
                <Button
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    title="Comencemos"
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
        </ScrollView>
    )
}

export default withNavigation(UserGuest);

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 20,
        marginRight: 20
    },
    image: {
        height: 400,
        width: "100%",
        marginBottom: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom:10,
        textAlign: 'center'
    },
    descripcion: {
        textAlign: 'center',
        marginBottom: 20
    },
    viewBtn: {
        flex: 1,
        alignItems: 'center'
    },
    btnStyle: {
        borderRadius: 30        
    },
    btnContainer: {
        width: '70%'
    }
})