import type { ViewProps } from 'react-native';
import { View } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';

type Props = ViewProps

export function TrainingCard({style, ...rest}: Props) {
    const colors = useThemeColors();
    return <View style={[style, styles, {backgroundColor: colors.white}]} {...rest} />
}

const styles = {
    borderRadius: 10,
    padding: 16,
}