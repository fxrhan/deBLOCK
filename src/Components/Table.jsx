import  {React,useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import TableSortLabel from '@mui/material/TableSortLabel';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Modal from './Modal';




export default function BasicTable(props) {
    const [isAsc,setIsAsc]=useState(true);
    const [open, setOpen] = useState(false);
    const [currentCid,setCurrentCid]=useState();
    useEffect(()=>{
      console.log(props.uploads);
    })
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const sortAsc=(upload1,upload2)=>{
      if(upload1.date>upload2.date) return 1;
      else if(upload1.date<upload2.date) return -1;
      else return 0;
    }

    const sortDesc=(upload1,upload2)=>{
      if(upload1.date<upload2.date) return 1;
      else if(upload1.date>upload2.date) return -1;
      else return 0;
    }

    const sort=()=>{
      const uploads=JSON.parse(localStorage.getItem('uploads')).reverse();
      localStorage.setItem('uploads',JSON.stringify(uploads));
      return uploads;
    }
  return (
    <TableContainer component={Paper} id="table">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date {isAsc?<ArrowUpwardIcon onClick={()=>{
              setIsAsc(prev=>{
                props.setUploads(uploads=>{
                  return sort(uploads);
                });
                return false;
              })
               
            }}/>:<ArrowDownwardIcon onClick={()=>{
              setIsAsc(prev=>{
                props.setUploads(sort());
                return true;
              })
               
            }}/>}</TableCell>
           
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">CID&nbsp;</TableCell>
            <TableCell align="left">URL&nbsp;</TableCell>
            <TableCell align="left">Info&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.uploads.map((upload,index) => (
            <TableRow
              key={upload.cid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="left">{upload.date}</TableCell>
              <TableCell align="left">{upload.name}</TableCell>
              <TableCell align="left">{upload.cid}</TableCell>
              <TableCell align="left"><a href={upload.cidurl} target="_blank"><Button variant="contained">URL</Button></a></TableCell>
              <TableCell align="left"><Button variant="contained" onClick={()=>{
                setCurrentCid(upload.cid);
                handleOpen();
              }}>Info</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal open={open} handleClose={handleClose} cid={currentCid}></Modal>
    </TableContainer>
  );
}