## Making Things Do Things: Props and State

So far our app is pretty static, and boring.  Let's make it do stuff. Let's add a button.

First we'll need to import the Button component from React Native.  Add 'Button' to our list of React Native imports. Our import statement should now look like this:

    import {StyleSheet, Text, View, Image, Button} from 'react-native';
s
Now we can add a button to our app.  We'll need to create some space between the last line of text and the button, so add a bottom margin to the last line of text like this:

    <Text style={{ fontSize: 20, marginBottom: 50}}>Avocados</Text>


Now append this line after the Text component.

    <Button title='I ate an avocado!'/>
    
    
The render method should now look like this:

    render() {
        return (
          <View style={styles.container}>
            <Image source={avocado} style={styles.avocado}/>
            <Text style={{ fontSize: 20 }}>I have eaten</Text>
            <Text style={{  fontSize: 60 }}>0</Text>
            <Text style={{ fontSize: 20, marginBottom: 50}}>Avocados</Text>
            <Button title='I ate an avocado!'/>
         </View>
        );
    }
    

If you look at the app, you should see warning about a failed prop type.  `The prop 'onPress' is marked as required in 'Button'` Click' 'Dismiss' to get past the warning.  This is what you should see.


![alt](./assets/04/button.png 'Adding a button')

If your button looks different than the one in the picture, you're probably running Android. The button component uses the native buttons for iOS and Android.  Naturally they look different.  We'll deal with that later.


Our app look good but, as the warning said, our button doesn't do anything when you click it.  We need to create a method on our component for our button to call.

Add the following code just before the render function:

    eatAnAvocado = () => {}
    
Now pass this new method to the onPress prop of our button like this:

    <Button onPress={this.eatAnAvocado} title='I ate an avocado!'/>

Notice the `this` keyword just before the method.  In this case `this` refers to our component and the `eatAnAvocado` part refers to our new method. 

Here's what our component should look like:

    export default class App extends React.Component {
  
      eatAnAvocado() {}
    
      render() {
        return (
          <View style={styles.container}>
            <Image source={avocado} style={styles.avocado}/>
            <Text style={{ fontSize: 20 }}>I have eaten</Text>
            <Text style={{  fontSize: 60 }}>0</Text>
            <Text style={{ fontSize: 20, marginBottom: 50}}>Avocados</Text>
            <Button onPress={this.eatAnAvocado} title='I ate an avocado!'/>
          </View>
        );
      }
    }
    
    
 Woot!  we got rid of the warning.  Sadly, our app still does nothing.  To track our clicks we'll need to add some 'state' to our component.
 Component state is how we track all the changes a component cares about during its lifetime.   When a component is first create, we'll want to create a default state.  To do that we'll need to add another method called a constructor.  A constructor is called once when the component is first create.
 
 
 before our eatAnAvocado method, add the following code:
 
    constructor(props) {
      super(props);
      this.state = { avocadoCount: 0 };
    }
    
    
The component should now look like this:

    export default class App extends React.Component {
    
      constructor(props) {
        super(props);
        this.state = { avocadoCount: 0 };
      }
    
      eatAnAvocado = () => {}
    
      render() {
        return (
          <View style={styles.container}>
            <Image source={avocado} style={styles.avocado}/>
            <Text style={{ fontSize: 20 }}>I have eaten</Text>
            <Text style={{  fontSize: 60 }}>0</Text>
            <Text style={{ fontSize: 20 }}>Avocados</Text>
            <Button onPress={this.eatAnAvocado} title='I ate an avocado!'/>
          </View>
        );
      }
    }
    
    
Notice that the first line in the constructor is `super(prop)`  We call that code because our component's class extends React's component class.  Not only do we need to setup our own class but we need to setup it's extension.

The next line sets the avocadoCount to 0;

Let's display our new state.  Change this line:

    <Text style={{  fontSize: 60 }}>0</Text>
   
   
To this:

    <Text style={{  fontSize: 60 }}>{this.state.avocadoCount}</Text>
    
If you refresh the app you should notice that nothing's changed.  Let's change that.  Change the eatAnAvocadomethod to look like this:

    eatAnAvocado() {
      this.setState({ avocadoCount: this.state.avocadoCount + 1 });
    }
    
Now when you click button, you should notice the count changes.  here's the whole file for reference:

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

And here's what your app should look like after your press the button.


![alt](./assets/04/1-avocado.png 'Button Pressed')

Now that our app is working, let's save our work.

````bash
git add .
git commit -m "app is working"
git push
````
   
 If you go to your GitHub respository, you should see a pull request waiting to be approved for a merge.