import Image from "next/image"

const CompanyCTA = () => {
  return (
    <div className="py-4 flex justify-center items-center w-full">
      <div className="content-container flex justify-center flex-1">
        Powered by OceanSoft &nbsp;
        <a href="https://ecommerce.oceansoft.io" target="_blank" rel="noreferrer">
          <PoweredBy />
        </a>
      </div>
    </div>
  )
}

const PoweredBy = () => {
  return (
    <Image src="/logo.svg" height={30} width={30} />
  )
}

export default CompanyCTA
