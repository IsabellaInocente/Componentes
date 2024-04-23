import React, {useState} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles} from '../css/botaoStyle';
import { router } from 'expo-router';

export default function Botao({btn, cor, src}){
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
        router.navigate(src);
    };

    return(
        <TouchableOpacity
        style={[styles.button,{backgroundColor: cor}, isPressed ? styles.buttonPressed : null]}
        onPress={handlePress}
        >
            {/*texto do botao {btn} atributo que recebera o valor do botao*/}
            <Text style={styles.buttonText}>{btn}</Text>
        </TouchableOpacity>
    );
}