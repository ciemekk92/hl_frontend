import React from 'react';
import { Panel } from './ProductSubPanel.styled';
import '../../../transitions/transitions.css';

const ProductSubPanel: React.FC = (props) => {
    return <Panel>{props.children}</Panel>;
};

export default ProductSubPanel;
