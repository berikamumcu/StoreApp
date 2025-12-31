function ProductCard({ product, sepet, setsepet }) {

  const addToCart = () => {

    const sepettekiUrun = sepet.find(
      item => item.id === product.id
    );

    if (sepettekiUrun) {
      const guncelSepet = sepet.map(item =>
        item.id === product.id
          ? { ...item, adet: item.adet + 1 }
          : item
      );
      setsepet(guncelSepet);
    } else {
      setsepet([...sepet, { ...product, adet: 1 }]);
    }
  };

  return (
    <div className="card h-100 shadow-sm">

      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column">

        <h6 className="card-title">{product.title}</h6>
        <p className="card-text fw-bold">{product.price} ₺</p>

        <button
          className="btn btn-primary mt-auto"
          onClick={addToCart}>
          Sepete Ekle
        </button>

      </div>
    </div>
  );
}


export default ProductCard;