# Running on an Android Emulator

Now that we have an app, Lets see what it looks like on our Android Emulator.

Open Genymotion and start a virtual device.  After your virtual device finishes booting up, type 'a' in the Expo terminal window to launch your app in the emulator.  Alternatively, you can click the "Run on Android device/emulator" button in the Chrome Dev Tools windows

The first time you launch your app in an emulator Expo will install the Expo client.  When this is finished you will be prompted to 'Allow display over other apps.'  Set the toggle to 'on' then return to your app by clicking the back button ![alt_text](assets/02/back-button.png "Genymotion : back button").

 <img src="assets/02/Capture8.PNG" width=400 alt="Genymotion : Allow display over other apps toggle"/>

 You should now see your new app's splash screen as your app builds and downloads.

 <img src="assets/02/Capture9.PNG" width=400 alt="Genymotion: splash screen"/>

When you app is ready, you should see the new default view.

 <img src="assets/02/Capture-10.PNG" width=400 alt="Genymotion: Default App Screen"/>

## Editing Your "Hello World" App

Now that we have a working app, let's change it to display "Hello World."  Launch Visual Studio Code and open your project folder.  Click `File => Open` Folder.  Then select your project folder.   In the Explorer panel on the left, Expand "HELLO-WORLD" and then select the App.js file.

![alt_text](assets/02/Capture-11.PNG "Visual Studio Code: App.js changes")

Change the line 

`<Text>Open up App.js to start working on your app!</Text>` 

to 

`<Text>Hello WOrld</Text>` 

Your App.js file should now look like this:

```
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    export default class App extends React.Component {
     render() {
       return (
         <View style={styles.container}>
           <Text>Hello World</Text>
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
    });
```

After you save the file, the app should rebuild and reload automagically.  Here's what you should see.

<img src="assets/02/Capture-12.PNG" width=400 alt="Genymotion: Final Hello World app"/>


Congratulations, you've just built your first React Native Mobile app using Expo.
