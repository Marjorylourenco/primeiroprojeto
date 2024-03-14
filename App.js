import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Marjory Lourenço</Text>
      <Text>14/04/2024</Text>
      <Text>Oláit init</Text>
      <Text>14/04/2024</Text>
      <br></br>
      <Button title='Salvar'></Button> 
       <Button title='Entrar'></Button> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
