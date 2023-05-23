import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Botao = ({ titulo, acao }) => {
    return (
        <TouchableOpacity style={estilos.botao} onPress={ acao }>
            <Text style={estilos.texto}>{ titulo }</Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#663399",
        padding: 20,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "Red",
    },
    texto: {
        color: "#FFFFFF",
        fontSize: "1.5em",
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default Botao;