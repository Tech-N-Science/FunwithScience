import React from 'react';
import "./Faq.css";


export default function Faq2(props) {
    return (props.trigger) ? (
        <React.Fragment>
            <div className="popup">
                <div className="popup_inner">
                    <button className="close_btn" onClick={() => props.setTrigger(false)}>close</button>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    ) : "";
}
