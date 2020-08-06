import styled from 'styled-components';
import { StyleConstants } from '../../shared/constants';

export const Wrapper = styled.div`
    width: 100%;
`;

export const BillWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 0;
    cursor: pointer;
    background-color: white;
    border-bottom: 1px solid ${StyleConstants.colors.G10};
    position: relative;
    z-index: 1;
`;

export const CategoryImage = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 12px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const Chevron = styled.div`
    transition: 200ms;

    ${({ isOpen }) => isOpen && `
        transform: rotate(180deg);
    `}
`;

export const TransactionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: ${({ height }) => `${height || 0}px`};
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: 200ms;
    background-color: ${StyleConstants.colors.G10};
`;

export const Transaction = styled.div`
    padding: 12px;
    border-bottom: 1px solid ${StyleConstants.colors.G11};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.div`
    padding: 12px;
    min-width: 200px;
    margin: 12px;
    background-color: ${StyleConstants.colors.P10};
    color: white;
    align-self: center;
    text-align: center;
    border-radius: 12px;
    transition: 200ms;
    cursor: pointer;

    :hover {
        background-color: ${StyleConstants.colors.P11};
    }
`;