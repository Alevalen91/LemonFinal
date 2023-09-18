
import { validateEmail, validateName } from "../utils/validateEmail"
import { StyleSheet, View, Text, TextInput, Pressable, Image, ScrollView } from "react-native"
import { useState, useEffect } from 'react';
import { Header } from "./header"
import { saveProfile, getProfiles, createProfile } from "../database";
import CheckBox from "expo-checkbox"

export default function Onboarding({ navigation }) {
  const [firstName, onChangeFirstName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [page, onChangePage] = useState(1);
  const [lastName, onChangeLastName] = useState('');
  const [phone, onChangePhone] = useState('');
  const [orders, onChangeOrders] = useState(false);
  const [newsletter, onChangeNewsLetter] = useState(false);
  const [offers, onChangeOffers] = useState(false);
  const [password, onChangePassword] = useState(false);


  function resetForm (){
    onChangeFirstName('');
    onChangeEmail('');
    onChangePage('');
    setIsDisabled(true);
    onChangePage(1);
    onChangeLastName('');
    onChangePhone('');
    onChangeOrders(false);
    onChangeNewsLetter(false);
    onChangeOffers(false);
    onChangePassword(false)
    onChangePage(1);
  }

  useEffect(() => { setIsDisabled(!(validateEmail(email) && validateName(firstName)));  
},
    [firstName, email]);


   async function dbSaveProfile(){
      let prof = await createProfileObj()
      createProfile(prof);
    }


    async function createProfileObj(){
      let Profile = {
        firstName : firstName,
        lastName: lastName,
        email: email,
        phone: phone, 
        orders: orders? 1: 0,
        newsletter: newsletter? 1: 0,
        offers: offers? 1: 0,
        password: password? 1: 0
      }
      return Profile
    }

  async function confirmProfile(){
      await dbSaveProfile()
      resetForm();
      navigation.navigate('Home')
    }

  if(page == 1){
  return (

    <ScrollView style={styles.container}>

      <View style={styles.headerContainer}>
        <Header isLogged = {false} />
      </View>


      <View style={styles.heroContainer}>
        <Text style={styles.titleText}>Little Lemon</Text>
        <Text style={styles.subTitleText}>Chicago</Text>
        <View style={styles.heroSubContainer}>
          <Text style={styles.descriptionText}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
          <Image
            source={require('../assets/Heroimage.png')}
            style={styles.heroImage} />
        </View>
      </View>


      <View style={styles.formContainer} >
        <Text style={styles.contentText} >First Name *</Text>
        <TextInput style={styles.textInput} value={firstName}
          onChangeText={onChangeFirstName}
          placeholder="First Name">
        </TextInput>

        <Text style={styles.contentText}>Email *</Text>
        <TextInput style={styles.textInput} value={email}
          onChangeText={onChangeEmail}
          placeholder="Email"
          keyboardType={"email-address"}
        >

        </TextInput>
        <Pressable onPress={() => onChangePage(2)} disabled={isDisabled} style={isDisabled? styles.buttonDisabled : styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>

      </View>

    </ScrollView>

  )

}
else{
  return(
    <ScrollView> 
        <View style={styles.headerContainer}>
        <Header isLogged = {false} />
      </View>


    <View style={styles.formContainer}>

    <Text style={styles.contentText} >First Name</Text>
    <TextInput style={styles.textInput} value={firstName}
        onChangeText={onChangeFirstName}
        placeholder="First Name">
    </TextInput>

    <Text style={styles.contentText} >Last Name</Text>
    <TextInput style={styles.textInput} value={lastName}
        onChangeText={onChangeLastName}
        placeholder="Last Name">
    </TextInput>

    <Text style={styles.contentText}>Email *</Text>
    <TextInput style={styles.textInput} value={email}
        onChangeText={onChangeEmail}
        placeholder="Email"
        keyboardType={"email-address"}
    >
    </TextInput>


    <Text style={styles.contentText} >Phone Number</Text>
    <TextInput style={styles.textInput} value={phone}
        onChangeText={onChangePhone}
        placeholder="03933312333"
        keyboardType={"numeric"}>
    </TextInput>

</View>

<View style={styles.checkboxContainer}>
<Text style={styles.profileSectionText}>Email notifications</Text>

<View style={styles.checkboxView}>
   
    <CheckBox
        value={orders}
        onValueChange={() => onChangeOrders(!orders)}
        style={styles.checkbox}
    />
    <Text> Order Status</Text>
</View>
<View style={styles.checkboxView}>
  
    <CheckBox
        value={password}
        onValueChange={() => onChangePassword(!password)}
        style={styles.checkbox}
    />
    <Text style={styles.label}>Password Changes</Text>
</View>
<View style={styles.checkboxView}>
   
    <CheckBox
        value={offers}
        onValueChange={() => onChangeOffers(!offers)}
        style={styles.checkbox}
    />
     <Text style={styles.label}>Special Offers</Text>
    
</View>

<View style={styles.checkboxView}>

    <CheckBox
        value={newsletter}
        onValueChange={() => onChangeNewsLetter(!newsletter)}
        style={styles.checkbox}
    />
    <Text style={styles.label}>Newsletter</Text>
</View>
</View>
<Pressable onPress={() => confirmProfile()} disabled={isDisabled} style={isDisabled? styles.buttonDisabled : styles.button}>
          <Text style={styles.buttonText}>Complete</Text>
        </Pressable>
</ScrollView>
  );
}
}



const styles = StyleSheet.create({
  headerContainer: {
    height:100
  },
  container: {
    flex: 6,
    backgroundColor: 'white',
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

  contentText: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 50
  },


checkboxContainer: {
    marginTop: 20,
    marginBottom:10
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
buttonText: {
    fontSize: 15,
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

checkboxView: {
    flexDirection: "row",
    marginTop: 5,
    paddingHorizontal:5
},
checkbox:{
    marginHorizontal: 5
},

heroContainer: {
  flex: 1,
  backgroundColor: '#495E57',
},
formContainer:{
  flex:2,
  marginTop:1,

},
heroSubContainer: {
  flexDirection: 'row',
  marginBottom: 1,
},
heroImage: {
  height: 150,
  width: 150,
  resizeMode: 'cover',
  borderRadius: 16,
  marginLeft:30
},


});
