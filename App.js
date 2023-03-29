import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    //uri : 웹뷰 주소
    return <WebView source={{ uri: 'http://192.168.1.56:3000/ScheduleCreation' }} style={{ marginTop: 0 }} />;
  }
}



