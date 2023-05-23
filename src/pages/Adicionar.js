import React, { useState } from 'react';
import { View, Text, TextInput,  StyleSheet } from 'react-native';
import Botao from '../components/Botao'
import axios from 'axios';

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
        fontSize: "4em",
        fontFamily: "Arial",
        color: "black",
        fontWeight: "bold",
    },
    campo: {
        fontSize: "3em",
        fontFamily: "Arial",
        color: "#FFFFFF",
        fontWeight: "bold",
        backgroundColor: "purple",
        borderWidth: 5,

    },
});


const AdicionarCont = ({ navigation }) => {

    const [titulo, setTitulo] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");

    const salvar = () => {
        // Criar uma requisão usando o axios para o servidor
        let url = "http://localhost:3000/paginas";

        let dados = {
            titulo: titulo,
            data: data,
            descricao: descricao
        };

        axios
            .post(url, dados)
            .then((response) => {
                let id = response.data.id;
                navigation.navigate('Diario', {id: id})
            })
            .catch((error) => {
                alert('Desculpe, deu errado.');
            });
    }

    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
           <Text style={estilos.titulo}>
            Compras para o mercado
           </Text>
           <TextInput 
                style={estilos.campo}
                placeholder="Produto"
                value={ titulo }
                onChangeText={ setTitulo }
            />

            <TextInput 
                style={estilos.campo}
                placeholder="Data de validade"
                value={ data }
                onChangeText={ setData }
            />

            <TextInput 
                style={estilos.campo}
                placeholder='Quantidade'
                multiline
                numberOfLines={ 2 }
                editable
                value={ descricao }
                onChangeText={ setDescricao }
            />

            <Botao titulo="Salvar" acao={salvar} />
        </View>

           

        
    );
    
}

export default AdicionarCont;
