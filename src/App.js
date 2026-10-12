import "./styles.css";
import logo from "./Clipboard_10-07-2026_01.jpg"




export default function App() {
  function MouseEnter(){
    console.log("Jetzt")
  }
  function MouseLeave(){
    console.log("Stopp")
  }
  return (
    <div className="App">
      <body>
        <header className = "header-container">
          <h1 className = "header-title">Willkommen auf meiner Webseite!</h1>
          <div className = "header">
            <div className = "header-logo">
              <img src= {logo} alt = "Mein Logo" className = "logo-img" />
              <div className = "logo-text">Satyr</div>
            </div>
            <div className = "header-nav">
              <input type = "text" part="search-input" placeholder="Suche..." 
              onKeyDown={(e) => console.log(e.key)} />
              <button id = "1" value="Suche" part="search-button"
              onClick={(e) => console.log(e.target.id)} 
              onMouseEnter={MouseEnter} 
              onMouseLeave={MouseLeave}>    
              Suchen</button>           
            </div>
          </div>
        </header>
      </body>
    </div>
  );
}
