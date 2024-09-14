// import './App.css'

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

function App() {
  let handelClick = () => {
    console.log("Btn was Clicked....")
  }

  return (
    <>
      <div>
        <h2> Material UI Demo </h2>
        <Button variant="contained" onClick={handelClick} color='success'>Contained</Button>
        <Button variant="outlined" onClick={handelClick} disabled size='small' color='success'>Contained</Button>
        <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      {/* Sucess Warning info error */}
      <Alert severity="error">This is an error Alert.</Alert>   
      </div>

    </>
  )
}

export default App
