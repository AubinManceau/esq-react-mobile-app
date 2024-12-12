import {StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { TrainingCard } from "@/components/TrainingCard";

export default function Index() {
  const colors = useThemeColors();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.primary}]}>
      <TrainingCard>
        <ThemedText variant="title1" color="black">Page</ThemedText>
      </TrainingCard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
