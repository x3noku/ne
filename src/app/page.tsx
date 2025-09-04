import Header from "@/components/Header";
import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            LIMITED EDITION SNEAKERS
          </h1>
          <p className="text-gray-600">Found: 1859</p>
        </div>

        {/* Filter Bar */}
        <FilterBar />

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination />
      </main>

      <Footer />
    </div>
  );
}
