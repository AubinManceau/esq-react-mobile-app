import { ScrollView, StyleSheet, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/useThemeColors";
import Header from "@/components/Header";
import TrainingCard from "@/components/TrainingCard";
import { useEffect, useState, useCallback } from "react";
import ThemedText from "@/components/ThemedText";

export default function Trainings() {
  const [trainings, setTrainings] = useState<{
    startTime: string;
    date: string; 
    type: string 
  }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTrainings = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("http://10.0.2.2:3000/api/training/");
      if (!response.ok) throw new Error("Erreur lors du chargement des entraînements");
      const data = await response.json();
      setTrainings(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTrainings();
  }, [getTrainings]);

  const colors = useThemeColors();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.white }]}>
      <Header pageName="Présences" />
      <ScrollView style={{ marginBottom: 100 }} showsVerticalScrollIndicator={false}>
        {loading && <ActivityIndicator size="large" color={colors.primary} />}
        {error && <ThemedText variant="body1" color="primary">{error}</ThemedText>}
        {!loading && !error && (
          <View style={styles.trainings}>
            {trainings.length > 0 ? (
              trainings.map((training) => <TrainingCard type={training.type} date={training.date} startTime={training.startTime} />)
            ) : (
              <ThemedText variant="body1" color="primary">Aucun entraînement disponible.</ThemedText>
            )}
          </View>
        )}
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
});
