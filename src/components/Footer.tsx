import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sections */}
          <div>
            <h3 className="font-semibold mb-4">SECTIONS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  SALE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Clothes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Collectibles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contacts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Return
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">CUSTOMER SERVICE</h3>
            <div className="space-y-2 text-sm">
              <p>
                <a href="tel:+97142341071" className="hover:text-gray-300">
                  +971 42 341 071
                </a>
              </p>
              <p>FROM 10 AM TO 10 PM</p>
              <p>
                <a
                  href="mailto:support@nikitaefremov.com"
                  className="hover:text-gray-300"
                >
                  support@nikitaefremov.com
                </a>
              </p>
              <p className="pt-2">
                Media&PR -{" "}
                <a
                  href="mailto:pr@nikitaefremov.com"
                  className="hover:text-gray-300"
                >
                  pr@nikitaefremov.com
                </a>
              </p>
              <p className="pt-2 text-xs">
                UAE, Dubai, Mall of the Emirates, NE Store, J21C, PO Box 60811
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div className="text-xs">
              <p>FOLLOW US</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            <p>2018-2025 © NIKITA EFREMOV</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>

          <div className="space-y-1 text-xs">
            <p>
              <a href="#" className="hover:text-gray-300">
                Terms and conditions
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-gray-300">
                Consumer rights
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-gray-300">
                NIKITA EFREMOV online store privacy policy
              </a>
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="text-xs mb-2">PAYMENT METHODS</p>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-xs text-white">
                VISA
              </div>
              <div className="w-8 h-5 bg-red-600 rounded flex items-center justify-center text-xs text-white">
                MC
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
