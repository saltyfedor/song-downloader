import { DefaultTheme } from 'styled-components';
import styled from 'styled-components';

const mainTheme: DefaultTheme = {
  borderRadius: '10px',
  colors: {
    main: '#00E8FC',
    tertiary: '#070707',
    secondary: '#F0EDEE'
  },
};

const StyledPrimaryButton = styled.button`
    border: 2px solid ${ props => props.theme.colors.main};
    border-radius: 5px;
    color: ${ props => props.theme.colors.main };
    background-color: ${ props => props.theme.colors.tertiary};
    
    font-size: 1.25rem;
    padding: 5px 10px;
    cursor: pointer;    
`

export { mainTheme, StyledPrimaryButton };