"use client";

import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProducts() {
  // Получаем первые 6 товаров как популярные
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            🔥 Популярные модели
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ХИТЫ ПРОДАЖ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Самые востребованные кроссовки, которые выбирают наши клиенты.
            Ограниченные коллекции от топовых брендов.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="transform hover:scale-105 transition-transform duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/catalog">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg group"
            >
              Смотреть все товары
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
