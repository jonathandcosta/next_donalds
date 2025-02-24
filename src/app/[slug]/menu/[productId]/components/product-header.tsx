'use client'

import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ChevronLeft, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductHeaderProps {
  product: Pick<Product, 'name' | 'imageUrl'>
}

const ProductHeader = ({ product }: ProductHeaderProps) => {

  const router = useRouter()
  const goback = () => router.back()

  return (
    <div className="relative h-[385px] w-full">
      <Button
        variant="secondary"
        size='icon'
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={goback}
      >
        <ChevronLeft />
      </Button>

      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-cover"
      />

      <Button
        variant="secondary"
        size='icon'
        className="absolute right-4 top-4 z-50 rounded-full"
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
}

export default ProductHeader;