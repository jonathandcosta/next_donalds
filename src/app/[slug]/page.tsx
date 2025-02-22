import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import Image from "next/image";
import { notFound } from "next/navigation";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug)

  // se for um slug invalido mostra pagina 404
  if (!restaurant) {
    return notFound
  }

  return <div className="h-screen flex flex-col items-center justify-center px-6 pt-24">
    {/* logo e titulo */}
    <div className="flex flex-col items-center gap-2">
      <Image
        src={restaurant?.avatarImageUrl}
        alt={restaurant?.name}
        width={82}
        height={82} />
      <h2 className="font-semibold">{restaurant.name}</h2>
    </div>
    <div className="space-y-2 pt-24 text-center">
      <h3 className="text-2xl font-semibold">Seja bem vindo!</h3>
      <p className="opacity-55">Escolha como prefere aproveitar sua refeição. Estamos aqui para oferecer praticidade e sabor em cada detalhe!</p>
    </div>
    <div className="pt-14 grid grid-cols-2 gap-4">
      <Card>
        <CardContent className="flex flex-col items-center gap-8 py-8">
          <div className="relative h-[80px] w-[80px]">
            <Image
              src="/dine-in.svg"
              fill
              alt="Para comer aqui"
              className="object-contain"
            />
          </div>
          <Button
            className="rounded-full" variant='secondary'>
            Para comer aqui
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center gap-8 py-8">
          <div className="relative h-[80px] w-[80px]">
            <Image
              src="/takeaway.svg"
              fill
              alt="Para levar"
              className="object-contain"
            />
          </div>
          <Button
            className="rounded-full" variant='secondary'>
            Para levar
          </Button>
        </CardContent>
      </Card>

    </div>
  </div>
}
export default RestaurantPage


// trabalhando com url das paginas