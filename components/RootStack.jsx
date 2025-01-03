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

function HomeStack() {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
          }}>
            <HomeStack.Screen name="Home" component={Home}/>
            <HomeStack.Screen name="Settings" component={Settings} />
        </HomeStack.Navigator>
    );
}

function TrainingStack() {
    const TrainingStack = createNativeStackNavigator();
    return (
        <TrainingStack.Navigator screenOptions={{
            headerShown: false
          }}>
            <TrainingStack.Screen name="Training" component={Trainings}/>
            <TrainingStack.Screen name="Settings" component={Settings} />
        </TrainingStack.Navigator>
    );
}

function MessageStack() {
    const MessageStack = createNativeStackNavigator();
    return (
        <MessageStack.Navigator screenOptions={{
            headerShown: false
          }}>
            <MessageStack.Screen name="Message" component={Message}/>
            <MessageStack.Screen name="Settings" component={Settings} />
        </MessageStack.Navigator>
    );
}

function ConvocationStack() {
    const ConvocationStack = createNativeStackNavigator();
    return (
        <ConvocationStack.Navigator screenOptions={{
            headerShown: false
          }}>
            <ConvocationStack.Screen name="Convocation" component={Convocation}/>
            <ConvocationStack.Screen name="Settings" component={Settings} />
        </ConvocationStack.Navigator>
    );
}

export default function Root() {
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
        component={HomeStack}
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
        component={TrainingStack}
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
        component={MessageStack}
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
        component={ConvocationStack}  
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
