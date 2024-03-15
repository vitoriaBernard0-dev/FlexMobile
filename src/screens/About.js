import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conheça nossos serviços</Text>
            <View style={[styles.row, styles.rowBackground]}>
                <View style={styles.content}>
                    <Image
                        source={require('../assets/logosSem.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, styles.bold]}>
                            Aplicativo de mobilidade particular, que se adequa à sua rotina, no seu tempo e exigências.
                        </Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image
                        source={require('../assets/kidsSem.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style={[styles.textContainer, styles.textContainerRight]}>
                        <Text style={[styles.text, styles.bold]}>
                            Transporte particular personalizado para crianças, adolescentes e jovens.
                        </Text>
                    </View>
                </View>
            </View>
            <Pressable
                style={styles.button}
                onPress={() => console.log("Fale conosco pressionado")}>
                <Text style={[styles.buttonText, styles.bold]}>Fale conosco</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Cor de fundo branca
        paddingHorizontal: 20, // Adicionando padding horizontal para espaçamento nas bordas
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row', // Alinhamento dos itens em linha
        marginBottom: 30, // Espaçamento inferior entre cada par de imagem e texto
        alignItems: 'center', // Centralizando os itens verticalmente
        borderRadius: 3,
    },
    rowBackground: {
        backgroundColor: 'rgba(252, 219, 88, 0.3)', // Cor de fundo amarelo translúcido
    },
    content: {
        flex: 1, // Ocupar o espaço disponível na linha
    },
    textContainer: {
        marginLeft: 20, // Espaçamento à esquerda para separar a imagem do texto
    },
    textContainerRight: {
        marginLeft: 0, // Ajuste de margem para texto à direita
        marginRight: 20, // Espaçamento à direita para separar a imagem do texto
    },
    image: {
        width: 200, // Tamanho da imagem
        height: 200, // Tamanho da imagem
    },
    text: {
        fontSize: 16,
        marginLeft: 4,
        marginRight: 4,
    },
    bold: {
        fontWeight: 'bold', // Texto em negrito
    },
    button: {
        marginTop: 20, // Espaçamento superior para separar o botão dos cards de serviço
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#34A5DE', // Cor de fundo do botão
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
