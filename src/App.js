import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';


import styled from 'styled-components'

const Container = styled.section`
  width: vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ColumnBox = styled.form `
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div `
  display: flex;
  justify-content: center;
`;

class App extends Component {
  state = {
    email: '',
    password: '',
  }

  changeVal = (param, value) => {
    this.setState(() => ({
      [param]: value,
    }))
  }

  submit = () => {
    console.log(this.state.email);
    console.log(this.state.password);
    if(this.state.email==='' || this.state.password==='')
    {
      this.changeVal('open',true);
    }
  }

  render() {
    const { email, password, open } = this.state;
    return (
      <Container>
      <ColumnBox>
        <FormControl>
          <InputLabel htmlFor="email">email</InputLabel>
          <Input
            value={email}
            id="email"
            required
            onChange={({ target: { value }}) => { this.changeVal('email', value) }}
            type="email"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">contraseña</InputLabel>
          <Input
            id="password"
            value={password}
            required
            onChange={({ target: { value }}) => { this.changeVal('password', value) }}
            type="password"
          />
        </FormControl>
        <ButtonContainer>
          <Button variant="contained" onClick={this.submit}>
            Entrar
          </Button>
          <Snackbar
         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
         open={open}
         onClose={this.handleClose}
         ContentProps={{
           'aria-describedby': 'message-id',
         }}
         message={<span id="message-id">Faltan datos de acceso</span>}
       />
          <Button variant="contained">
            Registrar
          </Button>
        </ButtonContainer>
      </ColumnBox>
      </Container>
    );
  }
}

export default App;
