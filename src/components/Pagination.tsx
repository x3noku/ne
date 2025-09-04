"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2 mt-12 mb-16">
      <Button variant="ghost" size="icon">
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="default"
        className="bg-black text-white hover:bg-gray-800"
      >
        1
      </Button>
      <Button variant="ghost">2</Button>
      <Button variant="ghost">3</Button>
      <Button variant="ghost">4</Button>
      <Button variant="ghost">5</Button>

      <Button variant="ghost" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
