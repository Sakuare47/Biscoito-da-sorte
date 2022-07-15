import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
      'Siga os bons e aprenda com eles.',
      'A vida trará coisas boas se tiveres paciência.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não compense na ira o que lhe falta na razão.',
      'Não há que ser forte. Há que ser flexível.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
      'O bom-senso vai mais longe do que muito conhecimento.',
      'Quem quer colher rosas deve suportar os espinhos.',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Aquele que se importa com o sentimento dos outros, não é um tolo.',
      'A adversidade é um espelho que reflete o verdadeiro eu.',
      'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
      'É mais fácil conseguir o perdão do que a permissão.',
      'Uma bela flor é incompleta sem suas folhas.',
      'Sem o fogo do entusiasmo, não há o calor da vitória.',
      'O riso é a menor distância entre duas pessoas.',
      'Se você se sente só é porque construiu muros ao invés de pontes.',
      'Espere pelo mais sábio dos conselhos: o tempo.',
  ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar(){
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>

      <Image source={img} style={styles.img} />

      <Text style={styles.textofrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]} onPress={ reiniciar }>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#dd7b22',
    margin: 30,
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});

export default App;