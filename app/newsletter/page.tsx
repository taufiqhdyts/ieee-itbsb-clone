import NewsletterClient from "@/components/NewsletterClient"
import { performRequest } from "@/lib/datocms";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Newsletter | IEEE ITB Student Branch",
    description:
        "IEEE is the world's largest technical society dedicated to advancing innovation and technological excellence for the benefit of humanity. In line with that purpose, IEEE ITB Student Branch, as a part of the Indonesia Section, strives to realize our vision: Engineering Human Excellence. By giving vast exposure to technology, advocating for collaboration, and providing a network for students, academia, and industry, we aim to create a greater impact on society.",
};

const PAGE_CONTENT_QUERY = ` {
    allNewsletters {
        id
        title
        slug
        summary
        _firstPublishedAt
        author
        image {
          id
          url
          alt
          height
          width
          responsiveImage {
            alt
            aspectRatio
            base64
            bgColor
            height
            sizes
            src
            srcSet
            title
            webpSrcSet
            width
          }
        }
}}`;


export default async function NewsLetterPage() {
    const {allNewsletters}  = await performRequest({ query: PAGE_CONTENT_QUERY });

    return (
        <main className="bg-gradient-to-b overflow-hidden from-primary-2-very-dark-purple py-28 lg:py-48 sm:px-10 via-[#3C1859] via-30% to-[#652D92] min-h-screen">
            {/* Section Mapping Newsletter Card */}
            {allNewsletters && <NewsletterClient
                subscription={{
                    ...{ query: PAGE_CONTENT_QUERY },
                    initialData: allNewsletters,
                    token: process.env.NEXT_DATOCMS_API_TOKEN,
                }}
            />}
        </main>
    )
} 