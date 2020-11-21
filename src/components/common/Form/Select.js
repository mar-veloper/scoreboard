import React from 'react';

const Select = React.forwardRef((props, ref) => {
  const { name, required = false, label, options, value, ...rest } = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        className="custom-select"
        id={name}
        ref={ref}
        {...rest}
        aria-describedby={name}
        required={required}
      >
        <option>{value}</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <div className="invalid-feedback">Please select a valid continent.</div>
    </div>
  );
});

export default Select;
