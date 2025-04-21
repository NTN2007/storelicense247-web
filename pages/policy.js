import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Policy() {
  return (
    <>
      <Header cartCount={0}/>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Chính sách bảo hành</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bảo hành key vĩnh viễn trọn đời.</li>
          <li>Key lỗi do nhà Microsoft thay thế trong 24h.</li>
          <li>Không bảo hành do người dùng tự thay đổi phần cứng.</li>
        </ul>
      </div>
      <Footer/>
    </>
  );
}