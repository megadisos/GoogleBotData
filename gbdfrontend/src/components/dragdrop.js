import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {Row, Col,Container} from  'react-bootstrap';

const fileTypes = ["PNG"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    console.log(file);
  };
  return (
    <Row className="mt-3"> 
    <Col className="d-flex justify-content-center">
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} maxSize={10} />
</Col>
</Row>
    
  );
}

export default DragDrop;