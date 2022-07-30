import React, { useEffect, useState, useRef } from "react";
import { Input, TextField, Button } from "@mui/material";
import {account} from "../services/appwriteConfig";

import { NFTStorage } from "https://cdn.jsdelivr.net/npm/nft.storage/dist/bundle.esm.min.js";
export default function ImageUpload(props) {
  const array = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  const { multipleFiles: multiple } = props;
  const [title, setTitle] = useState();
  const [file, setFile] = useState();
  const fileButton = useRef();
  useEffect(() => {
    console.log(file);
    console.log(multiple);
  }, [file]);
  const token =
    new URLSearchParams(window.location.search).get("key") ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgzYjczNDg1MTQxZjE3MDM0OEEwZUE5NDJFNDRDNTMwNTU5RTA0NTEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MDk0NzkyNDMzMiwibmFtZSI6InRlc3QifQ.jUIB_PBxUGBMNK9QsAgtK0n8g8er30smtmP_brpc5zU"; // your API key from https://nft.storage/manage
  const fetchInfo = async (ipnft) => {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    });

    //fetches info of the upload using the cid
    fetch("https://api.nft.storage/" + ipnft + "/", {
      method: "GET",
      headers: myHeaders,
    })
      .then((resp) => resp.json())
      .then((json) => {
        array.push(json.value);
        localStorage.setItem("data", JSON.stringify(array));
      });
  };

  //Construct date in dd/mm/yy format
  const getDate=()=>{
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const date = dd + '/' + mm + '/' + yyyy;
    return date;
  }

  //uploads both files and images using the cdn apis
  const upload = async () => {
    const storage = new NFTStorage({ token });
    if (!multiple) {
      try {
        props.setTotalUploads((totalUploads) => totalUploads + 1);
        const metadata = await storage.store({
          name: title,
          description:
            "Using the nft.storage metadata API to create ERC-1155 compatible metadata.",
          image: file[0],
        });
        console.log(metadata);
        const { ipnft } = metadata;
        const { name } = metadata.data;
        const { href } = metadata.embed().image;
        await fetchInfo(ipnft);
        console.log(name + " " + href + " " + ipnft);
        props.createData(name, getDate(), ipnft, href);
        console.log({ "IPFS URL for the metadata": metadata.url });
        console.log({ "metadata.json contents": metadata.data });

        console.log({
          "metadata.json contents with IPFS gateway URLs": metadata.embed(),
        });
        setTitle("");
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        props.setTotalUploads((totalUploads) => totalUploads + 1);
        const cid = await storage.storeDirectory(file);
        console.log({ files: Array.from(file).map((f) => f.name), cid });
        const status = await storage.status(cid);
        console.log('status',status);
        const cidUrl=`https://${cid}.ipfs.nftstorage.link/`
        props.createData(title,getDate(),cid,cidUrl);
        await fetchInfo(cid);
        console.log(status);
        setTitle();
      } catch (err) {
        console.log(err);
      }
    }
  };
  // const [image, setImage] = useState();


  

  return (
    <div className="mb-5 flex items-center">
      <TextField
        id="outlined-basic"
        label="File Name"
        variant="outlined"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          
        }}
        type="text"
        name="title"
        sx={{ marginRight: "12px" }}
      />
      <Button
      
        variant="contained"
        sx={{ marginRight: "12px",backgroundColor: "#126E82" }}
        onClick={() => {
          fileButton.current.click();
        }}
      >
        {multiple ? "Select Files" : "Select Image"}
      </Button>
      <input
        multiple={multiple}
        onChange={(e) => {
          setFile(e.target.files);
        }}
        type="file"
        name="file"
        id="file"
        class="inputfile"
        ref={fileButton}
        style={{ display: "none" }}
      />

      <Button variant="contained" onClick={upload} sx={{backgroundColor: "#126E82"}}>
        Upload
      </Button>
    </div>
  );
}
