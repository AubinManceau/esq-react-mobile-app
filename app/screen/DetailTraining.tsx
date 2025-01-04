import {StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/useThemeColors";
import ProfilHeader from "@/components/ProfilHeader";

export default function DetailTraining() {
  const colors = useThemeColors();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.white}]}>
      <ProfilHeader pageName="detail entrainement" />
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
