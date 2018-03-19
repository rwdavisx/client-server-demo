import styled, {css} from 'styled-components';

// language=ECMAScript 6
export const SubmitButton = styled.button`
    color: aqua;
    background: dimgray;
    border: 2px solid aqua;
    font-weight: bold;
    font-size: large;
    
    ${props => props.primary && css`
        color: aqua;
        border: 2px solid aqua;
    `}
    
    ${props => props.success && css`
        color: lawngreen;
        border: 2px solid lawngreen;
    `}
    
    ${props => props.failure && css`
        color: #ff4472;
        border: 2px solid #ff4472;
    `}
    
    ${props => props.default && css`
        color: #ebebeb;
        border: 2px solid #ebebeb;
    `}
    
    ${props => props.warning && css`

        color: yellow;
        border: 2px solid yellow;
    `}
`;