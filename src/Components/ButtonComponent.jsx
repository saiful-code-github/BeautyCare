import React from 'react';
import { Link } from 'react-router-dom';
import './CustomButton.scss';

export const CustomButton = ({
  to,
  text = 'Get In Touch',
  bgColor = '#000',
  margin = '',
  color = '#fff',
  type = 'button'
}) => {
  const commonStyles = {
    backgroundColor: bgColor,
    marginLeft: margin,
    color: color,
  };

  // Render <Link> only if `to` is defined and `type` is not "submit"
  if (to && type !== 'submit') {
    return (
      <Link to={to} className="custom-btn" style={commonStyles}>
        <span className="data-text" data-text={text}>
          {text}
        </span>
      </Link>
    );
  }

  // Default to button (especially for forms)
  return (
    <button type={type} className="custom-btn" style={commonStyles}>
      <span className="data-text" data-text={text}>
        {text}
      </span>
    </button>
  );
};
