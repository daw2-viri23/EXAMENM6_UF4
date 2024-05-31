import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";

const Login = () => {


  return (
    <div className="container mt-5">
      <div className="pt-5">
        <h1 className="w-100 text-center">Login</h1>
        <form className="form p-4 border shadow bordered mt-5 mx-auto" style={{ width: '400px' }}>
          <label htmlFor="email" className="mt-2 form-label">User: </label>
          <Input
            type="text"
            className="form-control"
            placeholder="usuario@mail.com"
            name="email"

          />
  
          <label htmlFor="password" className="mt-2 form-label">Contraseña: </label>
          <Input
            type="password"
            className="form-control"
            name="password"
          />
  
          <Button className="mt-4 w-100 btn btn-primary">Entrar</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
