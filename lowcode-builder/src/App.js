import React, { useState, useEffect, useCallback } from 'react';
import { X, Copy, Plus, Trash2, Settings, Undo, Redo, Save, FolderOpen, Eye, EyeOff, Smartphone, Tablet, Monitor, Search, ChevronRight, ChevronDown, Move, Layers, Code } from 'lucide-react';


const ComponentLibrary = {
  Button: ({ text = 'Button', color = 'blue', size = 'md', width = 'auto', rounded = 'md' }) => {
    const sizeClasses = { sm: 'px-3 py-1 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' };
    const colorClasses = {
      blue: 'bg-blue-500 hover:bg-blue-600',
      green: 'bg-green-500 hover:bg-green-600',
      red: 'bg-red-500 hover:bg-red-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      gray: 'bg-gray-500 hover:bg-gray-600'
    };
    const widthClasses = { auto: 'w-auto', full: 'w-full', half: 'w-1/2' };
    const roundedClasses = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded', lg: 'rounded-lg', full: 'rounded-full' };
    return (
      <button className={`${colorClasses[color]} ${sizeClasses[size]} ${widthClasses[width]} ${roundedClasses[rounded]} text-white font-medium transition-colors`}>
        {text}
      </button>
    );
  },
  
  Input: ({ label = 'Input Field', placeholder = 'Enter text...', width = 'full', required = false }) => {
    const widthClasses = { full: 'w-full', half: 'w-1/2', third: 'w-1/3' };
    return (
      <div className={widthClasses[width]}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input type="text" placeholder={placeholder} className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      </div>
    );
  },
  
  Text: ({ content = 'Text Block', size = 'base', weight = 'normal', align = 'left', color = 'gray-800' }) => {
    const sizeClasses = { xs: 'text-xs', sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl', '3xl': 'text-3xl' };
    const weightClasses = { normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold' };
    const alignClasses = { left: 'text-left', center: 'text-center', right: 'text-right', justify: 'text-justify' };
    return <p className={`${sizeClasses[size]} ${weightClasses[weight]} ${alignClasses[align]} text-${color}`}>{content}</p>;
  },
  
  Container: ({ children, padding = 'md', gap = 'md', direction = 'vertical', bg = 'gray-50', border = true, rounded = 'md' }) => {
    const paddingClasses = { none: 'p-0', sm: 'p-2', md: 'p-4', lg: 'p-6', xl: 'p-8' };
    const gapClasses = { none: 'gap-0', sm: 'gap-2', md: 'gap-4', lg: 'gap-6' };
    const directionClasses = { vertical: 'flex-col', horizontal: 'flex-row' };
    const roundedClasses = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded', lg: 'rounded-lg' };
    return (
      <div className={`flex ${directionClasses[direction]} ${paddingClasses[padding]} ${gapClasses[gap]} ${roundedClasses[rounded]} bg-${bg} ${border ? 'border-2 border-dashed border-gray-300' : ''}`}>
        {children || <span className="text-gray-400 text-sm">Empty Container (Drop components here)</span>}
      </div>
    );
  },

  Checkbox: ({ label = 'Checkbox', checked = false }) => (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input type="checkbox" checked={checked} readOnly className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
      <span className="text-gray-700">{label}</span>
    </label>
  ),

  Select: ({ label = 'Select', options = 'Option 1,Option 2,Option 3', width = 'full' }) => {
    const widthClasses = { full: 'w-full', half: 'w-1/2', third: 'w-1/3' };
    const opts = options.split(',');
    return (
      <div className={widthClasses[width]}>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
          {opts.map((opt, i) => <option key={i}>{opt.trim()}</option>)}
        </select>
      </div>
    );
  },

  Card: ({ title = 'Card Title', content = 'Card content goes here', padding = 'md', shadow = 'md' }) => {
    const paddingClasses = { sm: 'p-3', md: 'p-4', lg: 'p-6' };
    const shadowClasses = { none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg' };
    return (
      <div className={`bg-white ${paddingClasses[padding]} ${shadowClasses[shadow]} rounded-lg border border-gray-200`}>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    );
  },

  Image: ({ src = 'https://via.placeholder.com/400x300', alt = 'Image', width = 'full', rounded = 'md' }) => {
    const widthClasses = { full: 'w-full', half: 'w-1/2', third: 'w-1/3', quarter: 'w-1/4' };
    const roundedClasses = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded', lg: 'rounded-lg', full: 'rounded-full' };
    return <img src={src} alt={alt} className={`${widthClasses[width]} ${roundedClasses[rounded]} object-cover`} />;
  },

  Badge: ({ text = 'Badge', color = 'blue', size = 'md' }) => {
    const colorClasses = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      red: 'bg-red-100 text-red-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      gray: 'bg-gray-100 text-gray-800'
    };
    const sizeClasses = { sm: 'px-2 py-0.5 text-xs', md: 'px-2.5 py-0.5 text-sm', lg: 'px-3 py-1 text-base' };
    return <span className={`inline-flex items-center ${colorClasses[color]} ${sizeClasses[size]} font-medium rounded-full`}>{text}</span>;
  },

  Divider: ({ style = 'solid', color = 'gray-300', spacing = 'md' }) => {
    const spacingClasses = { sm: 'my-2', md: 'my-4', lg: 'my-6' };
    const styleClasses = { solid: 'border-solid', dashed: 'border-dashed', dotted: 'border-dotted' };
    return <hr className={`border-${color} ${styleClasses[style]} ${spacingClasses[spacing]}`} />;
  }
};

// ===== COMPONENT METADATA =====
const componentMetadata = {
  Button: {
    category: 'Form',
    defaultProps: { text: 'Button', color: 'blue', size: 'md', width: 'auto', rounded: 'md' },
    properties: [
      { name: 'text', type: 'text', label: 'Button Text' },
      { name: 'color', type: 'select', label: 'Color', options: ['blue', 'green', 'red', 'purple', 'gray'] },
      { name: 'size', type: 'select', label: 'Size', options: ['sm', 'md', 'lg'] },
      { name: 'width', type: 'select', label: 'Width', options: ['auto', 'full', 'half'] },
      { name: 'rounded', type: 'select', label: 'Border Radius', options: ['none', 'sm', 'md', 'lg', 'full'] }
    ]
  },
  Input: {
    category: 'Form',
    defaultProps: { label: 'Input Field', placeholder: 'Enter text...', width: 'full', required: false },
    properties: [
      { name: 'label', type: 'text', label: 'Label' },
      { name: 'placeholder', type: 'text', label: 'Placeholder' },
      { name: 'width', type: 'select', label: 'Width', options: ['full', 'half', 'third'] },
      { name: 'required', type: 'checkbox', label: 'Required Field' }
    ]
  },
  Text: {
    category: 'Content',
    defaultProps: { content: 'Text Block', size: 'base', weight: 'normal', align: 'left', color: 'gray-800' },
    properties: [
      { name: 'content', type: 'textarea', label: 'Content' },
      { name: 'size', type: 'select', label: 'Size', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'] },
      { name: 'weight', type: 'select', label: 'Weight', options: ['normal', 'medium', 'semibold', 'bold'] },
      { name: 'align', type: 'select', label: 'Alignment', options: ['left', 'center', 'right', 'justify'] },
      { name: 'color', type: 'select', label: 'Color', options: ['gray-800', 'blue-600', 'green-600', 'red-600', 'purple-600'] }
    ]
  },
  Container: {
    category: 'Layout',
    defaultProps: { padding: 'md', gap: 'md', direction: 'vertical', bg: 'gray-50', border: true, rounded: 'md' },
    properties: [
      { name: 'padding', type: 'select', label: 'Padding', options: ['none', 'sm', 'md', 'lg', 'xl'] },
      { name: 'gap', type: 'select', label: 'Gap', options: ['none', 'sm', 'md', 'lg'] },
      { name: 'direction', type: 'select', label: 'Direction', options: ['vertical', 'horizontal'] },
      { name: 'bg', type: 'select', label: 'Background', options: ['white', 'gray-50', 'gray-100', 'blue-50', 'green-50'] },
      { name: 'border', type: 'checkbox', label: 'Show Border' },
      { name: 'rounded', type: 'select', label: 'Border Radius', options: ['none', 'sm', 'md', 'lg'] }
    ]
  },
  Checkbox: {
    category: 'Form',
    defaultProps: { label: 'Checkbox', checked: false },
    properties: [
      { name: 'label', type: 'text', label: 'Label' },
      { name: 'checked', type: 'checkbox', label: 'Checked by Default' }
    ]
  },
  Select: {
    category: 'Form',
    defaultProps: { label: 'Select', options: 'Option 1,Option 2,Option 3', width: 'full' },
    properties: [
      { name: 'label', type: 'text', label: 'Label' },
      { name: 'options', type: 'text', label: 'Options (comma-separated)' },
      { name: 'width', type: 'select', label: 'Width', options: ['full', 'half', 'third'] }
    ]
  },
  Card: {
    category: 'Layout',
    defaultProps: { title: 'Card Title', content: 'Card content goes here', padding: 'md', shadow: 'md' },
    properties: [
      { name: 'title', type: 'text', label: 'Title' },
      { name: 'content', type: 'textarea', label: 'Content' },
      { name: 'padding', type: 'select', label: 'Padding', options: ['sm', 'md', 'lg'] },
      { name: 'shadow', type: 'select', label: 'Shadow', options: ['none', 'sm', 'md', 'lg'] }
    ]
  },
  Image: {
    category: 'Media',
    defaultProps: { src: 'https://via.placeholder.com/400x300', alt: 'Image', width: 'full', rounded: 'md' },
    properties: [
      { name: 'src', type: 'text', label: 'Image URL' },
      { name: 'alt', type: 'text', label: 'Alt Text' },
      { name: 'width', type: 'select', label: 'Width', options: ['full', 'half', 'third', 'quarter'] },
      { name: 'rounded', type: 'select', label: 'Border Radius', options: ['none', 'sm', 'md', 'lg', 'full'] }
    ]
  },
  Badge: {
    category: 'Content',
    defaultProps: { text: 'Badge', color: 'blue', size: 'md' },
    properties: [
      { name: 'text', type: 'text', label: 'Text' },
      { name: 'color', type: 'select', label: 'Color', options: ['blue', 'green', 'red', 'yellow', 'gray'] },
      { name: 'size', type: 'select', label: 'Size', options: ['sm', 'md', 'lg'] }
    ]
  },
  Divider: {
    category: 'Layout',
    defaultProps: { style: 'solid', color: 'gray-300', spacing: 'md' },
    properties: [
      { name: 'style', type: 'select', label: 'Style', options: ['solid', 'dashed', 'dotted'] },
      { name: 'color', type: 'select', label: 'Color', options: ['gray-200', 'gray-300', 'gray-400', 'blue-300', 'green-300'] },
      { name: 'spacing', type: 'select', label: 'Spacing', options: ['sm', 'md', 'lg'] }
    ]
  }
};

// ===== COMPONENT CODE TEMPLATES =====
const componentCodeTemplates = {
  Button: (props = {}) => {
    const { text = 'Button', color = 'blue', size = 'md', width = 'auto', rounded = 'md' } = props;
    const sizeClasses = { sm: 'px-3 py-1 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' };
    const colorClasses = {
      blue: 'bg-blue-500 hover:bg-blue-600',
      green: 'bg-green-500 hover:bg-green-600',
      red: 'bg-red-500 hover:bg-red-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      gray: 'bg-gray-500 hover:bg-gray-600'
    };
    const widthClasses = { auto: 'w-auto', full: 'w-full', half: 'w-1/2' };
    const roundedClasses = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded', lg: 'rounded-lg', full: 'rounded-full' };
    
    return `import React from 'react';

const Button = ({ text = '${text}', color = '${color}', size = '${size}', width = '${width}', rounded = '${rounded}' }) => {
  const sizeClasses = { sm: 'px-3 py-1 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' };
  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    green: 'bg-green-500 hover:bg-green-600',
    red: 'bg-red-500 hover:bg-red-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    gray: 'bg-gray-500 hover:bg-gray-600'
  };
  const widthClasses = { auto: 'w-auto', full: 'w-full', half: 'w-1/2' };
  const roundedClasses = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded', lg: 'rounded-lg', full: 'rounded-full' };
  
  return (
    <button className={\`\${colorClasses[color]} \${sizeClasses[size]} \${widthClasses[width]} \${roundedClasses[rounded]} text-white font-medium transition-colors\`}>
      {text}
    </button>
  );
};

export default Button;`;
  },

  Input: (props = {}) => {
    const { label = 'Input Field', placeholder = 'Enter text...', width = 'full', required = false } = props;
    const widthClasses = { full: 'w-full', half: 'w-1/2', third: 'w-1/3' };
    
    return `import React from 'react';

const Input = ({ label = '${label}', placeholder = '${placeholder}', width = '${width}', required = ${required} }) => {
  const widthClasses = { full: 'w-full', half: 'w-1/2', third: 'w-1/3' };
  
  return (
    <div className={widthClasses[width]}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type="text" 
        placeholder={placeholder} 
        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
      />
    </div>
  );
};

export default Input;`;
  },

  Text: (props = {}) => {
    const { content = 'Text Block', size = 'base', weight = 'normal', align = 'left', color = 'gray-800' } = props;
    const sizeClasses = { xs: 'text-xs', sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl', '3xl': 'text-3xl' };
    const weightClasses = { normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold' };
    const alignClasses = { left: 'text-left', center: 'text-center', right: 'text-right', justify: 'text-justify' };
    
    return `import React from 'react';

const Text = ({ content = '${content}', size = '${size}', weight = '${weight}', align = '${align}', color = '${color}' }) => {
  const sizeClasses = { xs: 'text-xs', sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl', '3xl': 'text-3xl' };
  const weightClasses = { normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold' };
  const alignClasses = { left: 'text-left', center: 'text-center', right: 'text-right', justify: 'text-justify' };
  
  return (
    <p className={\`\${sizeClasses[size]} \${weightClasses[weight]} \${alignClasses[align]} text-\${color}\`}>
      {content}
    </p>
  );
};

export default Text;`;
  },

  Container: (props = {}) => {
    const { padding = 'md', gap = 'md', direction = 'vertical', bg = 'gray-50', border = true, rounded = 'md' } = props;
    const paddingClasses = { none: 'p-0', sm: 'p-2', md: 'p-4', lg: 'p-6', xl: 'p-8' };
    const gapClasses = { none: 'gap-0', sm: 'gap-2', md: 'gap-4', lg: 'gap-6' };
    const directionClasses = { vertical: 'flex-col', horizontal: 'flex-row' };
    const roundedClasses = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded', lg: 'rounded-lg' };
    
    return `import React from 'react';

const Container = ({ children, padding = '${padding}', gap = '${gap}', direction = '${direction}', bg = '${bg}', border = ${border}, rounded = '${rounded}' }) => {
  const paddingClasses = { none: 'p-0', sm: 'p-2', md: 'p-4', lg: 'p-6', xl: 'p-8' };
  const gapClasses = { none: 'gap-0', sm: 'gap-2', md: 'gap-4', lg: 'gap-6' };
  const directionClasses = { vertical: 'flex-col', horizontal: 'flex-row' };
  const roundedClasses = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded', lg: 'rounded-lg' };
  
  return (
    <div className={\`flex \${directionClasses[direction]} \${paddingClasses[padding]} \${gapClasses[gap]} \${roundedClasses[rounded]} bg-\${bg} \${border ? 'border-2 border-dashed border-gray-300' : ''}\`}>
      {children || <span className="text-gray-400 text-sm">Empty Container (Drop components here)</span>}
    </div>
  );
};

export default Container;`;
  },

  Checkbox: (props = {}) => {
    const { label = 'Checkbox', checked = false } = props;
    
    return `import React from 'react';

const Checkbox = ({ label = '${label}', checked = ${checked} }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input 
        type="checkbox" 
        checked={checked} 
        readOnly 
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;`;
  },

  Select: (props = {}) => {
    const { label = 'Select', options = 'Option 1,Option 2,Option 3', width = 'full' } = props;
    const widthClasses = { full: 'w-full', half: 'w-1/2', third: 'w-1/3' };
    
    return `import React from 'react';

const Select = ({ label = '${label}', options = '${options}', width = '${width}' }) => {
  const widthClasses = { full: 'w-full', half: 'w-1/2', third: 'w-1/3' };
  const opts = options.split(',');
  
  return (
    <div className={widthClasses[width]}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
        {opts.map((opt, i) => (
          <option key={i}>{opt.trim()}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;`;
  },

  Card: (props = {}) => {
    const { title = 'Card Title', content = 'Card content goes here', padding = 'md', shadow = 'md' } = props;
    const paddingClasses = { sm: 'p-3', md: 'p-4', lg: 'p-6' };
    const shadowClasses = { none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg' };
    
    return `import React from 'react';

const Card = ({ title = '${title}', content = '${content}', padding = '${padding}', shadow = '${shadow}' }) => {
  const paddingClasses = { sm: 'p-3', md: 'p-4', lg: 'p-6' };
  const shadowClasses = { none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg' };
  
  return (
    <div className={\`bg-white \${paddingClasses[padding]} \${shadowClasses[shadow]} rounded-lg border border-gray-200\`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;`;
  },

  Image: (props = {}) => {
    const { src = 'https://via.placeholder.com/400x300', alt = 'Image', width = 'full', rounded = 'md' } = props;
    const widthClasses = { full: 'w-full', half: 'w-1/2', third: 'w-1/3', quarter: 'w-1/4' };
    const roundedClasses = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded', lg: 'rounded-lg', full: 'rounded-full' };
    
    return `import React from 'react';

const Image = ({ src = '${src}', alt = '${alt}', width = '${width}', rounded = '${rounded}' }) => {
  const widthClasses = { full: 'w-full', half: 'w-1/2', third: 'w-1/3', quarter: 'w-1/4' };
  const roundedClasses = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded', lg: 'rounded-lg', full: 'rounded-full' };
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={\`\${widthClasses[width]} \${roundedClasses[rounded]} object-cover\`} 
    />
  );
};

export default Image;`;
  },

  Badge: (props = {}) => {
    const { text = 'Badge', color = 'blue', size = 'md' } = props;
    const colorClasses = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      red: 'bg-red-100 text-red-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      gray: 'bg-gray-100 text-gray-800'
    };
    const sizeClasses = { sm: 'px-2 py-0.5 text-xs', md: 'px-2.5 py-0.5 text-sm', lg: 'px-3 py-1 text-base' };
    
    return `import React from 'react';

const Badge = ({ text = '${text}', color = '${color}', size = '${size}' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    gray: 'bg-gray-100 text-gray-800'
  };
  const sizeClasses = { sm: 'px-2 py-0.5 text-xs', md: 'px-2.5 py-0.5 text-sm', lg: 'px-3 py-1 text-base' };
  
  return (
    <span className={\`inline-flex items-center \${colorClasses[color]} \${sizeClasses[size]} font-medium rounded-full\`}>
      {text}
    </span>
  );
};

export default Badge;`;
  },

  Divider: (props = {}) => {
    const { style = 'solid', color = 'gray-300', spacing = 'md' } = props;
    const spacingClasses = { sm: 'my-2', md: 'my-4', lg: 'my-6' };
    const styleClasses = { solid: 'border-solid', dashed: 'border-dashed', dotted: 'border-dotted' };
    
    return `import React from 'react';

const Divider = ({ style = '${style}', color = '${color}', spacing = '${spacing}' }) => {
  const spacingClasses = { sm: 'my-2', md: 'my-4', lg: 'my-6' };
  const styleClasses = { solid: 'border-solid', dashed: 'border-dashed', dotted: 'border-dotted' };
  
  return (
    <hr className={\`border-\${color} \${styleClasses[style]} \${spacingClasses[spacing]}\`} />
  );
};

export default Divider;`;
  }
};

// ===== CODE GENERATION (Enhanced) =====
const generateCode = (components, format = 'jsx') => {
  const componentCode = components.map(comp => {
    const props = Object.entries(comp.props)
      .map(([key, value]) => {
        if (typeof value === 'boolean') return value ? key : '';
        if (typeof value === 'string') return `${key}="${value}"`;
        return `${key}={${JSON.stringify(value)}}`;
      })
      .filter(Boolean)
      .join(' ');
    
    return `  <${comp.type} ${props} />`;
  }).join('\n');

  if (format === 'typescript') {
    return `import React from 'react';

interface GeneratedUIProps {}

const GeneratedUI: React.FC<GeneratedUIProps> = () => {
  return (
    <div className="p-8 space-y-4">
${componentCode}
    </div>
  );
};

export default GeneratedUI;`;
  }

  return `import React from 'react';

const GeneratedUI = () => {
  return (
    <div className="p-8 space-y-4">
${componentCode}
    </div>
  );
};

export default GeneratedUI;`;
};

// ===== MAIN APP =====
export default function LowCodeBuilder() {
  const [canvasComponents, setCanvasComponents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [draggedType, setDraggedType] = useState(null);
  const [showCode, setShowCode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [deviceMode, setDeviceMode] = useState('desktop');
  const [history, setHistory] = useState([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [showLayersPanel, setShowLayersPanel] = useState(false);
  const [codeFormat, setCodeFormat] = useState('jsx');
  const [savedProjects, setSavedProjects] = useState([]);
  const [showLoadDialog, setShowLoadDialog] = useState(false);
  const [showComponentCode, setShowComponentCode] = useState(false);
  const [selectedComponentType, setSelectedComponentType] = useState(null);

  const selectedComponent = canvasComponents.find(c => c.id === selectedId);

  // Undo/Redo functionality
  const saveToHistory = useCallback((newComponents) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newComponents);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setCanvasComponents(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setCanvasComponents(history[historyIndex + 1]);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault();
        redo();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveProject();
      }
      if (e.key === 'Delete' && selectedId) {
        deleteComponent(selectedId);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, historyIndex, history]);

  const handleDragStart = (type) => {
    setDraggedType(type);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedType) {
      const newComponent = {
        id: `${draggedType.toLowerCase()}-${Date.now()}`,
        type: draggedType,
        props: { ...componentMetadata[draggedType].defaultProps }
      };
      const newComponents = [...canvasComponents, newComponent];
      setCanvasComponents(newComponents);
      saveToHistory(newComponents);
      setDraggedType(null);
    }
  };

  const handlePropChange = (propName, value) => {
    const newComponents = canvasComponents.map(comp =>
      comp.id === selectedId
        ? { ...comp, props: { ...comp.props, [propName]: value } }
        : comp
    );
    setCanvasComponents(newComponents);
    saveToHistory(newComponents);
  };

  const deleteComponent = (id) => {
    const newComponents = canvasComponents.filter(c => c.id !== id);
    setCanvasComponents(newComponents);
    saveToHistory(newComponents);
    if (selectedId === id) setSelectedId(null);
  };

  const duplicateComponent = (id) => {
    const comp = canvasComponents.find(c => c.id === id);
    if (comp) {
      const newComp = { ...comp, id: `${comp.type.toLowerCase()}-${Date.now()}` };
      const newComponents = [...canvasComponents, newComp];
      setCanvasComponents(newComponents);
      saveToHistory(newComponents);
    }
  };

  const copyCode = () => {
    const code = generateCode(canvasComponents, codeFormat);
    navigator.clipboard.writeText(code);
  };

  const copyComponentCode = (componentType) => {
    const code = componentCodeTemplates[componentType](componentMetadata[componentType].defaultProps);
    navigator.clipboard.writeText(code);
  };

  const showComponentCodeModal = (componentType) => {
    setSelectedComponentType(componentType);
    setShowComponentCode(true);
  };

  const saveProject = () => {
    const projectName = prompt('Enter project name:');
    if (projectName) {
      const project = {
        name: projectName,
        components: canvasComponents,
        date: new Date().toISOString()
      };
      const projects = [...savedProjects, project];
      setSavedProjects(projects);
      alert('Project saved successfully!');
    }
  };

  const loadProject = (project) => {
    setCanvasComponents(project.components);
    saveToHistory(project.components);
    setShowLoadDialog(false);
  };

  const filteredComponents = Object.keys(ComponentLibrary).filter(type =>
    type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedComponents = filteredComponents.reduce((acc, type) => {
    const category = componentMetadata[type].category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(type);
    return acc;
  }, {});

  const deviceWidths = {
    desktop: 'max-w-full',
    tablet: 'max-w-3xl',
    mobile: 'max-w-sm'
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Component Palette */}
      <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Plus size={20} />
            Components
          </h2>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>
        
        <div className="p-4">
          {Object.entries(groupedComponents).map(([category, types]) => (
            <div key={category} className="mb-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">{category}</h3>
              <div className="space-y-2">
                {types.map(type => (
                  <div
                    key={type}
                    className="p-3 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div
                        draggable
                        onDragStart={() => handleDragStart(type)}
                        className="flex-1 cursor-move"
                      >
                        <div className="font-medium text-blue-900 text-sm">{type}</div>
                      </div>
                      <button
                        onClick={() => showComponentCodeModal(type)}
                        className="ml-2 p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-200 rounded transition-colors"
                        title="View Component Code"
                      >
                        <Code size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 p-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button
                onClick={undo}
                disabled={historyIndex === 0}
                className={`p-2 rounded hover:bg-gray-100 ${historyIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Undo (Ctrl+Z)"
              >
                <Undo size={20} />
              </button>
              <button
                onClick={redo}
                disabled={historyIndex === history.length - 1}
                className={`p-2 rounded hover:bg-gray-100 ${historyIndex === history.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Redo (Ctrl+Y)"
              >
                <Redo size={20} />
              </button>
              <div className="w-px bg-gray-300 mx-2"></div>
              <button onClick={saveProject} className="p-2 rounded hover:bg-gray-100" title="Save (Ctrl+S)">
                <Save size={20} />
              </button>
              <button onClick={() => setShowLoadDialog(true)} className="p-2 rounded hover:bg-gray-100" title="Load Project">
                <FolderOpen size={20} />
              </button>
              <div className="w-px bg-gray-300 mx-2"></div>
              <button onClick={() => setShowLayersPanel(!showLayersPanel)} className="p-2 rounded hover:bg-gray-100" title="Layers">
                <Layers size={20} />
              </button>
            </div>

            <div className="flex gap-2 items-center">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-2 rounded ${deviceMode === 'desktop' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                title="Desktop View"
              >
                <Monitor size={20} />
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`p-2 rounded ${deviceMode === 'tablet' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                title="Tablet View"
              >
                <Tablet size={20} />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-2 rounded ${deviceMode === 'mobile' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                title="Mobile View"
              >
                <Smartphone size={20} />
              </button>
              <div className="w-px bg-gray-300 mx-2"></div>
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className={`px-3 py-2 rounded flex items-center gap-2 ${previewMode ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {previewMode ? <EyeOff size={16} /> : <Eye size={16} />}
                {previewMode ? 'Edit' : 'Preview'}
              </button>
              <button
                onClick={() => setShowCode(true)}
                className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-2"
              >
                <Copy size={16} />
                Export
              </button>
            </div>
          </div>
        </div>
        
        {/* Canvas Area */}
        <div className="flex-1 p-8 overflow-y-auto bg-gray-100">
          <div
            className={`${deviceWidths[deviceMode]} mx-auto bg-white shadow-lg transition-all duration-300`}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {canvasComponents.length === 0 ? (
              <div className="h-96 flex items-center justify-center border-4 border-dashed border-gray-300 rounded-lg m-4">
                <div className="text-center text-gray-400">
                  <Plus size={48} className="mx-auto mb-2" />
                  <p className="text-lg">Drag components here to start building</p>
                  <p className="text-sm mt-1">Use Ctrl+Z/Ctrl+Y to undo/redo</p>
                </div>
              </div>
            ) : (
              <div className="p-8 space-y-4">
                {canvasComponents.map(comp => {
                  const Component = ComponentLibrary[comp.type];
                  return (
                    <div
                      key={comp.id}
                      onClick={() => !previewMode && setSelectedId(comp.id)}
                      className={`relative ${!previewMode ? 'group cursor-pointer' : ''} ${selectedId === comp.id && !previewMode ? 'ring-2 ring-blue-500 rounded' : ''}`}
                    >
                      <Component {...comp.props} />
                      {!previewMode && (
                        <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              duplicateComponent(comp.id);
                            }}
                            className="p-1 bg-blue-500 text-white text-xs rounded-bl"
                            title="Duplicate"
                          >
                            <Copy size={14} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteComponent(comp.id);
                            }}
                            className="p-1 bg-red-500 text-white rounded-bl"
                            title="Delete (Del)"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Properties Panel */}
      {!previewMode && (
        <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Settings size={20} />
              Properties
            </h2>
          </div>
          
          <div className="p-4">
            {selectedComponent ? (
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                  <div className="font-medium text-blue-900">{selectedComponent.type}</div>
                  <div className="text-xs text-blue-600 mt-1">ID: {selectedComponent.id}</div>
                </div>
                
                {componentMetadata[selectedComponent.type].properties.map(prop => (
                  <div key={prop.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {prop.label}
                    </label>
                    {prop.type === 'text' && (
                      <input
                        type="text"
                        value={selectedComponent.props[prop.name] || ''}
                        onChange={(e) => handlePropChange(prop.name, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                    {prop.type === 'textarea' && (
                      <textarea
                        value={selectedComponent.props[prop.name] || ''}
                        onChange={(e) => handlePropChange(prop.name, e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                    {prop.type === 'select' && (
                      <select
                        value={selectedComponent.props[prop.name]}
                        onChange={(e) => handlePropChange(prop.name, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      >
                        {prop.options.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    )}
                    {prop.type === 'checkbox' && (
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedComponent.props[prop.name] || false}
                          onChange={(e) => handlePropChange(prop.name, e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Enable</span>
                      </label>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <button
                    onClick={() => duplicateComponent(selectedId)}
                    className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center gap-2"
                  >
                    <Copy size={16} />
                    Duplicate Component
                  </button>
                  <button
                    onClick={() => deleteComponent(selectedId)}
                    className="w-full px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center gap-2"
                  >
                    <Trash2 size={16} />
                    Delete Component
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-gray-400 text-center mt-8">
                <Settings size={48} className="mx-auto mb-2 opacity-50" />
                <p>Select a component to edit its properties</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Layers Panel (Floating) */}
      {showLayersPanel && (
        <div className="fixed right-4 top-20 w-64 bg-white border border-gray-300 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          <div className="p-3 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 className="font-semibold flex items-center gap-2">
              <Layers size={16} />
              Layers
            </h3>
            <button onClick={() => setShowLayersPanel(false)} className="p-1 hover:bg-gray-200 rounded">
              <X size={16} />
            </button>
          </div>
          <div className="p-2">
            {canvasComponents.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">No components yet</p>
            ) : (
              <div className="space-y-1">
                {canvasComponents.map((comp, index) => (
                  <div
                    key={comp.id}
                    onClick={() => setSelectedId(comp.id)}
                    className={`p-2 rounded flex items-center justify-between cursor-pointer ${
                      selectedId === comp.id ? 'bg-blue-50 border border-blue-300' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Move size={14} className="text-gray-400" />
                      <span className="text-sm font-medium">{comp.type}</span>
                    </div>
                    <span className="text-xs text-gray-400">#{index + 1}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Code Export Modal */}
      {showCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[85vh] flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-bold">Export Code</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCodeFormat('jsx')}
                    className={`px-3 py-1 text-sm rounded ${
                      codeFormat === 'jsx' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    JSX
                  </button>
                  <button
                    onClick={() => setCodeFormat('typescript')}
                    className={`px-3 py-1 text-sm rounded ${
                      codeFormat === 'typescript' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    TypeScript
                  </button>
                </div>
              </div>
              <button
                onClick={() => setShowCode(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto font-mono">
                {generateCode(canvasComponents, codeFormat)}
              </pre>
            </div>
            <div className="p-4 border-t border-gray-200 flex gap-2">
              <button
                onClick={copyCode}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center gap-2"
              >
                <Copy size={16} />
                Copy to Clipboard
              </button>
              <button
                onClick={() => setShowCode(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Component Code Modal */}
      {showComponentCode && selectedComponentType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[85vh] flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-bold">Component Code: {selectedComponentType}</h3>
                <div className="text-sm text-gray-500">
                  Copy this code to use the {selectedComponentType} component in your React project
                </div>
              </div>
              <button
                onClick={() => setShowComponentCode(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto font-mono">
                {componentCodeTemplates[selectedComponentType](componentMetadata[selectedComponentType].defaultProps)}
              </pre>
            </div>
            <div className="p-4 border-t border-gray-200 flex gap-2">
              <button
                onClick={() => copyComponentCode(selectedComponentType)}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center gap-2"
              >
                <Copy size={16} />
                Copy Component Code
              </button>
              <button
                onClick={() => setShowComponentCode(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Load Project Dialog */}
      {showLoadDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[70vh] flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-bold">Load Project</h3>
              <button
                onClick={() => setShowLoadDialog(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {savedProjects.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                  <FolderOpen size={48} className="mx-auto mb-2 opacity-50" />
                  <p>No saved projects yet</p>
                  <p className="text-sm mt-1">Save a project using Ctrl+S</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {savedProjects.map((project, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded hover:border-blue-500 cursor-pointer transition-colors"
                      onClick={() => loadProject(project)}
                    >
                      <div className="font-medium">{project.name}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {project.components.length} components • {new Date(project.date).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => setShowLoadDialog(false)}
                className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}