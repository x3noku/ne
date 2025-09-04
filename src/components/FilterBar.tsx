"use client";

import { Button } from "@/components/ui/button";
import { Filter, ArrowUpDown } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <Button
          variant="default"
          className="bg-black hover:bg-gray-800 text-white rounded-full px-6"
        >
          <Filter className="h-4 w-4 mr-2" />
          SHOW FILTER
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">SORT BY:</span>
        <Button variant="ghost" className="text-sm">
          BY NEW
          <ArrowUpDown className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
