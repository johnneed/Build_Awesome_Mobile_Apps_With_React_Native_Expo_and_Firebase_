import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import avocado from './assets/avocado.png';
import {saveAvocadoCount, loadAvocados} from "./data-layer";

export default class App extends Component {

    constructor(props) {
        super(props);
        this._eatAnAvocado = this._eatAnAvocado.bind(this);
        this.state = {avocadoCount: 0, isInitialized: false, error: null};
    }

    componentDidMount() {
        const callback = (error, data) => {
            if (error) {
                this.setState({isInitialized: true, error});
            } else {
                this.setState({isInitialized: true, avocadoCount: data.avocados});
            }
        };
        loadAvocados(callback);
    }

    _eatAnAvocado() {
        const newCount = this.state.avocadoCount + 1;
        const update = () => saveAvocadoCount(newCount);
        this.setState({avocadoCount: newCount}, update);
    }

    render() {
        const {isInitialized, avocadoCount, error} = this.state;

        const getContent = (initialized, error) => {
            switch (true) {
                case(Boolean(error)) :
                    return (<Fragment>
                        <Text style={{fontSize: 20, marginBottom: 20}}>Sorry, we hit a snag.</Text>
                        <Text style={{color: 'red', fontSize: 20}}>{error}</Text>
                    </Fragment>);
                case (initialized) :
                    return (
                        <Fragment>
                            <Text>I have eaten</Text>
                            <Text style={{fontSize: 60}}>{avocadoCount}</Text>
                            <Text style={{marginBottom: 20}}>Avocados</Text>
                            <Button onPress={this._eatAnAvocado} title='I ate an avocado!'/>
                        </Fragment>
                    );
                default:
                    return (
                        <Fragment><Text>Loading</Text></Fragment>
                    );
            }
        };

        return (
            <View style={styles.container}>
                <Image source={avocado} style={styles.avocado}/>
                {getContent(isInitialized, error)}
            </View>
        );
    }
};

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        avocado: {width: 160, height: 200, resizeMode: 'contain', marginBottom: 50}
    });
