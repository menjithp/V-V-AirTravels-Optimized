import Head from 'next/head'
import Header from '../components/header'
import Company from '../components/company'
import Country from '../components/country'
import Snapshot from '../components/snapshot'
import Contact from '../components/contact'
import Footer from '../components/footer'

import newstate from '../data/general.json'

import Image from 'next/legacy/image'

export default function Home() {



  return (
    <>
      <Head>
         <title>V V AIR TRAVELS | Foreign Job Consultancy | India's Best Immigration Agency</title>
        <meta name="description" content="V.V.Air Travels. India's Best Immigration Consultant.V.V.Air Travels is India’s Best
        foreign job consultancy and overseas job agency. Established in 2020, We are Licensed foreign Recruitment Agency 
         in India . As part of our services, we provide personal one-on-one counseling to about 100+ individual inquiries every 
         month for migration and work visas.Over 50% of our customers are through word-of-mouth. No other company understands
          overseas careers like we do. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
       <Company/>
       <Country />
       <Snapshot/>
       <Contact/>
      </main>
      <a href={`https://wa.me/${newstate.Whatsapp}`} className="position-fixed end-0 bottom-0 mb-4 me-4">
                     <Image src="/media/general/whatsappg.webp" height={50} width={50} alt="whatsapp image"/>
        </a>
      <Footer/>
    </>
  )
}
