import { View, TouchableOpacity, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Header = ( props ) => {
  const navigation = useNavigation();
  function goToProfile(){
    navigation.navigate("Profile");
  }
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
        <Pressable onPress={()=> goToProfile()}>   
        <Image source={require("../assets/Profile.png")} style={styles.imgProfile}/>
      </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },

  headerProfile: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5
  },
  logo: {
    resizeMode: 'contain',
    height: 100,
    width: 150,
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


