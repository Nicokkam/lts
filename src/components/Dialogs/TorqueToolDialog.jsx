import React from 'react'
import TorqueToolForm from "../Forms/TorqueToolForm/TorqueToolForm";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';

export default function TorqueToolDialog(props) {

  return (
    <div>
      <Dialog
        open={props.open}
      >
        <DialogTitle id="dialog-title">DETALHES</DialogTitle>
        <DialogContent>

          <TorqueToolForm equipType={props.equipType} hideButton />

        </DialogContent>
        <DialogActions>

          <Button onClick={() => props.handleDialog('close')} color="primary">
            FECHAR
          </Button>

          <Button onClick={() => props.handleDialog} color="primary">
            EXCLUIR
          </Button>

          <Button onClick={() => props.handleDialog} color="primary">
            ATUALIZAR
          </Button>

        </DialogActions>
      </Dialog>

    </div>
  )
}
