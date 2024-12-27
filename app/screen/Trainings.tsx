import {StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/useThemeColors";
import Header from "@/components/Header";
import TrainingCard from "@/components/TrainingCard";

export default function Trainings() {
  const colors = useThemeColors();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.white}]}>
      <Header pageName="Présences" />
      <View style={styles.trainings} >
        <TrainingCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trainings: {
   marginTop: 30,
  },

});
