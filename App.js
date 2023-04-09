import * as React from 'react';
import { WebView } from 'react-native-webview';
import Loading from "./src/load/Loading";

export default class App extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount = async () => {
    setTimeout(() => { this.setState({ isLoading: false }) }, 3000);
  }
  render() {
    // splash 띄우기
    if (this.state.isLoading) {
      return <Loading />
    }
    //uri : 웹뷰 주소
    return <WebView source={{ uri: 'http://192.168.0.7:3000/mypage' }} style={{ marginTop: 0 }} />;
  }
}



