import React, { useState } from 'react';
import { View, Text, TextInput,  StyleSheet } from 'react-native';
import Botao from '../components/Botao'


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


const LerHist = ({ navigation }) => {

    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <View style={estilos.botoes}>
                <Botao titulo="Adicionar Nova História" acao={ () => navigation.navigate('Adicionar') } />
                <Botao titulo="Voltar" acao={ () => navigation.navigate('Menu') } />
            </View>
           <Text>
            Aqui você pode Ler suas histórias.
           </Text>

           
        </View>

        
    );
    
}

export default LerHist;
