import React, { useState,useEffect } from "react";
import "./Editorial.css";
import { editorialData } from "./EditorialData";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Navbar from "./../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
const Editorial = () => {
    var { id, type } = useParams();
    id = parseInt(id);
  const [editorial, setEditorial] = 
  useState(editorialData.filter((val) => val.id === id));
  const editorialContent = editorial.content;

    return (  );
}
 
export default Editorial;