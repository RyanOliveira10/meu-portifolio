import React from "react";
import { Button } from "reactstrap";
import "../styles/homePage.scss";

function Home() {
  return (
    <div className="Home">
      <div className="container-fluid">
        <div className="header">
          <h1>Ryan Oliveira</h1>
          <p>Desenvolvedor de Software</p>
          <button
            className="sobre-mim"
            id="sobre-mim"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Conheça mais sobre mim
          </button>
          <div className="img">
            <img
              src="" alt="imagem de perfil" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
