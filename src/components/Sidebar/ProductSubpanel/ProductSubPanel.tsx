import React from 'react';
import { Panel } from './ProductSubPanel.styled';
import '../../../transitions/transitions.css';

interface SubPanelProps {
    active: boolean;
    clicked: () => void;
}

const ProductSubPanel: React.FC<SubPanelProps> = (props) => {
    const { active, clicked } = props;

    return (
        <Panel active={active} onClick={() => clicked()}>
            {props.children}
        </Panel>
    );
};

export default ProductSubPanel;
