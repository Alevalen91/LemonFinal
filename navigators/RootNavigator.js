import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../screens/Onboarding";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { getProfile } from "../database";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {

  
  return (
    <Stack.Navigator initialRouteName="OnBoarding">
    <Stack.Screen name="OnBoarding" component={OnBoarding} />
    <Stack.Screen name ="Home" component={Home}/>
    <Stack.Screen name = "Profile" component={Profile}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;

