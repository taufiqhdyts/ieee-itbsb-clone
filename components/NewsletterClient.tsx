"use client"
import Loader from './Loader'
import { NewsLetterCardProps } from '@/types/components'
import React, { useState } from 'react'
import NewsletterCard from './NewsletterCard'
import Pagination from './Pagination'
import Image from "next/image"
import { useQuerySubscription } from 'react-datocms';

const NewsletterClient = ({ subscription }: any) => {
    const { data: realtimeData, error, status } = useQuerySubscription(subscription);
    const { allNewsletters } = realtimeData;
    const cardsPerPage = 6; // Number of cards per page
    const [currentPage, setCurrentPage] = useState(1); // Current page

    if (status !== 'connected') {
        return <Loader/>; // You can replace this with a loader component
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    // Calculate the starting and ending indices of cards for the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = allNewsletters?.slice(indexOfFirstCard, indexOfLastCard);

    return (
        <div className="flex flex-col gap-5 lg:gap-14">
            {/* Title Page */}
            <h1 className="bg-gradient-to-r text-center from-[#D146FF] from-30% via-[#F9BED4] via-60% to-[#FFFFFF bg-clip-text font-poppins font-bold text-4xl uppercase leading-none text-transparent xl:text-6xl xl:leading-none">Newsletter</h1>
            {/* Mapping newsletter card */}
            <section className="flex flex-wrap gap-x-8 gap-y-4 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-28 lg:gap-y-10 xl:gap-y-14 items-stretch justify-center p-8 lg:p-12">
                {currentCards?.map((item: NewsLetterCardProps, index: number) => (
                    <NewsletterCard
                        slug={item.slug}
                        key={index}
                        title={item.title}
                        summary={item.summary}
                        _firstPublishedAt={item._firstPublishedAt}
                        image={item.image}
                    />
                ))}
            </section>
            {/* Pagination */}
            <section className="w-full relative flex items-center justify-center gap-3 lg:gap-5">
                <h2 className="hidden">Pagination</h2>
                <Pagination numberPage={Math.floor(allNewsletters?.length / cardsPerPage) + 1} setCurrentNumberPage={setCurrentPage} currentNumberPage={currentPage} />
            </section>
            {/* Left Bubble */}
            <Image
                className="absolute hidden lg:block left-[-195px] -bottom-[100px] z-0 aspect-square w-[330px] rounded-full"
                src="/newsletter/bubble-bg.png"
                alt="Bubble Background"
                width={330}
                height={330}
            />
        </div>
    )
}

export default NewsletterClient
