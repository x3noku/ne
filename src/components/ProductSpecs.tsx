import { Card } from "@/components/ui/card";

interface ProductSpecsProps {
  specifications: {
    [key: string]: string;
  };
}

export function ProductSpecs({ specifications }: ProductSpecsProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Характеристики</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
            <span className="font-medium text-gray-700">{key}</span>
            <span className="text-gray-600">{value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
