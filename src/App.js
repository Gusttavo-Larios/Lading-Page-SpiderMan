import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineCaretRight,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import Aranha from "./assets/images/aranha.svg";
import Spider_Man from "./assets/images/spider-man.svg";
import Spider from "./assets/images/spider.svg";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Aranha} alt="Aranha" />

        <nav className="container-options">
          <a href="#">HOME</a>
          <a href="#">SINOPSE</a>
          <a href="#">ELENCO</a>
        </nav>
      </header>
      <aside>
        <div className="container-social-media">
          <button>
            <AiOutlineInstagram className="social-media" />
          </button>
          <button>
            <FiTwitter className="social-media" />
          </button>
          <button>
            <FiFacebook className="social-media" />
          </button>
        </div>

        <button className="search">
          <AiOutlineSearch className="icon"/>
        </button>
      </aside>
      <main>
        <img src={Spider_Man} />
        <img src={Spider} />
        <button>
          ASSISTA AO TREILER <AiOutlineCaretRight />
        </button>
      </main>
    </div>
  );
}

export default App;
