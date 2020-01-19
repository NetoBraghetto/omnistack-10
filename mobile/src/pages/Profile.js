import React from "react";
import WebView from "react-native-webview";

export default function Profile({ navigation }) {
    return (
        <WebView source={ {uri: `https://github.com/${navigation.getParam('github_username')}`} } style={{flex: 1}} />
    );
}
