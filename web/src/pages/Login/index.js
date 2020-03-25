import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import HeroesImg from "../../assets/heroes.png";
import LogoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <section className="form">
          <img src={LogoImg} alt="be the hero" />

          <form>
            <h1>Faça seu Login</h1>

            <input type="text" placeholder="Seu ID" />
            <button className="button" type="submit">
              Entrar
            </button>

            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </Link>
          </form>
        </section>
        <img src={HeroesImg} alt="heroes" />
      </div>
    </>
  );
}
