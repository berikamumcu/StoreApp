import { useState } from "react";
import { items } from "./data";

function App() {

  const[sepet,setsepet] = useState([]);




  return (
  <>
    <Header/>
    <div className="container mt-4">

      
      <div className="row">

        {/* SOL TARAF – ÜRÜNLER */}
        <div className="col-md-8">
          <Home sepet={sepet} setsepet={setsepet} />
        </div>

        {/* SAĞ TARAF – SEPET */}
        <div className="col-md-4">
          <Cart sepet={sepet} setsepet={setsepet} />
        </div>

      </div>
    </div>
    </>
  );
}



function Home({sepet,setsepet}){

  return(
 
    <div className="container mt-4">
      <div className="row">
        {
          items.map(item => (
            <div className="col-md-3 mb-4" key={item.id}>
              <ProductCard product={item} sepet={sepet} setsepet={setsepet} />
            </div>
          ))
        }
      </div>
    </div>

  );
}



//Aynı ürün sepete tekrar eklenirse → adet 1 artsın
//Sepette yoksa → adet = 1 olarak eklensin




function ProductCard({ product, sepet, setsepet }) {

  const addToCart = () => {

    // Sepette bu ürün var mı?
    const sepettekiUrun = sepet.find(
      item => item.id === product.id
    );

    // ürün var --> adet artır
    if (sepettekiUrun) {

      const guncelSepet = sepet.map(item =>
        item.id === product.id
          ? { ...item, adet: item.adet + 1 }
          : item
      );

      setsepet(guncelSepet);

    } else {
      // ürün yok --> yeni ekle
      setsepet([...sepet, { ...product, adet: 1 }]);
    }

    console.log(sepet);
  };


  return(
    <>
      <div className="card h-100 shadow-sm">

        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.title} 
        />

         <div className="card-body d-flex flex-column">

            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.price} ₺</p>

            <button className="btn btn-primary mt-auto" onClick={addToCart} type="button">
              Sepete Ekle
            </button>

          </div>
        </div>

    </>
  )
}





function Cart({ sepet }) {

    const toplamTutar = sepet.reduce((acc, item) => {
    return acc + item.price * item.adet;
  }, 0);


  return (
    <div className="container mt-4">
      <h4>🛒 Sepet</h4>

      {sepet.length === 0 && (
        <p>Sepet boş</p>
      )}

      {sepet.map(item => (
        <div
          key={item.id}
          className="d-flex justify-content-between border-bottom py-2"
        >
          <span>{item.title}</span>
          <span>{item.adet} adet</span>
          <span>{item.price} ₺</span>
          <p>Tutar: {item.price * item.adet}</p>
        </div>
      ))}


      {sepet.length > 0 && (
        <>
          <hr />
          <h5 className="text-end">
            Toplam: {toplamTutar} ₺
          </h5>
        </>
      )}


    </div>
  );
}




function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-1 h1">
          StoreApp
        </span>
      </div>
    </nav>
  );
}



export default App



