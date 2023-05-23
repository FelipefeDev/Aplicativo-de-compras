import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from '../components/Botao'

const Menu = ({ navigation }) => {
    return (
        <View style={estilos.container}>
            <View style={estilos.logo}>
                <Text style={estilos.titulo}>App de registro de compras</Text>
            </View>

            <View style={estilos.botoes}>
                <Botao titulo="Adicionar" acao={ () => navigation.navigate('Adicionar') } />
                <Botao titulo="Ler Histórias" acao={ () => navigation.navigate('Ler') } />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    logo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    botoes: {
        flex: 2,
    },
    titulo: {
        fontSize: "3em",
        fontFamily: "Arial",
        color: "#ff1f0",
        fontWeight: "bold",
    },
});

export default Menu;