import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/app/screen/Home";
import Login from "@/app/screen/Login";
import Trainings from "@/app/screen/Trainings";
import Message from "@/app/screen/Message";
import Convocation from "@/app/screen/Convocation";
import { StyleSheet, Image, View } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";

const Tab = createBottomTabNavigator();

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const colors = useThemeColors();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabs, { backgroundColor: colors.primary }],
      }}
    >
      <Tab.Screen
        name="Home"
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
        name="Trainings"
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
        name="Message"
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
        name="Convocation"
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