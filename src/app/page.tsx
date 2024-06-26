"use client"

import { lusitana } from "@/components/ui/fonts";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";


const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Instant asset delivery to your email - download in seconds and get started right away!"
  },{
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description: "Highest quality assets, verified by our team. If you're not satisfied, we offer a 30-day refund"
  },{
    name: "For the Planet",
    Icon: Leaf,
    description: "We've pledged 1% of sales to the preservation and restoration of the natural environment."
  },


]

export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }



  return (
    <div className={`${lusitana.className}`}>
    <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">Marketplace for high-quality{` `}<span className="text-blue-400">digital assets.</span></h1>

      <p className="mt-6 text-lg max-w-prose text-muted-foreground">Discover Innovation and Convenience at Novamart</p>

      <div className="flex felx-col sm:flex-row gap-4 mt-6">
        <Link href="/products" className={buttonVariants()}>Browse Trending</Link>

        <Button variant="ghost">Our quality promise &rarr;</Button>
      </div>
    </div>
    </MaxWidthWrapper>


    <section className="border-t border-gray-200 bg-gray-50">

      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
           {perks.map((perk) => (
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3"/>}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}
                  </h3>

                  <p className="mt-3 max-sm:px-5 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
           ))}
        </div>
      </MaxWidthWrapper>

    </section>
    </div>
  );
}
