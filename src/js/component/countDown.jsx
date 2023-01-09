import React from "react";

//create your first component
const CountDown = () => {
	return (
<div className="input-group mb-3">
  <button className="btn btn-outline-secondary" type="button" id="button-addon1">Currently NOT Working</button>
  <input id="appt-time" type="time" name="appt-time" step="2" className="form-control"  aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>
	);
};

export default CountDown;