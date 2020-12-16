import React from 'react';
import { SVG } from '../../../types';

const IconChevronRight: React.FC<SVG> = (props) => {
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
            <path
                d="M12.95 10.707l0.707-0.707-5.657-5.657-1.414 1.414 4.242 4.243-4.242 4.243 1.414 1.414 4.95-4.95z"
                fill={color}
            />
        </svg>
    );
};

export default IconChevronRight;
