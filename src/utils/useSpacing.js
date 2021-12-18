import { useState, useEffect } from 'react'
import useWindowSize from './useWindowSize';

export default function useSpacing() {
    const [margin, setMargin] = useState("15px");
    const [padding, setPadding] = useState("15px");

    const { width } = useWindowSize();

    useEffect(() => {
        if(width <= 768) setPadding("15px");
        if(width > 768) setPadding("30px");
        if(width > 1024) setPadding("0px");
    }, [width]);

    return { margin, padding };
}
