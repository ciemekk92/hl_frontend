import React, { CSSProperties } from 'react';
import { SVG } from '../../types/SVG';

const LogoSmall: React.FC<SVG> = (props) => {
    const { size, title, color, style } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 185.69 206.04"
            height={size}
            style={style as CSSProperties}
        >
            <title>{title}</title>
            <path fill={color} d="M133.06 0h52.63v206.04h-52.63z" />
            <path
                fill={color}
                d="M63.22 138.62a65.5 65.5 0 0059.25-71.2 65.5 65.5 0 00-59.25 71.2z"
            />
            <path fill={color} d="M0 0h52.63v206.04H0z" />
        </svg>
    );
};

export default LogoSmall;
