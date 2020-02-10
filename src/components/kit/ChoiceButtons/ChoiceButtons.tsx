import React, { memo } from 'react';
import { Button, Wrapper } from './styles';

type ChoiceButtonsProps = {
    userId: number;
    handleDislike(userId: number): void;
    handleLike(userId: number): void;
}

export const ChoiceButtons: React.FC<ChoiceButtonsProps> = (props) => (
    <Wrapper>
        <Button
            icon={'close'}
            onClick={() => props.handleDislike(props.userId)}
        />
        <Button
            icon={'heart'}
            onClick={() => props.handleLike(props.userId)}
        />
    </Wrapper>
);

export default memo(ChoiceButtons);
