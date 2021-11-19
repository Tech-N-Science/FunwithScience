import React from 'react'
import './Calculator.css'
import Topics from "../topics_data"
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import '../Electromagnetism.css'
import electcifield_data from "../electricfield_data"
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet" 

const calculator = ({match}) => {
    const page=Topics.filter((data)=>data.topic===match.param.topic)
    const details=page[0]

    return (
    <>
    </>
    )
}

export default calculator
