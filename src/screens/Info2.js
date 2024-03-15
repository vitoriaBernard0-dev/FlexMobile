import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Info2({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Segurança em Primeiro Lugar:</Text>
                <Text style={styles.text}>
                    Comprometimento inabalável com a segurança dos passageiros e motoristas.
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Excelência no Atendimento:</Text>
                <Text style={styles.text}>
                    Oferecer um serviço de transporte personalizado e de alta qualidade.
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Inovação Contínua:</Text>
                <Text style={styles.text}>
                    Buscar constantemente novas soluções e tecnologias para melhorar a experiência do cliente.
                </Text>
            </View>
            {/* Continue para os outros valores */}
            <Pressable style={[styles.botao, { backgroundColor: '#34A5DE' }]}
                onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Voltar para Suporte</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    botao: {
        padding: 20,
        width: 250,
        height: 60,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textContainer: {
        backgroundColor: '#FCDB58', // Cor de fundo
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
        color: 'black', // Cor do texto
    },
    text: {
        color: 'black', // Cor do texto
    },
});
