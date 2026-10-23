import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Authentic WhatsApp Brand Icon (Speech bubble with phone handset)
 * Standardized across all buttons and CTAs on the site.
 */
export default function WhatsAppIcon({ size = 22, className = '', style = {}, ...props }) {
  return (
    <FaWhatsapp
      size={size}
      className={className}
      aria-hidden="true"
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style
      }}
      {...props}
    />
  );
}

export { FaWhatsapp };
