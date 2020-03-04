import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import './HolaMundo.css';

class HolaMundo extends React.Component{
  render(){
    return(
      <div>
        <h2>Hola { this.props.nombre }</h2>
        <p>{ this.props.edad }</p>

        <Button variant="contained" color="secondary"> Enviar </Button>

        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>

        <p className={ this.props.tipo }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada eu odio id porta. Duis quis dolor id risus egestas ultrices ut ut mi. Vivamus ac ultricies mauris, eu malesuada magna. Etiam in risus condimentum, malesuada leo ac, elementum sem. Donec a turpis ultrices, convallis odio sit amet, suscipit ipsum. Donec feugiat arcu ac tellus convallis tempus. Etiam non eros ac orci pharetra dictum. Aenean vulputate tortor vitae diam tempor, eget sagittis risus venenatis. Donec in libero libero. Nam ultricies semper accumsan. Mauris congue nisi in lorem aliquam commodo.</p>
      </div>
    ) 
  }
}

export default HolaMundo;