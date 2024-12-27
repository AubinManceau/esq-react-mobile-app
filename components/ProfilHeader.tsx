import {StyleSheet, View, type TextProps, Image } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import ThemedText from './ThemedText';
import { Link } from 'expo-router';

type Props = TextProps & {
    pageName: string;
};

export default function ProfilHeader({pageName}: Props) {
    const colors = useThemeColors();
    return (
        <View style={[styles.container, {backgroundColor: colors.white}]}>
            <Link href="/" style={styles.settings} replace>
                <Image source={require('../assets/icons/go-back.png')} style={styles.icon} />
            </Link>
            <ThemedText variant="title1" color="black">{pageName}</ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#00000020',
    },
    settings: {
        position: 'absolute',
        left: 25,
    },
    icon: {
        width: 25,
        height: 25,
    }
});