import Header from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Каталог товаров
            </h1>
            <p className="text-gray-600">Все товары в одном месте</p>
            <p className="text-sm text-gray-500 mt-2">
              Показано {products.length} товаров
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
