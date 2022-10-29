import Medusa from "@medusajs/medusa-js"
import { QueryClient } from "react-query"

// Defaults to standard port for eCommerce server
let ECOMMERCE_BACKEND_URL = "http://localhost:9999"

if (process.env.NEXT_PUBLIC_ECOMMERCE_BACKEND_URL) {
  ECOMMERCE_BACKEND_URL = process.env.NEXT_PUBLIC_ECOMMERCE_BACKEND_URL
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      retry: 1,
    },
  },
})

const medusaClient = new Medusa({ baseUrl: ECOMMERCE_BACKEND_URL, maxRetries: 3 })

export { ECOMMERCE_BACKEND_URL, queryClient, medusaClient }
