import { type FC, type ReactElement } from 'react';
import { Otherwise, When } from '.';

interface Props {
    children: ReactElement[];
}

const Choose: FC<Props> = ({ children }) => {
    for (const child of children) {
        if (child.type === When && (Boolean(child.props.condition) ?? false)) {
            return child;
        }

        if (child.type === Otherwise) {
            return child;
        }
    }
    return null;
};

export default Choose;
