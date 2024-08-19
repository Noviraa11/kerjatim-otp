import React, { useState } from "react";
import ReactDOM from "react-dom";
import Icon from './images/logo.png';
import Image from './images/otp.png';
import InputCode from "./InputCode";

import "./styles.css";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      {/* <div className="logos"> */}
        <img className="icons" src={Icon} />
      {/* </div> */}
      <div className="container">
        <img src={Image} />
        <h1 className="title">Masukkan Kode Verifikasi</h1>

        <InputCode
          length={6}
          label="Kami telah mengirimkan 6 kode verifikasi ke email kamu,
          silahkan masukkan kode kamu untuk sign up!"
          loading={loading}
          onComplete={code => {
            setLoading(true);
            setTimeout(() => setLoading(false), 10000);
          }}
        />

        <input type="submit" value="Lanjut" class="btn" />
        <div className="choose">
          <a className="resend" href="#">Kirim kode</a>
          <span className="resends">verifikasi lagi?</span>
        </div>
        <p className="other">Atau</p>
        <div className="choose">
          <a className="resend" href="#">Log Out</a>
          <span className="logouts">untuk ganti akun</span>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
