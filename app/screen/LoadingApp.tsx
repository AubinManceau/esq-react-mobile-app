import {StyleSheet, View, Text } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function LoadingApp() {
    const colors = useThemeColors();
    return (
        <View style={{ backgroundColor: colors.primary, ...styles.container }}>
            <Text>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});