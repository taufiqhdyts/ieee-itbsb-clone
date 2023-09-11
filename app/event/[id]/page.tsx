import type { Metadata } from "next";
import Event from "@/components/Event"
import { performRequest } from "@/lib/datocms";

const PAGE_CONTENT_QUERY = `
query Event($ItemId: ItemId) {
  event(filter: {id: {eq: $ItemId}}) {
    description {
      value
    }
    _firstPublishedAt
    dateTime
    speakers {
      id
      name
      image {
        url
      }
    }
    timeline {
      id
      date
      description
      title
    }
    title
    images {
      image {
        id
        alt
        url
        width
        height
      }
    }
  }
}
`;

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  // Get event data from CMS

  return {
    title: `Event Title`,
    description: `Event Description`,
  };
};

const EventPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Get data from CMS
  const { event } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: { ItemId: id },
  });

  return (
    <main>
      {event && <Event
        subscription={{
          ...{ query: PAGE_CONTENT_QUERY, variables: { ItemId: id } },
          initialData: event,
          token: process.env.NEXT_DATOCMS_API_TOKEN,
        }}
      />}
    </main>
  );
};

export default EventPage;
