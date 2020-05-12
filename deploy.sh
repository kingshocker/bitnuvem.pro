#!/bin/bash

rm -rf platforms/

ionic build --prod > /dev/null
npm install -g replace > /dev/null
replace 'href="/"' 'href="/'$GITHUB_PAGE_SUBDIRECTORY'"' www/index.html > /dev/null
npm run deploy_github_pages > /dev/null

sudo apt-get update > /dev/null
sudo apt-get -y install openjdk-8-jdk > /dev/null
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
ionic cordova platform add android > /dev/null
wget -q 'https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip'
unzip -q sdk-tools-linux-4333796.zip
mkdir android-sdk
mv tools android-sdk/tools
cd android-sdk
echo "y" | tools/bin/sdkmanager "platform-tools" --sdk_root=$PWD > /dev/null
echo "y" | tools/bin/sdkmanager "build-tools;28.0.3" --sdk_root=$PWD > /dev/null
echo "y" | tools/bin/sdkmanager "platforms;android-19" --sdk_root=$PWD > /dev/null
echo "y" | tools/bin/sdkmanager "platforms;android-28" --sdk_root=$PWD > /dev/null
cd ../
export ANDROID_SDK_ROOT=$PWD/android-sdk
export PATH=$PATH:$ANDROID_SDK_ROOT:$ANDROID_SDK_ROOT/build-tools/28.0.3/

openssl aes-256-cbc -K $encrypted_c11b1b4317aa_key -iv $encrypted_c11b1b4317aa_iv -in secrets.tar.enc -out secrets.tar -d > /dev/null
tar xvf secrets.tar > /dev/null
npm install npm-which > /dev/null
gem install fastlane > /dev/null
gem install supply > /dev/null
ionic cordova build --release --prod android > /dev/null
jarsigner -verbose -sigalg SHA1withRSA -storepass $STOREPASS -keypass $KEYPASS -digestalg SHA1 -keystore android.jks platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk android_criptoarbitragem > /dev/null
zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk app.apk > /dev/null
fastlane supply run -j google-console-api.json -p br.com.criptoarbitragem -b app.apk -e $RELEASE_STATUS
