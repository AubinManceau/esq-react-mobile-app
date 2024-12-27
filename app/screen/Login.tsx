import {StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";

interface LoginProps {
onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
    const colors = useThemeColors();
    return (
        <View style={{ backgroundColor: colors.white, ...styles.container }}>
            <View>
            <Image
                style={styles.logo}
                source={require('@/assets/images/login.png')}
            />
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis elit at interdum interdum.
            </Text>
            </View>
            <View>
                <TextInput
                style={styles.input}
                inputMode="email"
                placeholder="Adresse mail"
                />
                <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                inputMode="text"
                />
                <TouchableOpacity style={{ ...styles.button, backgroundColor: colors.secondary }} onPress={onLogin}>
                    <Text style={ styles.buttonText}>Connexion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    input: {
        width: "70%",
        height: 50,
        marginHorizontal: "auto",
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 10,
    },
    button: {
        width: "70%",
        height: 50,
        marginHorizontal: "auto",
        justifyContent: "center",
        marginVertical: 50,
        borderRadius: 15,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        textTransform: "uppercase",
    },
    logo: {
        width: "70%",
        height: 250,
        objectFit: "contain",
        marginHorizontal: "auto",
        marginBottom: 18,
    },
    text: {
        width: "70%",
        marginHorizontal: "auto",
        marginBottom: 30,
    },
  });