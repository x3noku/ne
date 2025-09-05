"use client";

import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Truck, Shield, RotateCcw } from "lucide-react";

interface ProductInfoProps {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  onSizeSelect: (size: string) => void;
  onColorSelect: (color: string) => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

export function ProductInfo({
  product,
  selectedSize,
  selectedColor,
  onSizeSelect,
  onColorSelect,
  onAddToCart,
  onBuyNow,
}: ProductInfoProps) {
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="space-y-6">
      {/* Brand and Category */}
      <div className="space-y-2">
        {product.brand && (
          <p className="text-sm text-gray-600">{product.brand}</p>
        )}
        {product.category && (
          <p className="text-sm text-gray-500">{product.category}</p>
        )}
      </div>

      {/* Product Name */}
      <h1 className="text-2xl font-bold text-gray-900 leading-tight">
        {product.name}
      </h1>

      {/* Rating and Reviews */}
      {product.rating && product.reviewsCount && (
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating!)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviewsCount} отзывов)
          </span>
        </div>
      )}

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          {product.isOnSale && product.originalPrice ? (
            <>
              <span className="text-3xl font-bold text-red-600">
                {product.currency} {product.price.toLocaleString()}
              </span>
              <span className="text-lg text-gray-400 line-through">
                {product.currency} {product.originalPrice.toLocaleString()}
              </span>
              <Badge variant="destructive" className="text-xs">
                -{discountPercentage}%
              </Badge>
            </>
          ) : (
            <span className="text-3xl font-bold text-gray-900">
              {product.currency} {product.price.toLocaleString()}
            </span>
          )}
        </div>

        {product.isOnSale && (
          <p className="text-sm text-green-600 font-medium">
            Экономия {product.currency}{" "}
            {(product.originalPrice! - product.price).toLocaleString()}
          </p>
        )}
      </div>

      {/* Description */}
      {product.description && (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">Описание</h3>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>
      )}

      {/* Size Selection */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">Размер</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                size="sm"
                onClick={() => onSizeSelect(size)}
                className="min-w-[60px]"
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Color Selection */}
      {product.colors && product.colors.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">Цвет</h3>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <Button
                key={color}
                variant={selectedColor === color ? "default" : "outline"}
                size="sm"
                onClick={() => onColorSelect(color)}
                className="capitalize"
              >
                {color}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Stock Status */}
      <div className="space-y-2">
        {product.inStock ? (
          <p className="text-green-600 font-medium flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>В наличии
          </p>
        ) : (
          <p className="text-red-600 font-medium">Нет в наличии</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <Button
            size="lg"
            className="flex-1"
            onClick={onAddToCart}
            disabled={
              !product.inStock || (!selectedSize && product.sizes?.length)
            }
          >
            Добавить в корзину
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex-1"
            onClick={onBuyNow}
            disabled={
              !product.inStock || (!selectedSize && product.sizes?.length)
            }
          >
            Купить сейчас
          </Button>
        </div>
      </div>

      {/* Features */}
      <Card className="p-4 space-y-3">
        <h3 className="font-semibold text-gray-900">Преимущества покупки</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-green-600" />
            <span>Бесплатная доставка по ОАЭ</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-600" />
            <span>Гарантия подлинности</span>
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-purple-600" />
            <span>Возврат в течение 14 дней</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
