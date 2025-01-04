import {StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";
import ThemedText from "./ThemedText";
import { useNavigation } from "@react-navigation/native";

export default function TrainingCard() {
    const colors = useThemeColors();
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailTraining')} style={styles.container}>
            <View style={styles.haut}>
                <View style={styles.date}>
                    <ThemedText style={{textAlign: 'center'}} variant="title2" color="black">27</ThemedText>
                    <ThemedText style={{textAlign: 'center'}} variant="title2" color="black">OCT</ThemedText>
                </View>
                <View style={styles.infos}>
                    <ThemedText variant="title3" color="black">Entraînement</ThemedText>
                    <ThemedText variant="body1" color="black">Vendredi, 19h30</ThemedText>
                </View>
            </View>
            <View style={styles.bas}>
                <View style={styles.presences}>
                    <Text style={[styles.presences_btn, { backgroundColor: colors.primary }]}>24</Text>
                    <Text style={[styles.presences_btn, { backgroundColor: colors.grey }]}>18</Text>
                    <Text style={[styles.presences_btn, { backgroundColor: colors.secondary }]}>32</Text>
                </View>
                <View style={styles.boutons}>
                    <Text style={[styles.boutons_btn, { backgroundColor: colors.white, borderColor: colors.grey, color: colors.black }]}>Présent</Text>
                    <Text style={[styles.boutons_btn, { backgroundColor: colors.secondary, borderColor: colors.secondary, color: colors.white }]}>Absent</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "85%",
        borderWidth: 1,
        borderColor: "#00000020",
        borderRadius: 8,
        margin: "auto",
        marginBottom: 20,
    },
    date:{
        width: "15%",
    },
    infos:{
        padding: 10,
        width: "80%",
    },
    haut:{
        flexDirection: "row",
        alignItems: "center",
        height: 45,
    },
    bas:{
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        borderTopWidth: 1,
        borderTopColor: "#00000020",
    },
    presences:{
        flexDirection: "row",
        width: "35%",
        justifyContent: "space-around",
        alignItems: "center",
        paddingLeft: 10,
    },
    presences_btn:{
        borderRadius: 5,
        width: 25,
        height: 25,
        textAlign: "center",
        verticalAlign: "middle",
        color: "white",
    },
    boutons:{
        flexDirection: "row",
        width: "65%",
        justifyContent: "flex-end",
        gap: 10,
        paddingRight: 10,
    },
    boutons_btn:{
        borderRadius: 5,
        width: 80,
        height: 25,
        textAlign: "center",
        verticalAlign: "middle",
        borderWidth: 1,
    },
  });