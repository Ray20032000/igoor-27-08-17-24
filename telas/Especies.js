import {Text, View, StyleSheet} from 'react-native';

export default function Especies () {
    return (
        <View style={styles.itens}>
            <Text>
                Veja gatitos bonitinhos e suas espécies!!
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