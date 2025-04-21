import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const products = {
  1: { name:"Office 365 – 1 năm", price:150000, description:"Dùng 5 thiết bị, bao gồm Word, Excel,..." },
  2: { name:"Office 2021 Key vĩnh viễn", price:350000, description:"Key vĩnh viễn cho 1 máy, bảo hành trọn đời." },
  3: { name:"Windows 10 Pro Key", price:100000, description:"Key Windows 10 Pro bản quyền kỹ thuật số." }
};

export default function ProductPage() {
  const { id } = useRouter().query;
  const p = products[id] || {};
  return (
    <>
      <Header cartCount={0}/>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{p.name}</h2>
        <p className="mb-4">{p.description}</p>
        <p className="font-bold text-lg">{p.price?.toLocaleString()}đ</p>
      </div>
      <Footer/>
    </>
  );
}