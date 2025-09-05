import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/ProductDetails";
import { getProductById } from "@/lib/products";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <ProductDetails product={product} />
    </div>
  );
}

export async function generateStaticParams() {
  const { products } = await import("@/lib/products");

  return products.map((product) => ({
    id: product.id,
  }));
}
