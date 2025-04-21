import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Review() {
  return (
    <>
      <Header cartCount={0}/>
      <div className="p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Đánh giá khách hàng</h2>
        <blockquote>🌟🌟🌟🌟🌟 “Key giao nhanh, hỗ trợ nhiệt tình!”</blockquote>
        <blockquote>🌟🌟🌟🌟 “Giá tốt, cài đặt dễ dàng.”</blockquote>
        <blockquote>🌟🌟🌟🌟🌟 “Dùng ổn định, không bị khóa.”</blockquote>
      </div>
      <Footer/>
    </>
  );
}