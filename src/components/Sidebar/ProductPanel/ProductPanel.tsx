import React from 'react';
import { Panel } from './ProductPanel.styled';

interface PanelProps {
    clicked: () => void;
    active: boolean;
}

const ProductPanel: React.FC<PanelProps> = (props) => {
    const { clicked, active } = props;
    return (
        <Panel active={active} onClick={clicked}>
            {props.children}
        </Panel>
    );
};

export default ProductPanel;
