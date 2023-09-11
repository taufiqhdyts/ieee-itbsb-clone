import News from "@/components/News"
import { performRequest } from "@/lib/datocms";

const PAGE_CONTENT_QUERY = `
query Newsletter($slug: String){
  newsletter(filter: {slug: {eq: $slug}}) {
    author
    content {
      value
      blocks {
        __typename
        ... on ImageRecord {
          id
          image {
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
        }
      }
    }
    image {
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
    _firstPublishedAt
    slug
    title
    id
  }
}
`

export const metadata = { title: "Newsletter | IEEE ITB SB 2023" }

export default async function NewsLetterPage({ params }: { params: { id: string } }) {
  const { newsletter } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: { slug: params.id }
  });

  return (
    <main className="bg-gradient-to-b from-primary-2-very-dark-purple py-28 lg:py-48 sm:px-10 via-[#3C1859] via-30% to-[#652D92] min-h-screen">
      {newsletter && <News
        subscription={{
          ...{ query: PAGE_CONTENT_QUERY, variables: { slug: params.id } },
          initialData: newsletter,
          token: process.env.NEXT_DATOCMS_API_TOKEN,
        }}
      />}
    </main>
  )
} 