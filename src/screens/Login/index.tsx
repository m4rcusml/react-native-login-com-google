import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useState } from 'react';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: '1046030188594-6tfjdtergfr6tk9l2bvdfb6l2kuvekq2.apps.googleusercontent.com',
  iosClientId: '1046030188594-ncnuq46els218u5r7f0gnr87hcsl5ua2.apps.googleusercontent.com'
});

export function Login() {
  const [user, setUser] = useState<{ idToken: string | null, data: any }>();

  async function handleLoginWithGoogle() {
    try {

      const data = await GoogleSignin.signIn();
      const { idToken, user } = data;
      
      console.log(data);

      setUser({
        idToken,
        data: user
      });

    } catch (error) {

      console.log(error);

    }
  }

  function handleLogout() {
    GoogleSignin.signOut().then(() => setUser(undefined));
  }

  return (
    <View style={styles.container}>
      <View style={{ gap: 20, alignItems: 'center' }}>
        <Text style={{ fontWeight: '500', fontSize: 20 }}>
          Login com Google
        </Text>

        {user?.idToken ? <Button title='Sair da conta' onPress={handleLogout} /> : <GoogleSigninButton onPress={handleLoginWithGoogle} />}
      </View>

      {user && <View style={{ gap: 20 }}>
        <Image
          style={{ aspectRatio: 1, alignSelf: 'center', backgroundColor: '#aaa' }}
          source={{ uri: user?.data.photo }}
          borderRadius={0}
          width={80}
        />

        <Text style={styles.text}>
          {'Token id: ' + user?.idToken?.slice(0, 20) + '...'}
        </Text>

        <Text style={styles.text}>
          {`Nome: ${user?.data.name}`}
        </Text>

        <Text style={styles.text}>
          {`Email: ${user?.data.email}`}
        </Text>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column-reverse',
    padding: 20,
    gap: 20
  },
  text: {
    fontWeight: '500',
    fontSize: 16
  }
});
