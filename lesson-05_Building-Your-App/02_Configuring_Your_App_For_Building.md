
 ## Config app.json
 
 app.json is where you keep all your app's important settings.  Right now, your app.json file probably looks like this:
 ```
{
  "expo": {
    "name": "avocado",
    "description": "Track your avocado intake",
    "slug": "avocado",
    "privacy": "public",
    "sdkVersion": "32.0.0",
    "platforms": [
      "ios",
      "android"
    ],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    }
  }
}
```
 You should already have some the tags required for building: name, icons, version, slug, and sdkVerison.
 We'll need to add a `bundleIdentifier` field for iOS and a `package` fieled for Android before we can build.  Both of these fields can be the same and look like a backwards URL.   We used reversed our domain name and appended the app's name to the end.
 
 
  ```
{
  "expo": {
    "name": "avocado",
    "description": "Track your avocado intake",
    "slug": "avocado",
    "privacy": "public",
    "sdkVersion": "32.0.0",
    "platforms": [
      "ios",
      "android"
    ],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
       "bundleIdentifier": "org.codeforbtv.avocado"
    },
    "android": {
      "package": "org.codeforbtv.avocado"
    }
  }
}
```
 
