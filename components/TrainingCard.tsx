import {StyleSheet, View, Text } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function Convocation() {
    const colors = useThemeColors();
    return (
        <View style={styles.container}>
            <View style={styles.haut}>
                <View style={styles.date}>
                    <Text>12</Text>
                    <Text>Jan</Text>
                </View>
                <View style={styles.infos}>
                    <Text>Match</Text>
                    <Text>12h00</Text>
                </View>
            </View>
            <View style={styles.bas}>
                <View style={styles.presences}>
                    <Text>0</Text>
                    <Text>0</Text>
                    <Text>0</Text>
                </View>
                <View style={styles.boutons}>
                    <Text>Présent</Text>
                    <Text>Absent</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "80%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        padding: 5,
        borderRadius: 8,
        margin: "auto",
    },
    date:{
        width: "20%",
    },
    infos:{
        width: "80%",
    },
    haut:{
        flexDirection: "row",
        alignItems: "center",
        height: 40,
    },
    bas:{
        flexDirection: "row",
        alignItems: "center",
        height: 40,
    },
    presences:{
        flexDirection: "row",
        width: "30%",
        justifyContent: "space-around",
    },
    boutons:{
        flexDirection: "row",
        width: "70%",
        justifyContent: "flex-end",
        gap: 25,
    }
  });