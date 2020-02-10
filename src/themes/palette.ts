import { darken, desaturate, lighten, mix } from 'polished';
import { BasePalette, Palette } from './types';

enum Statuses {
    Success = '#4caf50',
    Warning = '#ff9800',
    Danger = '#f44336',
}

export default (colors: BasePalette): Palette => {
    const [light, info, primary, accent, dark] = colors;
    const success = mix(0.7, Statuses.Success, primary);
    const warning = mix(0.7, Statuses.Warning, primary);
    const danger = mix(0.7, Statuses.Danger, primary);

    return {
        accent,
        accentSecondary: lighten(0.1, accent),

        danger,
        dangerSecondary: lighten(0.3, danger),

        dark,
        darkLight: lighten(0.7, dark),
        darkSecondary: desaturate(0.04, darken(0.1, dark)),
        darkTertiary: desaturate(0.04, darken(0.3, dark)),

        info,
        infoSecondary: lighten(0.3, info),

        light,
        lightLight: lighten(0.15, light),
        lightSecondary: desaturate(0.1, darken(0.1, light)),
        lightTertiary: desaturate(0.2, darken(0.35, light)),

        primary,
        primarySecondary: lighten(0.3, light),

        success,
        successSecondary: lighten(0.3, success),

        warning,
        warningSecondary: lighten(0.3, warning),
    };
};
