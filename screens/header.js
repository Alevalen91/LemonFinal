import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';


export const Header = ()=> {
    
    return(
    <View style={styles.header}>
      <Image source={require('../assets/Logo.png')} style={styles.img}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
    header: {

      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },

    img: {
        resizeMode: 'contain',
        height: 100,
        width: 350,
        marginHorizontal: "auto"
    }
  });


