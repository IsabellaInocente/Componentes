import { styles } from '../css/inputStyle';
import { TextInput, View, Text } from 'react-native';

export default function Entrada({valor, dica, label, seguranca}){
     return(
        <View style={styles.body}>
            <Text style={styles.text}>{label}</Text>
            <TextInput
            style={styles.input}
            onChangeText={valor}
            placeholder={dica}
            secureTextEntry={seguranca}
            />
        </View>
     );
};