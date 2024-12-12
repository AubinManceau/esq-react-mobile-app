import {StyleSheet, Text, type TextProps} from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
    title1: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 'bold',
    },
    title2: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 'bold',
    },
    title3: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 'bold',
    },
    body1: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'normal',
    },
    body2: {
        fontSize: 12,
        lineHeight: 20,
        fontWeight: 'normal',
    }
});

type Props = TextProps & {
    variant?: keyof typeof styles;
    color?: keyof typeof Colors['light'];
};

export default function ThemedText({variant, color, style, ...rest}: Props) {
    const colors = useThemeColors();
    return <Text style={[styles[variant ?? 'body1'], {color: colors[color ?? "primary"]}, style]} {...rest} />;
}