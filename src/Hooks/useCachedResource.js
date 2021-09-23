import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import  React from 'react';

/**
 * custom hook for loading font and to show splash screen untill font load
 */
export default function useCachedResources() {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
  
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          Lora_Bold : require('../../assets/fonts/Lora-Bold.ttf'),
          Lora_BoldItalic : require('../../assets/fonts/Lora-BoldItalic.ttf'),
          Lora_Italic : require('../../assets/fonts/Lora-Italic.ttf'),
          Lora_Medium : require('../../assets/fonts/Lora-Medium.ttf'),
          Lora_MediumItalic : require('../../assets/fonts/Lora-MediumItalic.ttf'),
          Lora_Regular: require('../../assets/fonts/Lora-Regular.ttf'),
          Lora_SemiBold: require('../../assets/fonts/Lora-SemiBold.ttf'),
          Lora_SemiBoldItalic: require('../../assets/fonts/Lora-SemiBoldItalic.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
