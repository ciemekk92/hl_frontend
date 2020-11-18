import React from 'react';
import { Panel } from './SidebarPanel.styled';

const SidebarPanel: React.FC = (props) => {
    return <Panel>{props.children}</Panel>;
};

export default SidebarPanel;
