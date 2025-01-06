import {StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/useThemeColors";
import ProfilHeader from "@/components/ProfilHeader";

import { RouteProp } from '@react-navigation/native';

type DetailTrainingRouteProp = RouteProp<{ params: { screenTitle: string } }, 'params'>;

export default function DetailTraining({ route }: { route: DetailTrainingRouteProp }) {
  const colors = useThemeColors();
  const { screenTitle } = route.params;
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.white}]}>
      <ProfilHeader pageName={screenTitle} />
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
