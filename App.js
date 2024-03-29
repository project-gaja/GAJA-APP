import * as React from 'react';
import { WebView } from 'react-native-webview';
import { useRef, useState, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { NetworkInfo } from "react-native-network-info";

export default function App() {
  const [animationFinished, setAnimationFinished] = useState(false);
  const animation = useRef(null);
  const [ip, setIp] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setAnimationFinished(true);
    }, 3000);
  }, []);

  const restartAnimation = () => {
    animation.current?.reset();
    animation.current?.play();
    setAnimationFinished(false);
  };

  useEffect(() => {
    /* ip 가져오기 실패..
    NetworkInfo.getIPV4Address().then(ipv4Address => {
      setIp(ipv4Address);
    });
    */
  }, []);

  return (
    <View style={styles.container}>
      {animationFinished ? (
        <WebView source={{ uri: `http://192.168.35.134:3000/` }} style={{ marginTop: 0 }} />
      ) : (
        <View style={styles.animationContainer}>
          <LottieView
            autoPlay={true}
            ref={animation}
            style={{
              width: 200,
              height: 200,
              backgroundColor: '#eee',
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require('./assets/lottie/splash.json')}
          />
          <View style={styles.buttonContainer}>
            <Button title="Restart Animation" onPress={restartAnimation} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});