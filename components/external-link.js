import {
  openBrowserAsync,
  WebBrowserPresentationStyle,
} from "expo-web-browser";
import { TouchableOpacity } from "react-native";

export function ExternalLink({ href, children, ...rest }) {
  const handlePress = async () => {
    if (process.env.EXPO_OS !== "web") {
      await openBrowserAsync(href, {
        presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
      });
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} {...rest}>
      {children}
    </TouchableOpacity>
  );
}
