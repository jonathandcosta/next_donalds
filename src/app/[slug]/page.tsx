import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug)
  return <h1>{restaurant?.name}</h1>
}
export default RestaurantPage


// trabalhando com url das paginas