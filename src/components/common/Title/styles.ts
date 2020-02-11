import Typography from 'antd/lib/typography';
import styled from 'src/themes';

export default styled(Typography.Title)`
    color: ${props => props.theme.main.foreground};
`;
