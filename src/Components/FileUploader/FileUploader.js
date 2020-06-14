import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import UserForm from '../UserForm/UserForm';
import {singleFileErrorMsg, nonTxtFileErrorMsg, supportedFileFormat, space, noDataErrorMsg, emptyString} from '../../Shared/Constants';
import './FileUploader.css';

function FileUploader() {
  const [fileText, setFileText] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const onDrop = useCallback(acceptedFiles => {
    if(acceptedFiles.length > 1) {
      setErrorText(singleFileErrorMsg);
    } else if( acceptedFiles.some((file) => file.type !== supportedFileFormat)){
      setErrorText(nonTxtFileErrorMsg);
    } else {
      setErrorText(null);
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const textStr = reader.result;
          if(textStr === emptyString){
            setErrorText(noDataErrorMsg);
          } else {
            const inputLines = textStr.replace(/\n/g, space).split(space);
            setFileText(inputLines);
          }
        }
        reader.readAsText(file);
      });
    }
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  return (
    <>
      <div {...getRootProps()} className="fileUploader">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the file here ...</p> :
            <p>Drag 'n' drop file here, or click to select file</p>
        }
      </div>
      <br/>
      {errorText && <h3> Error: {errorText} </h3>}
      {fileText && errorText === null && <UserForm inputText={fileText}/>}
    </>
  )
}

export default FileUploader;