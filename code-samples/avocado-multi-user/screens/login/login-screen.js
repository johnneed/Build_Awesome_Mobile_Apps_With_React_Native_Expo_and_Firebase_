import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableHighlight, View, Alert,
    Platform
} from 'react-native';
// import * as constants from '../../styles/constants';
import * as actions from './actions';
import logo from '../../assets/images/avocado.png';
import LoginForm from '../../components/login-form';
import commonStyles from '../../styles/common';
import PropTypes from 'prop-types';

const myStyles = {
    logo: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom: 15
    },
    logoText: {
        fontSize: 32,
        fontFamily: 'alegreya-black',
        color: '#000',
        shadowColor: '#666',
        shadowOffset: {width: 1, height: 0},
        shadowOpacity: 1,
        shadowRadius: 0
    }
};
const combinedStyles = Object.assign({}, commonStyles, myStyles);
const styles = StyleSheet.create(combinedStyles);



class LoginScreen extends Component  {


static propTypes = {
    actions: PropTypes.object,
    loginError: PropTypes.any,
    navigation: PropTypes.object
};

    static navigationOptions = {
        title: 'Log In'
    };

    constructor(props) {
        super(props);
    }


    componentWillReceiveProps(nextProps) { // This method is deprecated!! switch to getDerivedStateFromProps
        if (!!nextProps.loginError) {
            Alert.alert(
                '',
                (nextProps.loginError.message || 'Login Failed'),
                [
                    {
                        text: 'OK', onPress: () => {
                        }
                    }
                ],
                {cancelable: false}
            );

        }
    }


    render() {
        return (
            <KeyboardAvoidingView
                style={styles.frame}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                    <ScrollView style={styles.scroll}>
                        <View style={{paddingLeft: 20, paddingRight: 20}}>
                            <View style={styles.logo}>
                                <Text style={styles.logoText}>The</Text>
                                <Image
                                resizeMode='contain' source={logo} style={{height: 40, width: 30}}/>
                                <Text style={styles.logoText}>App</Text>
                            </View>
                            <View style={{width: '100%'}}>
                                <LoginForm onButtonPress={this.props.actions.loginWithEmailPassword}/>
                                <TouchableHighlight
                                    style={styles.link}
                                    onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                                    <Text style={[styles.linkText, {fontSize: 16}]}>I forgot my password</Text>
                                </TouchableHighlight>

                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.login.user,
    initialAuthChecked: state.login.initialAuthChecked,
    loginError: state.login.loginError
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
