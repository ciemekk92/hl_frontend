import React from 'react';
import { Panel } from './SidebarCategoryPanel.styled';

interface PanelProps {
    clicked: () => void;
}

const SidebarCategoryPanel: React.FC<PanelProps> = (props) => {
    const { clicked } = props;
    return <Panel onClick={clicked}>{props.children}</Panel>;
};

export default SidebarCategoryPanel;
