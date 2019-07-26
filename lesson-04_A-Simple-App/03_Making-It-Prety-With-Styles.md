# Making It Pretty with Styles

Styles are how we control our app's appearance.  Styles are JavaScript objects that look a lot like CSS.  That's intentional.  Let's get our avocado image under control by adding some simple styles.


Our styles object appears at the bottom of our file.  Change the style object, so it looks like this:

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

Our new 'avocado' object is the React Native equivalent of a CSS class. Our avocado 'class' has styles to set the width and height or our image.  the 'resizeMode' style tells React Native to shrink the image to fit in prescribed dimensions.  Finally the marginBottom style add some space between the image and our text.
  
Now that our styles are defined, apply them by adding a styles prop to the image.  Change the image tag to look like this:
  
  
    <Image source={avocado} style={styles.avocado}/>
    
    
Our app should now look like this:

![alt](./assets/03/small-avocado.png 'styled image')


Oh that looks much better, but our text is the wrong size.  Our app needs two different font sizes.  We could create two new 'classes' but we only need to pass a single style.   The easiest way to do this is pass a style object directly to the style prop.  Edit the text controls to look like this:


    <Text style={{ fontSize: 20 }}>I have eaten</Text>
    <Text style={{ fontSize: 60 }}>{this.state.avocadoCount}</Text>
    <Text style={{ fontSize: 20 }}>Avocados</Text>
 

This is what your app should look like now.

![alt](./assets/03/font-sizes.png 'font sizes')

If you've built a website before you may have noticed we didn't include a unit with with our font size.  In React Native sizes are just numbers.  There are no px's , em's, or rem's.  Nothing is a fixed size; everything is relative. This is a good thing.  There's huge disparity of screen sizes and resolutions among mobile devices.  By making sizes relative, React Native can calculate the correct size of everything for every device,  making your job much easier and your app looks good everywhere.






