import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Guide() {
  return (
    <>
      <Header cartCount={0}/>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Hướng dẫn mua và kích hoạt</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Chọn sản phẩm và “Thêm vào giỏ”.</li>
          <li>Kiểm tra giỏ hàng, nhấn “Thanh toán”.</li>
          <li>Liên hệ Zalo/Email để xác nhận đơn.</li>
          <li>Thanh toán theo hướng dẫn, nhận key & hướng dẫn cài đặt.</li>
        </ol>
      </div>
      <Footer/>
    </>
  );
}