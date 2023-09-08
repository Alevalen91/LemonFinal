import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';


export const Header = ( props ) => {
console.log(props.isLogged)
  if (!props.isLogged) {
    return (
      <View style={styles.header}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />

      </View>
    );
  }
  else
    return (
      <View style={styles.headerProfile}>
        <Image source={require('../assets/Logo.png')} style={styles.logoProfile} />
        <Image source={require("../assets/Profile.png")} style={styles.imgProfile}></Image>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  headerProfile: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5
  },
  logo: {
    resizeMode: 'contain',
    height: 150,
    width: 200,
    marginHorizontal: "auto"
  },
  logoProfile: {
    resizeMode: 'contain',
    height: 70,
    width: 250,

  },
  imgProfile: {
    resizeMode: 'contain',
    height: 70,
    width: 75,
  }
});


