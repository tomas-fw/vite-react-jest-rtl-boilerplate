import React, { type FC, useEffect, useState } from 'react';

interface Props {
    condition: boolean;
    children: React.ReactElement | React.ReactElement[];
}

const If: FC<Props> = ({ children, condition }) => {
    const [isConditionMet, setIsConditionMet] = useState(false);

    useEffect(() => {
        setIsConditionMet(condition);
    }, [condition]);
    return <>{isConditionMet && children}</>;
};

export default If;
