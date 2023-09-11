import ScoreBoardClient from '@/components/ScoreBoardClient'
import { performRequest } from '@/lib/datocms';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Scoreboard | IEEE ITB Student Branch",
  description:
    "IEEE is the world's largest technical society dedicated to advancing innovation and technological excellence for the benefit of humanity. In line with that purpose, IEEE ITB Student Branch, as a part of the Indonesia Section, strives to realize our vision: Engineering Human Excellence. By giving vast exposure to technology, advocating for collaboration, and providing a network for students, academia, and industry, we aim to create a greater impact on society.",
};
const ScoreBoardPage = async () => {
  const PAGE_CONTENT_QUERY = ` {
    allScoreboards(filter: {}, orderBy: division_ASC) {
      achievements {
        value
      }
      division
      id
      image {
        width
        url
        alt
        height
      }
      name
      score
      positionDivision
    }
      }`
  const { allScoreboards: data } = await performRequest({ query: PAGE_CONTENT_QUERY });
  return (
    <main className="bg-gradient-to-b from-primary-2-very-dark-purple via-[#3C1859] via-30% to-[#652D92] overflow-hidden py-28 lg:py-48 sm:px-10 min-h-screen">
      {/* Title Page */}
      <h1 className="bg-gradient-to-r text-center from-[#D146FF] from-30% via-[#F9BED4] to-[#FFFFFF] via-55% bg-clip-text font-poppins font-bold text-4xl lg:text-6xl capitalize lg:uppercase leading-none text-transparent xl:text-6xl xl:leading-none">Scoreboard</h1>
      {/* Section Mapping Newsletter Card */}
      <ScoreBoardClient data={data} />

    </main>
  )
}

export default ScoreBoardPage
