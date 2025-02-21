import { db } from "@/lib/prisma"

export const getRestaurantBySlug = async(slug: string) => {
  const restaurant = await db.restaurant.findFirst({ where: { slug } })
  return restaurant
}