---
title: Hello World, Expo Style
layout: post
author: john.need
permalink: /hello-world,-expo-style/
source-id: 1jjxlOMWsGu96GVzvMKiQ1mfAP1ZTfQrbq4U_zWfuSDk
published: true
---
Now that you have your development environment setup, we can start building our first mobile application, "Hello World"

Start by opening up a terminal. Then create or navigate to a folder where you want to keep your projects.  

![image alt text]({{ site.url }}/public/l7u3ceuokPxkBT934tHQJA_img_0.png)

Once  you're in the folder execute this command

expo init hello-world

You should be promoted to "Choose a template."

![image alt text]({{ site.url }}/public/l7u3ceuokPxkBT934tHQJA_img_1.png)

"Hello World" is a really simple app, so let's choose the default  'blank.'   Hit 'enter' to accept this as your template.  Expo will now extract the files you need and setup your app.

![image alt text]({{ site.url }}/public/l7u3ceuokPxkBT934tHQJA_img_2.png)

We can run our app by following the instructions on the screen.  Execute these two commands:

cd hello-world

expo start

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

