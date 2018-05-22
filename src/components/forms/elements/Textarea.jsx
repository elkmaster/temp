import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/components/forms.css';

const Textarea = ({
  input,
  meta: { touched, error },
  ...rest
}) => (
  <div>
    <textarea {...input} {...rest} />
    <div className="input-invalid">
      {touched && error}
    </div>
  </div>
);

Textarea.propTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
};

export default Textarea;
