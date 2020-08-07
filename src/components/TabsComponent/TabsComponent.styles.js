import styled from 'styled-components';
import { StyleConstants } from '../../shared/constants';

export const Wrapper = styled.div`
    /* background-color: ${StyleConstants.colors.G10}; */
    display: flex;
    flex: 1;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 600px;
    background-color: white;
    margin: 0 auto;
`;

export const TabsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 24px;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
`;

export const Tab = styled.div`
    display: flex;
    flex: 1;
    padding: 12px;
    background-color: ${StyleConstants.colors.G10};
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    cursor: pointer;
    transition: 200ms;

    :hover {
        background-color: ${StyleConstants.colors.G11};
    }
    
    ${({ isActive }) => isActive && `
        background-color: ${StyleConstants.colors.P10};
        color: white;

        :hover {
            background-color: ${StyleConstants.colors.P11};
        }
    `}

    &:last-of-type {
        margin-left: 24px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 24px 24px;
`;

export const LoaderImage = styled.img`
    width: 48px;
    height: 48px;
    margin-top: 48px;
`;

export const Message = styled.div`
    margin-top: 48px;
    text-align: center;
    font-size: 18px;
`;