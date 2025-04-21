import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import PaymentPopup from "../components/PaymentPopup";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [openPay, setOpenPay] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const add = (p) => setCart([...cart, p]);
  const remove = (i) => setCart(cart.filter((_, idx) => idx !== i));
  const total = cart.reduce((s, i) => s + i.price, 0);

  const submitOrder = () => {
    const msg = `Đơn hàng mới:\n${cart.map(x => `- ${x.name}: ${x.price.toLocaleString()}đ`).join("\n")}\nTổng: ${total.toLocaleString()}đ`;
    window.open("https://zalo.me/your-zalo-id?message=" + encodeURIComponent(msg));
    window.open("mailto:youremail@example.com?subject=Đơn hàng&body=" + encodeURIComponent(msg));
  };

  return (
    <>
      <Header cartCount={cart.length}/>
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Sản phẩm nổi bật</h2>
        <ProductList onAdd={add}/>
        <Cart cart={cart} onRemove={remove}/>
        <button onClick={() => setOpenPay(true)} className="btn btn-primary w-full mb-6">
          Thanh toán
        </button>
        <PaymentPopup open={openPay} onClose={() => setOpenPay(false)} total={total} onSubmit={submitOrder}/>
      </main>
      <Footer/>
      <a href="https://zalo.me/your-zalo-id" target="_blank" className="fixed bottom-6 right-6">
        <img src="/images/zalo-icon.png" alt="Chat Zalo" className="w-12 h-12"/>
      </a>
    </>
  );
}