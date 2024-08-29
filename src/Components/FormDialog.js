import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Select, MenuItem, InputLabel,FormControl } from '@mui/material';


export default function FormDialog({fordata}) {
    const [open, setOpen] = React.useState(false);
    const [sort, setSort] = React.useState("");
    const[from,setFrom]=React.useState();
    const[to,setTo]=React.useState();
    const[topic,setTopic]=React.useState("");
    
    const e={
        from:from,
        to:to,
        sort:sort,
        topic:topic
    };


    

   

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        
        fordata(e);
        setOpen(false);
    };

    
    

    return (
        <div>
            
            <Button id='filterbutton' variant="contained" onClick={handleClickOpen}>
                filter
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Filter News</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    
                    <label>From</label>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="From"
                        type="date"
    
                        fullWidth
                        variant="filled"
                        required
                        onChange={(e)=>{setFrom(e.target.value);}}
                        
                    />
                    <label>To</label>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="To"
                        type="date"
                        fullWidth
                        variant="filled"
                        required
                        onChange={(e)=>{setTo(e.target.value);}}
                        
                    />
                    <label>Topic</label>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="text"
                        fullWidth
                        variant="filled"
                        required
                        onChange={(e)=>{setTopic(e.target.value);}}
                        
                    />
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={"publishedAt"}>Latest</MenuItem>
                        <MenuItem value={"popularity"}>Popularity</MenuItem>
                        <MenuItem value={"source"}>Source</MenuItem>
                    </Select></FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>submit</Button>
                </DialogActions>
                
            </Dialog>
        </div>
    );
}