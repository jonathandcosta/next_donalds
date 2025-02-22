import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ consumptionMethod: string }>
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE-IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase())
}

const RestaurantMenuPage = async ({ params, searchParams }: RestaurantMenuPageProps) => {
  const { slug } = await params
  const { consumptionMethod } = await searchParams
  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound
  }


  const restaurant = await db.restaurant.findUnique({ where: { slug } })

  return (<h1>MENU {slug} {consumptionMethod}</h1>);
}

export default RestaurantMenuPage;

// http://localhost:3000/fsw-donalds/menu?consumptionMethod=dine-in