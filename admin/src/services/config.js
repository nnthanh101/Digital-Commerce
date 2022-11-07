import { QueryClient } from "react-query"

let ecommerceUrl = "http://localhost:9000"

// deprecated
if (process.env.GATSBY_STORE_URL) {
  ecommerceUrl = process.env.GATSBY_STORE_URL
}

// takes precedence over GATSBY_STORE_URL
if (process.env.GATSBY_ECOMMERCE_BACKEND_URL) {
  ecommerceUrl = process.env.GATSBY_ECOMMERCE_BACKEND_URL
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 90000,
      retry: 1,
    },
  },
})

export { ecommerceUrl, queryClient }
