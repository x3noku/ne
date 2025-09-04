"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Heart, ShoppingBag, User } from "lucide-react";
import Logo from "@/assets/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Image
            src={Logo.src}
            width={Logo.width}
            height={Logo.height}
            className={"size-16 object-contain"}
            alt={""}
          />

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              SALE
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              SHOES
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              CLOTHES
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              COLLECTIBLES
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              ACCESSORIES
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              BRANDS
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              INFORMATION
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
