import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    //uri : 웹뷰 주소
    return <WebView source={{ uri: 'https://web-chat-gpt-p8xrq2mlff30dde.sel3.cloudtype.app' }} style={{ marginTop: 0 }} />;
  }
}



