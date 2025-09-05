import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/catalog/${product.id}`}>
      <Card className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          {product.badge && (
            <Badge
              variant="secondary"
              className="absolute top-3 left-3 z-10 bg-orange-200 text-orange-800 hover:bg-orange-200"
            >
              {product.badge}
            </Badge>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight">
            {product.name}
          </h3>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">from</span>
            {product.isOnSale && product.originalPrice ? (
              <>
                <span className="text-lg font-semibold text-red-600">
                  {product.currency} {product.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  from {product.currency}{" "}
                  {product.originalPrice.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="text-lg font-semibold text-gray-900">
                {product.currency} {product.price.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
