import { StyleSheet, ScrollView, View, Text, Image, Pressable, TextInput } from "react-native";
import { useFonts } from 'expo-font';
import CheckBox from "expo-checkbox"
import { useState, useEffect } from 'react';
import { Header } from "./header"

export default function Profile() {
    const [firstName, onChangeFirstName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [lastName, onChangeLastName] = useState('');
    const [phone, onChangePhone] = useState('');
    const [orders, onChangeOrders] = useState(false);
    const [newsletter, onChangeNewsLetter] = useState(false);
    const [offers, onChangeOffers] = useState(false);
    const [password, onChangePassword] = useState(false);

useEffect(()=>{
    console.log("password " + password + " orders " + orders + " newsletter " + newsletter)
}, [password, orders, orders])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Header isLogged={true} />
            </View>
            <View style={styles.formContainer}>

                <Text style={styles.profileSectionText}>Personal information</Text>
                <Text style={styles.avatarText}>Avatar</Text>
                <View style={styles.avatarRow}>

                    <Image source={require("../assets/Profile.png")} style={styles.imgProfile}></Image>
                    <Pressable onPress={() => alert("Coming Soon!")} style={styles.button}>
                        <Text style={styles.buttonText}>Change </Text>
                    </Pressable>
                    <Pressable onPress={() => alert("Coming Soon!")} style={styles.buttonRemove}>
                        <Text style={styles.buttonText}>Remove </Text>
                    </Pressable>
                </View>

                <View>

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
    checkboxContainer: {
        marginTop: 20,
        marginBottom:10
    },
    formContainer: {
        flex: 4,
        marginTop: 20,

    },
    avatarText: {
        color: 'lightgrey',
        fontSize: 10,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    imgProfile: {
        resizeMode: 'contain',
        height: 70,
        width: 75,
    },
    profileSectionText: {
        fontSize: 12,
        color: 'black',
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },

    header: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        flexDirection: 'row',
    },


    button: {
        backgroundColor: '#495E57',
        borderRadius: 10,
        width: 80,
        height: 40,
        paddingVertical: 8,
        paddingHorizontal: 5,
        marginTop: 5

    },

    buttonRemove: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: "#495E57",
        width: 80,
        height: 40,
        paddingVertical: 8,
        marginRight: 15,
        paddingHorizontal: 5,
        marginTop: 5
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
    logo: {
        height: 70,
        width: 70,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    avatarRow: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    checkboxView: {
        flexDirection: "row",
        marginTop: 5,
        paddingHorizontal:5
    },
    checkbox:{
        marginHorizontal: 5
    },
    contentText:{
        marginHorizontal: 50,
        marginTop:10

    }
});
