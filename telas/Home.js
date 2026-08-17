import {Text, View, StyleSheet, Button, Image} from 'react-native';

export default function Home ({navigation}) {
    return (
        <View style={styles.itens}>
            <Text>
                Você gosta de gatinhos fofos?
                aqui você pode ver gatinhos o dia todinho e aprender mais sobre eles
            </Text>
            <Image source={require("./../assets/patinha.png")} />
            <Button title={"Especies"} onPress={function () {
                navigation.navigate("Especies");
            }}></Button>
            <Button title={"Curiosidades"} onPress={function () {
                navigation.navigate("Curiosidades");
            }}></Button>
            <Button title={"Galeria"} onPress={function () {
                navigation.navigate("Galeria");
            }}></Button>
            <Button title={"Você sabia?"} onPress={function () {
                navigation.navigate("Leeknow");
            }}></Button>

        </View>
    )
}

const styles = StyleSheet.create({
    itens: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#d5a2a2'
    }
})