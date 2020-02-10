import { BasePalette } from './types';
import palette from './palette';

export const basePalette: BasePalette = [
    '#F4F6F5',
    '#9792C8',
    '#CE4A49',
    '#C38371',
    '#222623',
];

export const colors = palette(basePalette);

export const light = {
    all: {
        blockPadding: '16px',
        borderRadius: '18px',
        controlFontSize: '16px',
        elementPadding: '8px',
        layoutBackground: colors.lightSecondary,
    },
    danger: {
        background: colors.dangerSecondary,
        foreground: colors.danger,
    },
    info: {
        cardBackground: colors.infoSecondary,
        cardForeground: colors.info,
    },
    main: {
        background: colors.light,
        backgroundActive: colors.lightLight,
        foreground: colors.dark,
        foregroundMuted: colors.lightTertiary,
    },
    primary: {
        background: colors.primary,
        foreground: colors.light,
        foregroundMuted: colors.primarySecondary,
    },
    success: {
        background: colors.successSecondary,
        foreground: colors.success,
    },
};

export default light;
