import React from 'react'
import FeatureBox from './FeatureBox';
import SecurityIcon from '@mui/icons-material/Security';
import LanIcon from '@mui/icons-material/Lan';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
export default function Features() {
  return (
    <div className='flex flex-col'>
        <h1 class="text-3xl bg-primary-light pt-3 text-center text-white tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ">
            
        </h1>
        <div className='h-80 bg-primary-light  justify-center items-center flex gap-x-3' style={{"height":"446px"}}>
        <FeatureBox heading={"Decentralized"} icon={<LanIcon/>} des={"We distribute the data over multiple peers"}></FeatureBox>
        <FeatureBox heading={"Security"} icon={<SecurityIcon/>} des={"This system prevents data breaches and provides transport encryption"}></FeatureBox>
        <FeatureBox heading={"Availability"} icon={<CheckCircleIcon/>} des={"Retrieve a file from someone nearby instead of hundreds or thousands of miles away"} ></FeatureBox>
        <FeatureBox heading={"Containerized"} icon={<ElectricBoltIcon/>} des={"Improved security and faster delivery of your data"}></FeatureBox>

        </div>
    </div>
  )
}
