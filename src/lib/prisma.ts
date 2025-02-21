// conecxão cacheada com o prisma, para não sobrecarregar o BD. serva para que todas as vezes que salvar não abuse do BD.
import { PrismaClient } from "@prisma/client"

declare global {
  // eslint-disable-next-line no-unused-vars, no-var
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}
// em desenvolvimento uso para chamar o BD
export const db = prisma