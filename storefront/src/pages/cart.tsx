import CartTemplate from "@modules/cart/templates"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Cart: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Shopping Cart" description="View your Shopping Cart" />
      <CartTemplate />
    </>
  )
}

Cart.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Cart
