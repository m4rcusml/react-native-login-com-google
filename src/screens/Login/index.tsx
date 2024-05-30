import { StyleSheet, Text, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useApp, Realm } from '@realm/react';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: '1046030188594-6tfjdtergfr6tk9l2bvdfb6l2kuvekq2.apps.googleusercontent.com',
  iosClientId: '1046030188594-ncnuq46els218u5r7f0gnr87hcsl5ua2.apps.googleusercontent.com'
});

export function Login() {
  const app = useApp();
  
  async function handleLoginWithGoogle() {
    try {
      const { idToken } = await GoogleSignin.signIn();

      if(idToken) {
        const credentials = Realm.Credentials.jwt(idToken);

        await app.logIn(credentials);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ gap: 20, alignItems: 'center' }}>
        <Text style={{ fontWeight: '500', fontSize: 20 }}>
          Login com Google
        </Text>

        <GoogleSigninButton onPress={handleLoginWithGoogle} />
      </View>
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
