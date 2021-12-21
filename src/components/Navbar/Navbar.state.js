import React from 'react';

import useWindowSize from '../../utils/hooks/useWindowSize';

export default function NavbarState() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const { width } = useWindowSize();

    const handleNav = () => setIsNavOpen(!isNavOpen);

    return { isNavOpen, handleNav, width };
}
