import React from 'react';
import PropTypes from 'prop-types';

const SingleInputActions = ({ label, inputValue = '', inputProps, onConfirm, onCancel }) => {
  const [localInputValue, setInputValue] = React.useState(inputValue);

  React.useEffect(() => {
    setInputValue(inputValue);
  }, [inputValue]);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <hr />
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            className="input"
            value={localInputValue}
            type="text"
            data-cy="single-input-actions-input"
            {...inputProps}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            data-cy="single-input-actions-confirm"
            onClick={() => {
              onConfirm(localInputValue);
              setInputValue('');
            }}
          >
            Confirm
          </button>
        </div>
        <div className="control">
          <button
            className="button is-text"
            data-cy="single-input-actions-cancel"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

SingleInputActions.propTypes = {
  label: PropTypes.string,
  inputValue: PropTypes.string,
  inputProps: PropTypes.object,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

export default SingleInputActions;
