import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {Row, Col,Container} from  'react-bootstrap';

const fileTypes = ["PNG"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    uploadFile();
  };
function uploadFile(){
  const formData = new FormData();

  formData.append('file',file);
  fetch(
    'http://localhost:7000/upload-file',
    {
      method: 'POST',
      body: formData,
    }
  )
  .then((response) => response.json())  
	.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

}
  return (
    <Row className="mt-3"> 
    <Col className="d-flex justify-content-center">
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} maxSize={10} />
</Col>
</Row>
    
  );
}

export default DragDrop;