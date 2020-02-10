import styled from 'src/themes';
import { Button as BaseButton } from '../../common';

//todo
export const Button = styled(BaseButton)`
    box-shadow: 0 4px 9px 0 rgba(213,218,224,.3);
    transition: transform .25s ease, filter .25s ease, opacity .25s ease;
    border-radius: 50%;
    font-size: 36px;
    width: 70px;
    height: 70px;
    
    &.ant-btn:hover, &:focus, &:active, &.active {
        transform: scale(1.1);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 32px;
`;
