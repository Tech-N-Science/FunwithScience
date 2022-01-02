import { useState } from "react";
import { Toast } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Form() {
	const [inputs, setInputs] = useState({});
	const [show, setShow] = useState(false);
	const sendEmail = process.env.REACT_APP_SEND_EMAIL;

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({ ...values, [name]: value }))
	}

	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
		if(inputs !== "") {
			setInputs("");
			setShow(true);
			
		
			
			fetch(`https://formsubmit.co/ajax/${sendEmail}`, {
				method: "POST",
				headers: { 
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					name: inputs.name,
					email: inputs.email,
					message: inputs.message
				})
			})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
		};
		
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="name">
				<div className="text">Name *</div>
				<input
					type="text"
					name="name"
					minLength="3"
					placeholder="Enter your Name"
					required
					value={inputs.name || ""}
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
			<div style={{display:"inline-block"}}>
				<button type="submit">Send</button>
			</div>
		</form>
	)
}

export default Form;

/*

      title="support@example.com" />
      title="support@example.com" />
        
*/