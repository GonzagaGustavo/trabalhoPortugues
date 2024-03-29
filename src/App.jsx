import React from "react";
import "./App.css";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  Zoom,
  batch,
  Fade,
  MoveOut,
  StickyIn,
  FadeIn,
  ZoomIn,
  Move,
} from "react-scroll-motion";
import logo from "./logo.svg";

function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut())}>
          <div className="header">
            <div className="img-container">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="img-relative"
              />
              <img
                src="http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg"
                alt=""
                className="people img-relative"
              />
            </div>
          </div>
          <h1 className="names">Gustavo Gonzaga & Eduardo Felipe</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <div className="content">
          <div className="varela-img">
            <Animator animation={batch(Move(800, 0), Fade())}>
              <img
                src="https://s.ebiografia.com/assets/img/authors/fa/gu/fagundes-varela-l.jpg"
                alt=""
                className="varela"
              />
            </Animator>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "60%" }}
          >
            <Animator animation={Fade()}>
              <h1>Fagundes Varela</h1>
            </Animator>
            <div className="text">
              <Animator animation={batch(Move(1000, 200), Fade())}>
                <p>
                  Fagundes Varela (1841-1875) foi um poeta brasileiro. Sua
                  poesia apresenta características da segunda e da terceira
                  geração de poetas românticos do Brasil. Além de apresentar
                  temas sobre a natureza, a angústia, a solidão, a melancolia e
                  o desengano, apresenta também temas sociais e políticos. É
                  patrono da cadeira n.º 11 da Academia Brasileira de Letras.
                </p>
                <h1>Geração Romântica</h1>
                <p>
                  Fagundes Varela é considerado o poeta da natureza, é o autor
                  que melhor a reproduz nos versos da literatura brasileira. Sua
                  obra é repleta de um lirismo bucólico. Sua obra poética,
                  embora ainda presa a certas atitudes ultrarromânticas, da
                  segunda geração, como o pessimismo, a solidão e a morte,
                  aponta novos rumos, que conduzem à geração seguinte. A poesia
                  de Fagundes Varela além de ser um lamento sentimental ou uma
                  queixa amorosa passa a ser também um grito de protesto ou de
                  reivindicação social. É considerado o precursor da poesia
                  social e abolicionista.
                </p>
              </Animator>
            </div>
          </div>
        </div>
      </ScrollPage>
      <ScrollPage page={2}>
        <div className="poesia">
          <Animator animation={batch(Fade(), Move(), Zoom(), Sticky())}>
            <h1 style={{ textAlign: "center" }}>Armas</h1>
            <p>
              – Qual a mais forte das armas, a mais firme, a mais certeira? A
              lança, a espada, a clavina, ou a funda aventureira?
            </p>

            <p>
              A pistola? O bacamarte? A espingarda, ou a flecha? O canhão que em
              praça forte faz em dez minutos brecha?
            </p>
            <p>
              – Qual a mais firme das armas? – O terçado, a fisga, o chuço, o
              dardo, a maça, o virote? A faca, o florete, o laço, o punhal, ou o
              chifarote
            </p>
            <p>
              A mais tremenda das armas, pior que a durindana, atendei, meus
              bons amigos: se apelida: – a língua humana.
            </p>
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage page={3}>
        <div className="footer">
          <h1 style={{ margin: "0px" }}>Fim!</h1>
          <div className="tu">
            <div style={{ display: "grid", placeItems: "center" }}>
              <h3>Tecnologias usadas</h3>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <img src={logo} className="App-logo" alt="logo" />
                <h4>React</h4>
              </div>
            </div>

            <a href="https://github.com/Gustavo13132/trabalhoPortugues" style={{ color: "black" }}>
              Código do projeto
            </a>
          </div>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
