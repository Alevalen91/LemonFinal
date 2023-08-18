import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../screens/Onboarding";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="OnBoarding">
    <Stack.Screen name="OnBoarding" component={OnBoarding} />
   
      
    </Stack.Navigator>
  );
};

export default RootNavigator;

