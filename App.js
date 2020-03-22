import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pannel from './src/Pannel'

export default function App() {
  return (
    <View style={styles.container}>
      <Pannel>
        <View>
          <Text>TESTE</Text>
        </View>
      </Pannel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
