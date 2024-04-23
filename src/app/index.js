import { View } from 'react-native';
import { styles } from '../css/style';
import Botao from '../componentes/botao';
import InputTexto from '../componentes/inputTexto';
import { useState } from 'react';

export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) => {
    console.log(newText);
  };

  return(
    <View style={styles.container}>
      <InputTexto label='Digite seu nome' dica="Digite seu nome"/>
      <InputTexto valor={atualizaTexto} label='Digite seu CPF' dica="Digite seu CPF"/>
      <InputTexto label='Digite sua senha' dica="Digite sua senha" seguranca={true} />

      <Botao btn= "entrar" cor='#000' src='home'/>
      <Botao btn= "excluir" cor='#f00' src='exccluido'/>
      <Botao btn= "cadastrar" cor='#0f0' src='cadastrar'/>
    </View>
  );
}
