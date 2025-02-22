'use client'

import { Button } from "@/components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeft, ScrollTextIcon } from "lucide-react";
import Image from "next/image";

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, 'name' | 'coverImageUrl'>
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {

  return (<div className="relative h-[250px] w-full">

    <Button
      variant="secondary"
      size='icon'
      className="absolute left-4 top-4 z-50 rounded-full"
    >
      <ChevronLeft />
    </Button>

    <Image
      src={restaurant.coverImageUrl}
      alt={restaurant.name}
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
  </div>);
}

export default RestaurantHeader;