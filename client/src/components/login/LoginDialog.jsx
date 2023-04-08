
import {Dialog,Box,TextField , Typography , Button} from '@mui/material';

const LoginDialog = ({open,setOpen })=>{

    const handleClose =() =>{
        setOpen (false);
    }

    return(
        <Dialog open={open} onClose={handleClose}>
            <Box>
                <Box>
                    
                </Box>

                 <Box>
                    <TextField  variant='standard' label= "Enter email/mobile number"/>
                    <TextField  variant='standard' label= "Enter Password"/>
                    <TextField> By continuing , you agree to Flipkart's terms of use and privacy policy</TextField>
                    <Button>Login</Button>
                    <Typography>OR</Typography>
                    <button>Request OTP</button>
                    <Typography>New to FLipkart? Create an account</Typography>
                </Box>   
            </Box>
        </Dialog>
    )

}

export default LoginDialog;