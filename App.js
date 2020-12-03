import React, {Component} from 'react';
import {
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  Image 
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),

    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Todas as coisas são difíceis antes de se tornarem fáceis.',
      'Você pode encontrar a si mesmo fazendo ou dizendo coisas que você nunca imaginou possíveis.',
      'Se você se sente só é porque construiu muros ao invés de pontes.',
      'Vencer é 90 por cento suor e 40 por cento técnica.',
      'O amor está mais próximo do que você imagina.',
      'A vida coloca em nossa frente opções.',
      'Você é do tamanho do seu sonho.',
      'Pare de procurar eternamente; a felicidade está bem ao seu lado.',
      'Conhecimento é a única virtude e ignorância é o único vício.',
      'O nosso primeiro e último amor é… o amor-próprio.',
      'Deixe de lado as preocupações e seja feliz.',
      'A vontade das pessoas é a melhor das leis.',
      'Nós somos o que pensamos.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
      'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram trabalhando.',
      'O insucesso é apenas uma oportunidade para recomeçar de novo com mais inteligência.',
      'O futuro pertence àqueles que acreditam na beleza de seus sonhos.',
      'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
      'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.',
      'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
      'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
      'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.',
      'A vida é para quem topa qualquer parada. Não para quem pára em qualquer topada.',
      'Motivação não é sinônimo de transformação, mas um passo em sua direção.',
      'O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.',
      'Inspiração vem dos outros. Motivação vem de dentro de nós.',
      'Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas habituais.',
      '“A nossa vida tem 4 sentidos…amar, sofrer, lutar e vencer.', 
      'Ame muito, sofra pouco,lute bastante e vença sempre!”',
      'Nada é por acaso…Acredite em seus sonhos e nos seus potenciais….',
      'Na vida tudo se supera..',
      'Acredite em milagres, mas não dependa deles.',
      'Você sempre será a sua melhor companhia!',
      'Realize o óbvio, pense no improvável e conquiste o impossível Latumia.'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: '" '+ this.frases[numeroAleatorio]+' "',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container} >
        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  img: {
    width:250,
    height:250
  },
  textoFrase:{
    fontSize:20,
    color:'#dd7d22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  },
  botao: {
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'#dd7d22',
    borderRadius:25

  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'#dd7d22'
  }
});

export default App;