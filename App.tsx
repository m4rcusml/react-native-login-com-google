import { StatusBar } from 'expo-status-bar';
import { AppProvider, UserProvider } from '@realm/react';
import { Login } from './src/screens/Login';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <AppProvider id='nexusskillapp-fnbvszr'>
      <UserProvider fallback={<Login />}>
        <Home />
        <StatusBar style='auto' />
      </UserProvider>
    </AppProvider>
  );
}
