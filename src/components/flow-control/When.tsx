import { type FC, type ReactElement, useEffect, useState } from 'react';
interface Props {
    condition: boolean;
    children: ReactElement | ReactElement[];
}

const When: FC<Props> = ({ children, condition }) => {
    const [isConditionMet, setIsConditionMet] = useState(false);

    useEffect(() => {
        setIsConditionMet(condition);
    }, [condition]);

    return <>{isConditionMet && children}</>;
};

export default When;
