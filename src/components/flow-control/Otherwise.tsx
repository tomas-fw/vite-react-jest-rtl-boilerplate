import { type FC, type ReactElement, useEffect, useState } from 'react';
interface Props {
    children: ReactElement | ReactElement[];
}

const Otherwise: FC<Props> = ({ children }) => {
    // Add a state to track if component is mounted on the client
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Change the state after the component is mounted
        setIsMounted(true);
    }, []);

    // If component isn't mounted yet, return null or a loader
    if (!isMounted) {
        return null; // or return a loader
    }

    return <>{children}</>;
};

export default Otherwise;
