import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";
import ThemedText from "./ThemedText";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TextProps } from "react-native";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

type Props = {
    type: string;
    date: string;
    startTime: string;
  };

export default function TrainingCard({ type, date, startTime }: Props) {
    const colors = useThemeColors();
    const navigation = useNavigation();
    const [status, setStatus] = useState<string | null>(null);

    const handlePress = (type: string) => {
        setStatus(prevStatus => prevStatus === type ? null : type);
    };

    const formattedDate = format(new Date(date), 'dd', { locale: fr });
    const formattedMonth = format(new Date(date), 'MMM', { locale: fr }).replace('.', '').toUpperCase();
    const formattedDay = format(new Date(date), 'EEEE', { locale: fr });
    const capitalizedDay = formattedDay.charAt(0).toUpperCase() + formattedDay.slice(1);
    const screenTitle = type === "match" ? `Match ${formattedDate} ${formattedMonth}` : `Entraînement ${formattedDate} ${formattedMonth}`;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailTraining', {screenTitle: screenTitle})} style={styles.container}>
            <View style={styles.haut}>
                <View style={styles.date}>
                    <ThemedText style={{ textAlign: 'center' }} variant="title2" color="black">{formattedDate}</ThemedText>
                    <ThemedText style={{ textAlign: 'center' }} variant="title2" color="black">{formattedMonth}</ThemedText>
                </View>
                <View style={styles.infos}>
                    <ThemedText variant="title3" color="black">{type == "match" ? "Match" : "Entraînement"}</ThemedText>
                    <ThemedText variant="body1" color="black">{capitalizedDay}, {startTime}</ThemedText>
                </View>
            </View>
            <View style={styles.bas}>
                <View style={styles.presences}>
                    <Text style={[styles.presences_btn, { backgroundColor: colors.primary }]}>24</Text>
                    <Text style={[styles.presences_btn, { backgroundColor: colors.grey }]}>18</Text>
                    <Text style={[styles.presences_btn, { backgroundColor: colors.secondary }]}>32</Text>
                </View>
                <View style={styles.boutons}>
                    <TouchableOpacity onPress={() => handlePress('present')}>
                        <Text style={[styles.boutons_btn, {
                            backgroundColor: status === 'present' ? colors.primary : colors.white,
                            borderColor: status === 'present' ? colors.primary : colors.black,
                            color: status === 'present' ? colors.white : colors.black
                        }]}>Présent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('absent')}>
                        <Text style={[styles.boutons_btn, {
                            backgroundColor: status === 'absent' ? colors.secondary : colors.white,
                            borderColor: status === 'absent' ? colors.secondary : colors.black,
                            color: status === 'absent' ? colors.white : colors.black
                        }]}>Absent</Text>
                    </TouchableOpacity>
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
        marginBottom: 20,
        margin: "auto",
    },
    date: {
        width: "15%",
    },
    infos: {
        padding: 10,
        width: "80%",
    },
    haut: {
        flexDirection: "row",
        alignItems: "center",
        height: 45,
    },
    bas: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        borderTopWidth: 1,
        borderTopColor: "#00000020",
    },
    presences: {
        flexDirection: "row",
        width: "35%",
        justifyContent: "space-around",
        alignItems: "center",
        paddingLeft: 10,
    },
    presences_btn: {
        borderRadius: 5,
        width: 25,
        height: 25,
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
    },
    boutons: {
        flexDirection: "row",
        width: "65%",
        justifyContent: "flex-end",
        gap: 10,
        paddingRight: 10,
    },
    boutons_btn: {
        borderRadius: 5,
        width: 80,
        height: 25,
        textAlign: "center",
        textAlignVertical: "center",
        borderWidth: 1,
    },
});
