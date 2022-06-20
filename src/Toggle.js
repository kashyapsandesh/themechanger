import React from "react";

const Toggle = (props) => {
  return (
    <div className="toggle">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          onClick={props.onclick}
        />
      </div>
    </div>
  );
};

export default Toggle;
