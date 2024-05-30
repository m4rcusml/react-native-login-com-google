import { useApp, useUser } from '@realm/react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function Home() {
  const user = useUser();
  const app = useApp();

  async function handleLogOut() {
    await app.currentUser?.logOut();
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {user.profile.name || 'vazio'}
      </Text>
      
      <Text style={styles.text}>
        {user.profile.email || 'vazio'}
      </Text>

      <Button title='Sair' onPress={handleLogOut} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  text: {
    fontWeight: '500',
    fontSize: 16
  }
});
