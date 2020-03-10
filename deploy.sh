#!/bin/bash

rm -rf platforms/

ionic build --prod
npm install -g replace
replace 'href="/"' 'href="/'$GITHUB_PAGE_SUBDIRECTORY'"' www/index.html
npm run deploy_github_pages

ionic cordova platform add android
yes | sdkmanager "build-tools;28.0.3"
openssl aes-256-cbc -K $encrypted_c11b1b4317aa_key -iv $encrypted_c11b1b4317aa_iv -in secrets.tar.enc -out secrets.tar -d
tar xvf secrets.tar
rvm install 2.6.5
gem install fastlane
gem install supply
ionic cordova build --release --prod android
jarsigner -verbose -sigalg SHA1withRSA -storepass $STOREPASS -keypass $KEYPASS -digestalg SHA1 -keystore android.jks platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk android_criptoarbitragem
/usr/local/android-sdk/build-tools/28.0.3/zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk app.apk
fastlane supply -v
fastlane supply run -j google-console-api.json -p br.com.criptoarbitragem -b app.apk -e $RELEASE_STATUS
