# React-Native-QR-Code-Scanner

QR code reader written in React Native.

## Steps

1. Create a new React Native project:

```bash
npx react-native@latest init QRCodeScanner
```

2. Install CocoaPods:

When prompted, choose "yes" to install CocoaPods if you run your project in Xcode directly.

```bash
Do you want to install CocoaPods now? Only needed if you run your project in Xcode directly => yes
```

3. Locate Project Folder;

```bash
cd QRCodeScanner
```

4. Install React Native Camera Kit:

```bash
npm i react-native-camera-kit
```

5. Set Permissions for iOS/Android:

### Permissions

#### Android

Add the following uses-permission to your `AndroidManifest.xml` (usually found at: `android/src/main/`)

```java
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

#### iOS

Add the following usage descriptions to your `Info.plist` (usually found at: `ios/PROJECT_NAME/`)

```xml
<key>NSCameraUsageDescription</key>
<string>For taking photos</string>

<key>NSPhotoLibraryUsageDescription</key>
<string>For saving photos</string>
```

6. Install Pods (For IOS)

```bash
npx pod-install
```

7. Start the Metro server:

```bash
npm start
```

8. Run on iOS/Android simulator:

```bash
npm run ios  # for iOS
# OR
npm run android  # for Android

```

9. Change App.tsx codes

```node
import {Text, SafeAreaView} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  );
}
```

10. SS
11. Create src folder & BarcodeExample.tsx & src/images and then write codes & add images to images folder
12. Change App.tsx codes
13. SS
14. On real devices => xed ios
15. set signing a Team (Project Name/Signing & Capabilities/Signing)
16. run
17. SS
