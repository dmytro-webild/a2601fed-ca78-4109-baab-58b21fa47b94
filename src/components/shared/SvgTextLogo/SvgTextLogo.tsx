import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
}

export const SvgTextLogo: React.FC<SvgTextLogoProps> = ({ text, className = '' }) => {
  return (
    <svg
      viewBox={`0 0 ${text.length * 60} 120`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="48"
        fontWeight="bold"
        fill="currentColor"
      >
        {text}
      </text>
    </svg>
  );
};
