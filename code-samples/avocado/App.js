import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import avocado from './assets/avocado.png';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { avocadoCount: 0 };
  }

  eatAnAvocado = () => {
    this.setState({ avocadoCount: this.state.avocadoCount + 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={avocado} style={styles.avocado}/>
        <Text style={{ fontSize: 20 }}>I have eaten</Text>
        <Text style={{  fontSize: 60 }}>{this.state.avocadoCount}</Text>
        <Text style={{ fontSize: 20, marginBottom: 50 }}>Avocados</Text>
        <Button onPress={this.eatAnAvocado} title='I ate an avocado!'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avocado: {
    width: 160,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 50
  }
});
