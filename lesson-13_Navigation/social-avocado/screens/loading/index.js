import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {AppLoading, Asset, Font} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import * as actions from './actions';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import LoginScreen from '../login/login-screen';
import PropTypes from 'prop-types';
import MainTabNavigator from '../../navigation/MainTabNavigator'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
});


class LoadingScreen extends Component {

    static propTypes = {
        initialized: PropTypes.bool,
        actions: PropTypes.object,
        user: PropTypes.object,
        userIsLoggedIn: PropTypes.bool
    };


    constructor(props) {
        super(props);
        this._handleFinishLoading = this._handleFinishLoading.bind(this);
        this._handleLoadingError = this._handleLoadingError.bind(this);
    }

    _loadResourcesAsync = async () => {
        await Asset.loadAsync([
            require('../../assets/images/avocado.png')
        ]);
        await Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            'alegreya-black': require('../../assets/fonts/Alegreya-Black.ttf'),
            // We include SpaceMono because we use it in HomeScreen.js. Feel free
            // to remove this if you are not using it in your app
            'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf')

        });
        await this.props.actions.initialize();
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        // console.warn(error);
        // this.props.actions.loadingCompleted(false, error);
    };

    _handleFinishLoading = () => {
        this.props.actions.loadingCompleted();
    };

    render() {
        const {isUserloggedIn, isLoadingComplete} = this.props;
        debugger
        switch (true) {
            case (!this.props.isLoadingComplete):
                return (
                    <AppLoading
                        startAsync={this._loadResourcesAsync}
                        onError={this._handleLoadingError}
                        onFinish={this._handleFinishLoading}
                    />
                );
            case (!this.props.isUserLoggedIn) :
                return (
                    <LoginScreen/>
                );

            default :
                return (
                    <View style={[styles.container, {padding: 0, margin: 0}]}>
                        <MainTabNavigator/>
                    </View>
                );
        }
    }

}

function mapStateToProps(state) {
    return {
        initialized: state.loading.initialized,
        isUserLoggedIn: state.login.userIsLoggedIn,
        isLoadingComplete: state.loading.isLoadingComplete,
        user: state.login.user || {}
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);