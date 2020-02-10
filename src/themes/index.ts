import baseStyledComponents, { ThemedStyledInterface } from 'styled-components';
import dark from './dark';
import light from './light';
import { Theme } from './types';

const styled: ThemedStyledInterface<Theme> = baseStyledComponents;

export {
    dark,
    light,
};

export default styled;
