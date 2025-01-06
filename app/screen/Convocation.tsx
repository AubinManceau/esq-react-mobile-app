import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/useThemeColors";
import Header from "@/components/Header";
import { useNavigation } from "@react-navigation/native";
import ThemedText from "@/components/ThemedText";

export default function Convocation() {
  const colors = useThemeColors();
  const navigation = useNavigation();  
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.white}]}>
      <Header pageName="Convocations" />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('DetailConvocation', {screenTitle: 'Sénior A'})} style={[styles.blockConvocation, {backgroundColor: colors.primary}]}>
          <ThemedText color="white" variant="title2" style={styles.text}>Sénior A</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetailConvocation', {screenTitle: 'Sénior B'})} style={[styles.blockConvocation, {backgroundColor: colors.primary}]}>
          <ThemedText color="white" variant="title2" style={styles.text}>Sénior B</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetailConvocation', {screenTitle: 'Sénior C'})} style={[styles.blockConvocation, {backgroundColor: colors.primary}]}>
          <ThemedText color="white" variant="title2" style={styles.text}>Sénior C</ThemedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blockConvocation: {
    width: "85%",
    height: 100,
    borderRadius: 8,
    margin: "auto",
    marginTop: 20,
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase"
  }
});
