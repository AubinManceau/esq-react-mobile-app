import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "@/app/screen/Home";
import Settings from "@/app/screen/Settings";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trainings from '@/app/screen/Trainings';
import Message from '@/app/screen/Message';
import Convocation from '@/app/screen/Convocation';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useThemeColors } from "@/hooks/useThemeColors";
import DetailTraining from '@/app/screen/DetailTraining';
import DetailConvocation from '@/app/screen/DetailConvocation';

function Tabs() {
    const Tab = createBottomTabNavigator();
    const colors = useThemeColors();
    return (
      <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabs, { backgroundColor: colors.primary }],
      }}
      >
        <Tab.Screen 
        name="HomeScreen" 
        component={Home}
        options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  styles.container,
                  { backgroundColor: focused ? colors.white : "none" },
                ]}
              >
                <Image
                  source={require("@/assets/icons/home.png")}
                  style={[
                    styles.icon,
                    { tintColor: focused ? colors.primary : colors.white },
                  ]}
                />
              </View>
            ),
        }} 
        />
        <Tab.Screen 
        name="TrainingScreen" 
        component={Trainings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.container,
                { backgroundColor: focused ? colors.white : "none" },
              ]}
            >
              <Image
                source={require("@/assets/icons/training.png")}
                style={[
                  styles.icon,
                  { tintColor: focused ? colors.primary : colors.white },
                ]}
              />
            </View>
          ),
        }} 
        />
        <Tab.Screen 
        name="MessageScreen" 
        component={Message}
        options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  styles.container,
                  { backgroundColor: focused ? colors.white : "none" },
                ]}
              >
                <Image
                  source={require("@/assets/icons/chat.png")}
                  style={[
                    styles.icon,
                    { tintColor: focused ? colors.primary : colors.white },
                  ]}
                />
              </View>
            ),
        }} 
        />
        <Tab.Screen 
        name="ConvocationScreen" 
        component={Convocation}  
        options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View
                style={[
                    styles.container,
                    { backgroundColor: focused ? colors.white : "none" },
                ]}
                >
                <Image
                    source={require("@/assets/icons/convoc.png")}
                    style={[
                    styles.icon,
                    { tintColor: focused ? colors.primary : colors.white },
                    ]}
                />
                </View>
            ),
        }}
        />
      </Tab.Navigator>
    );
}

export default function Root() {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} options={{animation: 'slide_from_right'}} />
        <Stack.Screen name="Settings" component={Settings} options={{animation: 'slide_from_right'}} />
        <Stack.Screen name="DetailTraining" component={DetailTraining} options={{animation: 'slide_from_right'}} />
        <Stack.Screen name="DetailConvocation" component={DetailConvocation} options={{animation: 'slide_from_right'}} />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    tabs: {
      position: "absolute",
      bottom: 25,
      elevation: 1,
      height: 70,
      borderRadius: 50,
      width: "90%",
      marginHorizontal: 20,
    },
    icon: {
      width: 30,
      height: 30,
    },
    container: {
      width: 50,
      height: 50,
      top: 15,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
    },
});
