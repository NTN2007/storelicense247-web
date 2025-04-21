import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header({ cartCount }) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow mb-6">
      <h1 className="text-2xl font-bold text-blue-600">StoreLicense247</h1>
      <nav className="flex flex-wrap gap-2 mt-2 md:mt-0">
        <Link href="/"><a className="btn">Trang chủ</a></Link>
        <Link href="/guide"><a className="btn">Hướng dẫn</a></Link>
        <Link href="/policy"><a className="btn">Bảo hành</a></Link>
        <Link href="/contact"><a className="btn">Liên hệ</a></Link>
        <Link href="/review"><a className="btn">Đánh giá</a></Link>
        <Link href="/cart">
          <a className="btn bg-blue-500 text-white flex items-center">
            <ShoppingCart className="w-4 h-4 mr-1"/> Giỏ ({cartCount})
          </a>
        </Link>
      </nav>
    </header>