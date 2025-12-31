import { useEffect, useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {

  const [sepet, setsepet] = useState([]);

  return (
    <>
      <Header />

      <div className="container mt-4">
        <div className="row">

          {/* SOL TARAF – ÜRÜNLER */}
          <div className="col-md-8">
            <Home sepet={sepet} setsepet={setsepet} />
          </div>

          {/* SAĞ TARAF – SEPET */}
          <div className="col-md-4">
            <Cart sepet={sepet} />
          </div>

        </div>
      </div>
    </>
  );
}





export default App;



