import React from 'react';

export default function JumbotronState() {
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    React.useEffect(() => {
        setIsLoaded(true);
    }, []);

    return { isLoaded };
}
