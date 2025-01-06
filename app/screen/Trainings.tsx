import {ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/useThemeColors";
import Header from "@/components/Header";
import TrainingCard from "@/components/TrainingCard";
import ThemedText from "@/components/ThemedText";

export default function Trainings() {
  const colors = useThemeColors();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.white}]}>
      <Header pageName="Présences" />
      <ScrollView style={{marginBottom: 100}} showsVerticalScrollIndicator={false}>
        <View style={styles.trainings} >
          <ThemedText variant="title1" color='primary' style={styles.title}>Aujourd'hui</ThemedText>
          <TrainingCard />
          <ThemedText variant="title1" color='primary' style={styles.title}>Cette semaine</ThemedText>
          <TrainingCard />
          <TrainingCard />
          <ThemedText variant="title1" color='primary' style={styles.title}>Ce mois-ci</ThemedText>
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
        </View>
      </ScrollView>
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
  title: {
    width: "85%",
    margin: "auto",
    marginBottom: 10,
    marginTop: 10,
    textTransform: "uppercase",
  },
});
