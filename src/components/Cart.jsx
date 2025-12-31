
function Cart({ sepet }) {

  const toplamTutar = sepet.reduce(
    (acc, item) => acc + item.price * item.adet,
    0
  );

  return (
    <div className="container mt-4">
      <h4>🛒 Sepet</h4>

      {sepet.length === 0 && <p>Sepet boş</p>}

      {sepet.map(item => (
        <div
          key={item.id}
          className="border-bottom py-2"
        >
          <strong>{item.title}</strong>
          <div>{item.adet} adet</div>
          <div>{item.price} ₺</div>
          <div>Tutar: {item.price * item.adet} ₺</div>
        </div>
      ))}

      {sepet.length > 0 && (
        <>
          <hr />
          <h5 className="text-end">
            Toplam: {toplamTutar.toFixed(2)} ₺
          </h5>
        </>
      )}
    </div>
  );
}


export default Cart;
