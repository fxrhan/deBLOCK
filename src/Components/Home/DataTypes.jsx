import React from 'react'
import DataType from './DataType';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DataObjectIcon from '@mui/icons-material/DataObject';
export default function Problems() {
  return (
    <div className='pt-14 pb-6 flex flex-col'>
        <h1 class="text-3xl text-center text-color tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ">
            Formats We Support
        </h1>
        <div className='flex justify-center mt-10 gap-x-5 items-center pb-12'>
            <DataType heading={"Image"} icon={<ImageIcon/>}></DataType>
            <DataType heading={"Video"} icon={<OndemandVideoIcon/>}></DataType>
            <DataType heading={"Files"} icon={<InsertDriveFileIcon/>}></DataType>
            <DataType heading={"JSON"} icon={<DataObjectIcon/>}></DataType>
        </div>
    </div>
  )
}
