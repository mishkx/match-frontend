import { Icon } from 'antd';
import styled from 'src/themes';

export const Slider = styled.div`
    border-radius: ${props => props.theme.all.borderRadius};
    overflow: hidden;
`;

export const Slide = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

//todo
export const SlideImage = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
`;

export const NoPhoto = styled(Icon)`
    font-size: 250px;
    line-height: 250px;
`;

