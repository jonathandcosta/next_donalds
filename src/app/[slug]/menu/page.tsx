import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import RestaurantHeader from "./component/header";

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
    return notFound()
  }


  const restaurant = await db.restaurant.findUnique({ where: { slug } })
  if (!restaurant) {
    notFound()
  }

  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
    </div>
  );
}

export default RestaurantMenuPage;

