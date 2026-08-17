import {Text, View, StyleSheet} from 'react-native';

export default function Galeria () {
    return (
        <View style={styles.itens}>
            <Text>
                Foto dos nossos gatinhos fofos
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    itens: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#e1e1e1'
    }
})