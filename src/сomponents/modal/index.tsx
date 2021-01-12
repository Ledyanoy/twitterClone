import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import {Button, FormControl, FormGroup} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

interface PropsType  {
    handleClose: ()=> void
    open: boolean
}


const DialogContainer = ({handleClose, open}: PropsType) => {
    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="form-dialog-title">Войти в твиттер</DialogTitle>
            <CloseIcon onClick={handleClose} color="primary"/>
            <DialogContent>
                <FormControl component='fieldset' fullWidth={true}>
                    <FormGroup aria-label='position' row>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="password"
                            type="password"
                            fullWidth
                        />
                    </FormGroup>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' color='primary' fullWidth onClick={handleClose}>
                    Войти
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogContainer;

