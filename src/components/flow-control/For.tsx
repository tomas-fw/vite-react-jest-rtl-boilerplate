import { type JSXElementConstructor, useEffect, useState, type ReactElement } from 'react';

interface Props<T> {
    // each: string;
    of: T[];
    children: (item: T, index: number) => ReactElement;
}

const For = <T,>({ of, children }: Props<T>): Array<ReactElement<any, string | JSXElementConstructor<any>>> | null => {
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
    return of.map(children);
};

export default For;
