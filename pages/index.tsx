import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import smallCardImage from "/public/images/3643ec104098983.5f5b5ea7c10c5.png";
import Footer from '../components/Footer'

type HomeProps = {
  exploreData: any;
  cardData: any;
};

const Home= ({ exploreData, cardData }: HomeProps) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="https://brandlogos.net/wp-content/uploads/2022/07/airbnb-logo_brandlogos.net_vb6uh-512x512.png" />
      </Head>
      <Header/>
      <Banner/>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section>
          <h2 className="text-3xl font-semibold pb-5 mt-2">Explore nearby</h2>
           {/* data from sever */}
           <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4"
          >
            {exploreData?.map((item: any) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold py-8">Live Anywhere</h2>
          <div
            className="flex space-x-3 overflow-scroll scrollbar-hide p-3
          -ml-3"
          >
            {cardData?.map((item: any) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img={smallCardImage}
          title="The Greatest Outdoors"
          description="wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer/>
    </div>
  )
}
export default Home

export async function getServerSideProps() {
  const exploreData = await fetch(
    "https://hasinduperera12.github.io/Application-Programming-Interface/smallCardData.json"
  ).then((res) => res.json());

  const cardData = await fetch(
    "https://hasinduperera12.github.io/Application-Programming-Interface/mediumCarData.json"
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
 