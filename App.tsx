import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { AppProvider, UserProvider } from '@realm/react';

export default function App() {
  return (
    <AppProvider id='appId'>
      <UserProvider fallback={<Login />}>
        <View style={styles.container}>
          <Text>Home</Text>
          <StatusBar style="auto" />
        </View>
      </UserProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
