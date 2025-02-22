import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ConsumptionMethodOptionProps {
  imageUrl: string
  imageAlt: string
  buttonText: string
}

const ConsumptionMethodOption = ({ imageUrl, imageAlt, buttonText }: ConsumptionMethodOptionProps) => {
  return (<Card>
    <CardContent className="flex flex-col items-center gap-8 py-8">
      <div className="relative h-[80px] w-[80px]">
        <Image
          src={imageUrl}
          fill
          alt={imageAlt}
          className="object-contain"
        />
      </div>
      <Button
        className="rounded-full" variant='secondary'>
        {buttonText}
      </Button>
    </CardContent>
  </Card>);
}

export default ConsumptionMethodOption;