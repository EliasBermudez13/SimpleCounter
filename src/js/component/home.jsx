import React from "react";
import CountDown from "./countDown.jsx";
//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="text-center container justify-content-center"> 
			<div className="d-flex justify-content-center bg-black" style={{height:"150px"}}>
				<div className="bg-dark text-white m-2 me-3" style={{fontSize: "90px", width: "10%"}}><i className="far fa-clock">
				</i>
				</div>
				<div className="bg-dark text-white m-2 mx-3" style={{fontSize: "90px", width: "8%"}}>{props.hora2}</div>
				<div className="bg-dark text-white m-2 mx-3" style={{fontSize: "90px", width: "8%"}}>{props.hora1}</div>
				<div className="bg-dark text-white m-2 mx-3" style={{fontSize: "90px", width: "8%"}}>{props.minuto2}</div>
				<div className="bg-dark text-white m-2 mx-3" style={{fontSize: "90px", width: "8%"}}>{props.minuto1}</div>
				<div className="bg-dark text-white m-2 mx-3" style={{fontSize: "90px", width: "8%"}}>{props.segundo2}</div>
				<div className="bg-dark text-white m-2 mx-3" style={{fontSize: "90px", width: "8%"}}>{props.segundo1}</div>
			</div>
			<CountDown/>
		</div>
	);
};

export default SecondsCounter;
