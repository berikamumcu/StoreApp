import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


function Home({ sepet, setsepet }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Ürünler alınamadı");
        }

        const data = await response.json();
        console.log(data);
        setProducts(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h4>Ürünler yükleniyor...</h4>;
  if (error) return <h4>Hata: {error}</h4>;

  return (
    <div className="container mt-4">
      <div className="row">
        {
          products.map(product => (
            <div className="col-md-3 mb-4" key={product.id}>
              <ProductCard
                product={product}
                sepet={sepet}
                setsepet={setsepet}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}


export default Home;

