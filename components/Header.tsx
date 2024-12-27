import {StyleSheet, View, type TextProps, Image } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import ThemedText from './ThemedText';
import { Link } from 'expo-router';

type Props = TextProps & {
    pageName: string;
};

export default function Header({pageName}: Props) {
    const colors = useThemeColors();
    return (
        <View style={[styles.container, {backgroundColor: colors.white}]}>
            <ThemedText variant="title1" color="black">{pageName}</ThemedText>
            <Link href="/screen/Settings" style={styles.settings}>
                <Image source={require('../assets/icons/user.png')} style={styles.icon} />
            </Link>
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
        right: 25,
    },
    icon: {
        width: 25,
        height: 25,
    }
});