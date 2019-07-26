import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import avocado from './assets/avocado.png';
export default class App extends React.Component {

constructor(props){
  super(props);
  this._eatAnAvocado = this._eatAnAvocado.bind(this);
  this.state = {avocadoCount: 0};
}

_eatAnAvocado(){
  this.setState({avocadoCount: this.state.avocadoCount + 1});
}

  render() {
    return (
      <View style={styles.container}>
        <Image source={avocado} style={styles.avocado}/>
        <Text>I have eaten</Text>
        <Text style={{fontSize: 60}}>{this.state.avocadoCount}</Text>
        <Text style={{marginBottom: 20}}>Avocados</Text>
         <Button onPress={this._eatAnAvocado} title='I ate an avocado!'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avocado: {width: 160, height: 200, resizeMode: 'contain', marginBottom: 50}
});
