import React, { useState } from "react"
import FileUpload from "react-mui-fileuploader"
import { Button } from "@mui/material";

function validateUploadContent(fileContent){
    return true;
}

export function UploadForm() {
  const [filesToUpload, setFilesToUpload] = useState([])

  const handleFilesChange = (files) => {
    // Update chosen files
    setFilesToUpload([ ...files ])
  };

  const uploadFiles = () => {
    // Create a form and post it to server
    let formData = new FormData()
    filesToUpload.forEach((file) => {

        formData.append("files", file);
        var reader = new FileReader();
        reader.onload = function() {
          var fileContent = JSON.parse(reader.result);
          console.log(fileContent)
          if(validateUploadContent(fileContent)){
            fileContent.forEach(listen_event => {
                console.log(listen_event)
              //do something with the uploaded results  
            })
          }
        };
        reader.readAsText(file); 
        
    })

    // fetch("/file/upload", {
    //   method: "POST",
    //   body: formData
    // })
  }

//     getBase64={false}
    // disabled={false}
    // title="My awesome file uploader"
    // header="[Drag to drop]"
    // leftLabel="or"
    // rightLabel="to select files"
    // buttonLabel="click here"
    // buttonRemoveLabel="Remove all"
    // maxFileSize={10}
    // maxUploadFiles={0}
    // maxFilesContainerHeight={357}
    // acceptedType={'image/*'}
    // errorSizeMessage={'fill it or remove it to use the default error message'}
    // allowedExtensions={['jpg', 'jpeg']}
    // onFilesChange={handleFilesChange}
    // onError={handleFileUploadError}
    // imageSrc={'path/to/custom/image'}
    // BannerProps={{ elevation: 0, variant: "outlined" }}
    // showPlaceholderImage={true}
    // PlaceholderGridProps={{ md: 4 }}
    // LabelsGridProps={{ md: 8 }}
    // onContextReady={context => {
  return (
    <div className="upload-form">
      <FileUpload
        title=""
        multiFile={true}
        onFilesChange={handleFilesChange}
        showPlaceholderImage={false}
        onContextReady={(context) => {}}
        rightLabel=""
        leftLabel=""
        buttonLabel="Upload File"
        allowedExtensions={['json']}
        header=""

      />
      <Button onClick={uploadFiles}>Submit</Button>
    </div>
  )
}