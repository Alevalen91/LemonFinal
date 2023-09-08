import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Header } from "./header"

export default function Home(){


    return(
        <ScrollView style={styles.container}>
             <View style={styles.headerContainer}>
        <Header />
      </View>
            <View style={styles.formContainer}>
            <Text> Home works! </Text> 
            </View>
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    headerContainer: {
      flex: 1,
      marginBottom: "30px"
    },
    container: {
      flex: 6,
      backgroundColor: 'white',
    },
    heroContainer: {
      flex: 5,
      backgroundColor: '#495E57',
    },
    formContainer:{
      flex:4,
      marginTop:20,
  
    },
    heroSubContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    heroImage: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
      borderRadius: 16,
      marginLeft:30
    },
    titleText: {
  
      fontSize: 30,
      color: '#F4CE14',
      paddingHorizontal: 10,
      marginTop: 10,
    },
    subTitleText: {
  
      fontSize: 20,
      color: '#EDEFEE',
      paddingHorizontal: 10,
    },
    descriptionText: {
  
      fontSize: 17,
      paddingVertical: 20,
      paddingLeft: 10,
      color: '#EDEFEE',
      width: 200,
    },
    header: {
      flex: 0.15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ddd',
      flexDirection: 'row',
    },
    content: {
      flex: 0.7,
      alignItems: 'center',
      backgroundColor: '#EDEFEE',
    },
    bottom: {
      flex: 0.15,
      alignItems: 'flex-end',
      backgroundColor: '#EDEFEE',
    },
    button: {
      backgroundColor: '#495E57',
      borderRadius: 10,
      paddingHorizontal: 30,
      paddingVertical: 3,
      marginHorizontal: 50,
      marginVertical: 20,
      width: 250,
    
   
    },
    buttonDisabled: {
      backgroundColor: '#495E57',
      borderRadius: 10,
      paddingHorizontal: 30,
      paddingVertical: 3,
      marginHorizontal: 50,
      marginVertical: 20,
      opacity: 0.6,
      width: 250,
    },
    headerText: {
      fontSize: 35,
      fontFamily: 'serif',
      lineHeight: 40,
    },
    contentText: {
      fontSize: 15,
      fontSize: 25,
      marginTop: 20,
      marginBottom: 10,
      marginHorizontal: 50
    },
    subHeaderText: {
  
      fontSize: 20,
      fontSize: 25,
      marginTop: 15,
    },
    buttonText: {
      fontSize: 25,
      color: 'black',
      textAlign: "center"
    },
    textInput: {
      backgroundColor: '#EDEFEE',
      height: 40,
      width: 250,
      borderRadius: 8,
      padding: 10,
      borderWidth: 2,
      marginHorizontal: 50
    },
    logo: {
      height: 70,
      width: 70,
      resizeMode: 'cover',
      borderRadius: 20,
    }
  });
  