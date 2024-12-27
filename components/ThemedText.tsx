import {StyleSheet, Text, type TextProps} from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
    title1: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: '900',
    },
    title2: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 'bold',
    },
    title3: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 'medium',
    },
    body1: {
        fontSize: 11,
        lineHeight: 16,
        fontWeight: 'regular',
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