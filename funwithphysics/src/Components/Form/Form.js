
import { useState } from "react";
import { Toast } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function Form() {
	const [inputs, setInputs] = useState({});
	const [show, setShow] = useState(false);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({ ...values, [name]: value }))
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(inputs);
		setInputs("")
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="name">
				<div className="text">Name *</div>
				<input
					type="text"
					name="username"
					minLength="3"
					placeholder="Enter your Name"
					required
					value={inputs.username || ""}
					onChange={handleChange}
				/>
			</div>
			<div className="email">
				<div className="text">Email *</div>
				<input
					type="email"
					name="email"
					placeholder="Enter your Email-id"
					required
					value={inputs.email || ""}
					onChange={handleChange}
				/>
			</div>
			<div className="msg">
				<div className="text">Message *</div>
				<textarea
					type="text"
					name="message"
					required
					rows="2"
					cols="25"
					minLength="5"
					placeholder="Enter your message!"
					value={inputs.message || ""}
					onChange={handleChange}
				/>
			</div>
			<Col xs={10}>
				<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
				<Toast.Body>Message sent successfully</Toast.Body>
				</Toast>
			</Col>
			<div className="btn">
				<button type="submit" onClick={() => setShow(true)}>Send</button>
			</div>
		</form>
	)
}

export default Form;