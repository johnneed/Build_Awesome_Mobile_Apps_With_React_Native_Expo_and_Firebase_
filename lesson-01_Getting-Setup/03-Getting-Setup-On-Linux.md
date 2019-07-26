# Getting Setup on Linux:
These instructions were written for Ubuntu 18.x

## Install Node with NVM
The best way to install Node is with Node Version Manger (NVM). NVM allows you easily upgrade and switch between versions of Node.

1. Download the NVM install script with this command:
    ```bash
    curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh
    ```

2. Install NVM by running this command
    ```bash
    bash install_nvm.sh
    ```

    It will install the software into a subdirectory of your home directory at ~/.nvm. It will also add the necessary lines to your ~/.profile file to use the file.

    To gain access to the nvm functionality, you'll need to either log out and log back in again or source the ~/.profile file so that your current session knows about the changes:
    ```bash
    source ~/.profile
    ```

3. You can now list all the versions of Node available for installation:
    ```bash
    nvm ls-remote
    ```

4. Install the latest version by typing, I usually pick the latest version, but last stable version is always safe should be listed as 'Latest: LTS'
    ```
    nvm install < version number >
    ```


5. You can switch to any version you have by typing
    ```bash
    nvm use < version number >
    ```

6. To make a version your default, run this command:
    ```bash
    nvm alias < version number > default
    `````

7. You can check the version of node you're running at the time by typing:
    ```bash
    node -v
    `````

## Install and Configure Git

1. Run the following command to install Git
    ```bash
    sudo apt update
    sudo apt install git
    ```

2. Set your name and email in Git using the following commands in the terminal.
    ```
    git config --global user.name "YOUR NAME"
    git config --global user.email your.email@somecompany.com
    ```

## Install Python 2.7.15

1. In the Command Prompt window, type the following and press Enter.
    ```bash
    python --version
    ```

2. If Python 2.7  is installed and in your path, then this command will show you the version number.
    `Python 2.7.15rc1.`

    Otherwise, you will see:

    `python: command not found.`

3. In this case, you need to install Python 2.7 with the following command:
    ```bash
    sudo apt install python-minimal
    ```

## Install Android Studio

We won't be using Android Studio but installing it gives us features we need to debug our app.

1. Install the 32-bit libraries needed to run Android Studio with this command:
    ```bash
    sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386
    ```

2. Go to this page:  https://developer.android.com/studio/  and click the link to "Download Android Studio"

    ![Alt](assets/linux/android-studio-website.png "Android Studio Website")

3. Unpack the .zip file you downloaded to an appropriate location for your applications, such as within/usr/local/ for your user profile, or /opt/ for shared users.

4. To launch Android Studio, open a terminal, navigate to the android-studio/bin/ directory, and execute `studio.sh.`

5. Select whether you want to import previous Android Studio settings or not, then click OK.

6. The Android Studio Setup Wizard guides you through the rest of the setup, which includes downloading Android SDK components that are required for development.


## Install and Configure Genymotion

Genymotion is the easiest way to get an Android emulator up and running. With Expo, you can use your phone, but you're probably going to want to use an emulator.

1. Genymotion requires VirtualBox, a virtual machine engine from Oracle. Install it with this command:
    ```bash
    sudo apt install virtualbox
    ```

2. Go to the Genymotion "Fun-Zone" and create an account. You'll need to download the "free for personal use" version of Genymotion: https://www.genymotion.com/fun-zone/

    ![Alt](assets/linux/genymotion-website.png "Genymotion Website")

3. Once you have your account, go back to the website and download the "with VirtualBox" version. If you install the "without VirtualBox" version you'll need to install VirtualBox separately.

    ![Alt](assets/linux/download-genymotion.png "Download Genymotion")

4. Open a terminal and navigate to the file you just downloaded. Make it executable with the following command:
    ```bash
    chmod +x ./genymotion-2.12.2-linux_x64.bin
    ```

5. Do a local installation with following command:
    ```bash
    ./genymotion-2.12.2-linux_x64.bin
    ```

6. Launch Genymotion by running:
    ```bash
    genymotion/genymotion
    ```

7. Download a virtual device by clicking the "+ Add" button, selecting a virtual device (Google Pixel is good choice)  and then clicking the "Next" button. You'll be prompted to rename the device if you so choose.
    ![Alt](assets/linux/select-new-virtual-device.png "Select New Virtual Device")


8. After your new virtual device is finished installing, configure the ADB (Android Debugging Bridge)  in Genymotion to use the same SDK library as Android Studio. Click the "Settings" button on the main Genymotion screen and then click the "ADB" tab.
    ![Alt](assets/linux/adb-settings.png "ADB settings")

9. Select the "Use custom Android SDK tools" and then browse the Android Sdk folder. The path (if you installed android studio locally) will be '/home/<your username>/Android/Sdk'. Choose this folder and click the "choose" button.
    ![Alt](assets/linux/sdk-path.png "SDK Path")


10. Test your installation by choosing the virtual device you just installed and click the "Start" button. Your emulator should start.
    ![Alt](assets/linux/emulator.png Emulator")

## Install Firebase Tools

1. Before you can use the Firebase tools you'll need a free account. Go to the Firebase website, https://firebase.google.com, and click the "Sign In" button. You'll be given the options of signing in or creating a new account.
    ![Alt](assets/linux/firebase-website.png "Firebase Website")

2. Now that you have a free Google Developers account install Firebase Tools:
    ```bash
    npm install -g firebase-tools
    ```

## Install Expo

Before you can use Expo you need to sign up for a free account. You'll need the account to publish your app to the Expo repository.

1. Go to http://expo.io and click the "Create an account" button.
    ![Alt](assets/linux/expo-website.png "Expo Website")

2. While you should have an Android emulator, there's no substitute for debugging on a real phone. To do this you'll need to install the Expo Client app on your iOS or Android phone. Search for it in your app store and install it.

3. Now that you have an account and your phone is all set, install the expo development tools on your computer.
    ```bash
    npm install expo-cli --global
    ```

## Taking Your New Development Environment for a Spin

Let's create and run a test app to maker sure everything is working properly.

1. In your terminal, navigate to a folder where you want to create you test app

2. Run the command `expo init test-app` You should see some options for app templates
    ![Alt](assets/linux/templates.png "Templates")

3. Choose "blank"  this is only a test.

4. When it's done, follow the direction on the screen to start the app.
    ```bash
    cd test-app
    expo start
    ```
    ![Alt](assets/linux/expo-upc.png "Expo UPC")

5. The development tools interface should pop up in your Chrome browser.
    ![Alt](assets/linux/expo-dev-tools.png "Expo Developer Tools")

6. Let's run the app in your Android emulator. Open Genymotion and start an emulator. Once it's started click the "Run on Android device/emulator" button in the left side of the screen.

7. You should have a new virtual device so Expo will try to install the Expo Client App. This may take a while, but you can monitor the progress in the bundler console.
    ![Alt](assets/linux/bundler-console.png "Bundler Console")

8. When the Expo client is loaded, the emulator will prompt you for permission to "draw over other apps."  Click the "OK"
button.
    ![Alt](assets/linux/permissions.png "Permissions")

9. Click the "Allow Display over other apps" toggle so it's on (green)
    ![Alt](assets/linux/toggle.png "Toggle")

10. Click the Back button on the right side to get back to your app.
    ![Alt](assets/linux/back-button.png "Back Button")

11. You should see your app building and then loading. When it's done, you should see this screen:
    ![Alt](assets/linux/app.png "App")
