import { DefaultTheme } from 'styled-components';
import light from './light';

export type Theme = DefaultTheme & typeof light;

export type BasePalette = [string, string, string, string, string];

export type Palette = {
    accent: string;
    accentSecondary: string;

    danger: string;
    dangerSecondary: string;

    dark: string;
    darkLight: string;
    darkSecondary: string;
    darkTertiary: string;

    info: string;
    infoSecondary: string;

    light: string;
    lightLight: string;
    lightSecondary: string;
    lightTertiary: string;

    primary: string;
    primarySecondary: string;

    success: string;
    successSecondary: string;

    warning: string;
    warningSecondary: string;
};
