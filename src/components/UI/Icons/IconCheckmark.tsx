import React from 'react';
import { SVG } from '../../../types';

const IconCheckmark: React.FC<SVG> = (props) => {
    const { size, title, color, style } = props;
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 20 20"
            style={style}
        >
            <title>{title}</title>
            <path d="M0 11l2-2 5 5 11-11 2 2-13 13z" fill={color} />
        </svg>
    );
};

export default IconCheckmark;
