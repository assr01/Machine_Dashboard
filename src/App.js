import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
const API = "https://api.npoint.io/ba2ab7cf215d9dd9933a";

function App() {
  const [jsontoRender, setJsonToRender] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setJsonToRender(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h2>MACHINE DASHBOARD</h2>
      <div className="title">
        <h2>BENGALURU SHOP FLOOR</h2>
      </div>
      <div className="container">
        {jsontoRender &&
          jsontoRender.length !== 0 &&
          jsontoRender.map((machine, index) => {
            return (
              <div key={`key ${index}`} className="card">
                <div
                  key={`inner-key ${index}`}
                  style={{ backgroundColor: machine.hearder_colour }}
                  className="card-header"
                >
                  Machine-{machine.number}
                  <button
                    style={{ backgroundColor: machine.colour }}
                    className="card-header-button"
                  >
                    {machine.status === 1
                      ? "Running"
                      : machine.status === 2
                      ? "Stopped"
                      : "Paused"}
                  </button>
                </div>
                <div className="card-body">
                  <div className="card-items">
                    <p>Performance</p>{" "}
                    <p>
                      <strong>{machine.performance}</strong>
                    </p>
                  </div>
                  <div className="card-items">
                    <p>Running Since</p>{" "}
                    <p>
                      <strong>{machine.running_since}</strong>
                    </p>
                  </div>
                  <div className="card-items">
                    <p>Parts Produced</p>{" "}
                    <p>
                      <strong>{machine.parts_produced}</strong>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
