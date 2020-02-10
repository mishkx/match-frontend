import styled from 'src/themes';
import Slider from './Slider';

export default styled(Slider)`
    &:hover .ant-slider-track,
    .ant-slider-track {
        background-color: ${props => props.theme.primary.background};
    }
    
    &:hover .ant-slider-handle,
    &:hover .ant-slider-handle:not(.ant-tooltip-open),
    .ant-slider-handle {
        border-color: ${props => props.theme.primary.background};
        box-shadow: none;
    }
`;
