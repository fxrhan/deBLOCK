import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import InfoField from "./InfoField";
import SaveIcon from "@mui/icons-material/Save";
import UploadIcon from "@mui/icons-material/Upload";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LanIcon from '@mui/icons-material/Lan';

export default function InfoModal(props) {
  const { handleClose, cid } = props;
  const [data, setData] = useState();
  useEffect(() => {
    fetchInfo(cid);
  }, []);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgzYjczNDg1MTQxZjE3MDM0OEEwZUE5NDJFNDRDNTMwNTU5RTA0NTEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MDk0NzkyNDMzMiwibmFtZSI6InRlc3QifQ.jUIB_PBxUGBMNK9QsAgtK0n8g8er30smtmP_brpc5zU"; // your API key from https://nft.storage/manage
  const fetchInfo = async (cid) => {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    });

    //fetches info of the upload using the cid
    fetch("https://api.nft.storage/" + cid + "/", {
      method: "GET",
      headers: myHeaders,
    })
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json.value.pin);
        console.log(json.value)
        setData({...json.value.pin,peers:json.value.deals.length});
      });
  };
  return (
    <div className="relative p-4 w-full max-w-md h-full md:h-auto m-auto">
      <div className="relative bg-white rounded-lg shadow  flex flex-col items-center" style={data && data.status==="pinned"?{"height":"20rem"}:{"height":"17rem"}}>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white mr-3 mt-3.5"
          onClick={handleClose}
          
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex">
          {data ? (
            <div>
              <InfoField
                heading={"Created At"}
                value={data.created}
                icon={<CalendarMonthIcon />}
              />
              <InfoField
                heading={"Size"}
                value={data.size}
                icon={<SaveIcon />}
              />
              <InfoField
                heading={"Status"}
                value={data.status}
                icon={data.status==="pinned"?<CheckCircleIcon/>:<AccessTimeIcon />}
              />
              {data.status==="pinned"?<InfoField
                heading={"Peers"}
                value={data.peers}
                icon={<LanIcon />}
              />:null}
            </div>
          ) : (
            <div className="flex flex-col  items-center h-screen">
      <CircularProgress/>
      <p>Getting File Info</p>
      </div>
          )}
        </div>
      </div>
    </div>
  );
}
