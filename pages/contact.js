import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Header cartCount={0}/>
      <div className="p-4 space-y-2">
        <h2 className="text-2xl font-bold mb-4">Liên hệ</h2>
        <p><Phone className="inline w-5 h-5 mr-1"/> 0389.xxx.xxx (Zalo)</p>
        <p><Mail className="inline w-5 h-5 mr-1"/> storelicense247@gmail.com</p>
      </div>
      <Footer/>
    </>
  );
}