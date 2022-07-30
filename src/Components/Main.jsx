import React, { useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";
import Table from "./Table";
import CircularProgress from "@mui/material/CircularProgress";
import {sdk} from '../services/appwriteConfig';
export default function Main() {
  const collectionId="626d20572f9fa4534862";
  const email=localStorage.getItem('email');
  const [docId,setDocId]=useState();
  
  const [uploads, setUploads] = useState();
  const [totalUploads, setTotalUploads] = useState(
    uploads
      ? uploads.length
      : 0
  );

  useEffect(()=>{
    sdk.database.listDocuments(collectionId).then(async response=>{
      console.log(response);
      const user=response.documents.find(data=>{
        return data.user_email===email
      });

      console.log(user);
      if(user){
        console.log("here")
        sdk.database.getDocument(collectionId, user.$id).then(data=>{
          console.log(data);
          setCidArr(data.cid);
          setCidUrlArr(data.cid_url)
          setDateArr(data.date)
          setName(data.name);
          const dataArray=changeFormat(data);
          setTotalUploads(dataArray.length)
          setUploads(dataArray);
          setDocId(user.$id);

        }).catch(err=>{

        })
      }
      else{
        console.log("Not found")
        const object={
          user_email:email,
          cid:[],
          name:[],
          date:[],
          cid_url:[]
        }
        sdk.database.createDocument(collectionId,"unique()",JSON.stringify(object)).then(async (data)=>{
          console.log(data);
          setUploads([]);
          setTotalUploads(0);
          setDocId(data.$id);
        }).catch(err=>{
          console.log(err);
        });

      }
    }).catch(err=>{
        
    })
    
  },[])

  const changeFormat=(details)=>{
    const {cid,name,date,cid_url}=details;
    const data=[];
    cid.forEach((element,index)=>{
      const object={
        cid:cid[index],
        name:name[index],
        date:date[index],
        cidurl:cid_url[index]
      }
      data.push(object);
    })
    console.log(data+">");
    return data;
  }

  useEffect(()=>{
    
  },[docId])
  
  const [cidArr,setCidArr]=useState([]);
  const [dateArr,setDateArr]=useState([]);
  const [cidUrlArr,setCidUrlArr]=useState([]);
  const [nameArr,setName]=useState([]);
  const createData = (name, date, cid, cidurl) => {
    console.log("i am in create");
    updateArray(setCidArr,cid);
    updateArray(setDateArr,date);
    updateArray(setCidUrlArr,cidurl);
    updateArray(setName,name);

    const object={
      user_email:email,
      cid:[...cidArr,cid],
      name:[...nameArr,name],
      date:[...dateArr,date],
      cid_url:[...cidUrlArr,cidurl]
    }
    console.log(object);
    const promise=sdk.database.updateDocument(collectionId, docId, object);

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
    setUploads((uploads) => {
      const newUploads = [...uploads];
      newUploads.push({ name, date, cid, cidurl });
      const object = { email: "", uploads: newUploads };
      localStorage.setItem("uploads", JSON.stringify(newUploads));
      console.log();
      return newUploads;
    });
  };

  const updateArray=(setFunc,newValue)=>{
    setFunc(prev=>{
      const newArray=[...prev];
      newArray.push(newValue);
      return newArray
    });
  }

  useEffect(() => {
    localStorage.setItem("uploads", JSON.stringify(uploads));
  }, [totalUploads, uploads]);
  return (uploads && totalUploads > uploads.length)  ? (
    <div className="flex flex-col justify-center items-center h-screen">
      <CircularProgress />
      <p>Uploading File</p>
    </div>
  ) : (
    <div className="flex flex-col items-center main">
      <ImageUpload
        createData={createData}
        setTotalUploads={setTotalUploads}
        multipleFiles={false}
      ></ImageUpload>
      <ImageUpload
        createData={createData}
        setTotalUploads={setTotalUploads}
        multipleFiles={true}
      ></ImageUpload>
      <Table uploads={uploads || []} setUploads={setUploads}></Table>
    </div>
  );
}
