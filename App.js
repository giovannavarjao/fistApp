import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<View style={{ backgroundColor: 'pink', width: '100%', height: 60 }}>
</View>
<View style={styles.secondaryContainer}>
<Text style= {{color :'blue', fontSize: 30, fontWeight: 'bold', textAlign:'end'}}> Giovanna Silva Vajão </Text>
<Text style= {{color :'red', fontSize: 25, fontStyle: 'italic', textAlign:'start', borderWidth: 1, borderColor: 'red'}}> Nº Notebook 15 </Text>
<Text style= {{backgroundColor :'pink', fontSize: 20, textAlign: 'center'}}> Nº da sala 7 </Text>
</View>
<View style={{ backgroundColor: 'pink', width: '100%', height: 60 }}>
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
},
secondaryContainer: {
flex: 1,
width: '100%',
justifyContent: 'center',
backgroundColor: '#fff',
},
});