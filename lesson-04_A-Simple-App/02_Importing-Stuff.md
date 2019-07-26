## Importing Stuff

Our app only has text. Let's add an image.  For that we'll need an image control.  Before we can use a control, we need to import it.  All the controls we need for this app are provided in the React Native library, so we'll import our control from there.

Change  the import statement at the top of the file from this :

```import { StyleSheet, Text, View } from 'react-native';```

to this 

```import { StyleSheet, Text, View, Image } from 'react-native';```


An image control requires an image source.  Not only do we need to import the control but the image it will render as well.  Add one more import state to make our actual image available.  Paste this line right after our other import statements.

    import avocado from './assets/avocado.png';

Now we can use our image control.  Add the following line just above our text:

        <Image source={avocado}/>

Our render method should now look like this:

    render() {
      return (
        <View style={styles.container}>
          <Image source={avocado}/>
          <Text>I have eaten</Text>
          <Text>0</Text>
          <Text>Avocados</Text>
        </View>
     );
    }

You app should now look like this:

![alt](assets/02/app-image.png 'app with image')


Oh no! our image is HUGE!  Let's rectify that by adding some styles.

