import React from 'react'
import ContainerStyle from './Container.style';
import useSpacing from '../../utils/hooks/useSpacing';

export default function Container({ children }) {
    const { padding } = useSpacing()

    return (
        <ContainerStyle padding={padding}>
            { children }
        </ContainerStyle>
    )
}
