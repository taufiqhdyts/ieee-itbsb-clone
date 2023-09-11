import OrganogramCards from "./OrganogramCards";
import OrganogramCarousel from "./OrganogramCarousel";

const Organogram = () => {
  const organogramData = [
    {
      single: {
        position: "Chairperson",
        name: "Maria Sophie Dewanto",
        url: "/about/organogram/chairperson.png",
        linkedin: "https://www.linkedin.com/in/maria-sophie-dewanto-510562217",
      },
    },
    {
      single: {
        position: "Vice Chairperson",
        name: "Shabrina Mardiyah Gozan",
        url: "/about/organogram/vice-chairperson.png",
        linkedin: "https://www.linkedin.com/in/shabrina-gozan/",
      },
    },
    {
      single: {
        name: "Bright Christian Kusuma",
        position: "General Secretary",
        url: "/about/organogram/general-secretary.png",
        linkedin: "https://www.linkedin.com/in/brightchristian",
      },
      multiple: [
        {
          position: "Director of Sponsorship",
          name: "Athar Mahendra Umar",
          url: "/about/organogram/director-sponsorship.png",
          linkedin: "https://www.linkedin.com/in/athhar-mahendra-b0750221b",
        },
        {
          position: "Director of Finance",
          name: "Nicolas Owen Halim",
          url: "/about/organogram/director-finance.png",
          linkedin: "https://www.linkedin.com/in/nicolas-owen-halim-731966215/",
        },
        {
          position: "Vice Director of Finance",
          name: "Gisela Aurora Gitapoetri",
          url: "/about/organogram/vice-director-finance.png",
          linkedin: "https://www.linkedin.com/in/gisela-aurora-g-757973217",
        },
      ],
    },
    {
      single: {
        name: "Jasmine Callista A.I.",
        position: "Director of Human Resource",
        url: "/about/organogram/director-human-resource.png",
        linkedin: "https://www.linkedin.com/in/jasminecallistaa",
      },
      multiple: [
        {
          position: "Manager of HR Management",
          name: "Hans Forbes Kurniadi",
          url: "/about/organogram/manager-hr-management.png",
          linkedin: "#",
        },
        {
          position: "Manager of HR Development",
          name: "Serena Kristin Hasiana",
          url: "/about/organogram/manager-hr-development.png",
          linkedin: "https://www.linkedin.com/in/serenahasianna",
        },
      ],
    },
    {
      multiple: [
        {
          position: "Vice Director of Event",
          name: "Nafa Lutfia Atihrah Chandra",
          url: "/about/organogram/vice-director-event.png",
          linkedin: "https://www.linkedin.com/in/nafa-lutfia-575597216",
        },
        {
          position: "Director of Event",
          name: "Kinanti Wening Asih",
          url: "/about/organogram/director-event.png",
          linkedin: "https://www.linkedin.com/in/kinanti-wening-asih",
        },
      ],
    },
    {
      multiple: [
        {
          position: "Director of Creative",
          name: "Andersen",
          url: "/about/organogram/director-creative.png",
          linkedin: "https://www.linkedin.com/in/andersen-tan-86b9b5238/",
        },
        {
          position: "Vice Director of Creative",
          name: "Nurshafa Qanita",
          url: "/about/organogram/vice-director-creative.png",
          linkedin: "https://www.linkedin.com/in/nurshafa-qanita-42a184244",
        },
      ],
    },
    {
      single: {
        position: "Director of ExComm",
        name: "Felisa Aidadora Darmawan",
        url: "/about/organogram/director-excomm.png",
        linkedin: "http://linkedin.com/in/felisadarmawan/",
      },
      multiple: [
        {
          position: "Manager of Partnership",
          name: "Syarifa Khairunnisa",
          url: "/about/organogram/manager-partnership.png",
          linkedin: "https://www.linkedin.com/in/syarifakhrns/",
        },
        {
          position: "Manager of Marketing",
          name: "M. Alief Fauzan Bariadi",
          url: "/about/organogram/manager-marketing.png",
          linkedin: "https://www.linkedin.com/in/alief-fauzan-236b2320a/",
        },
      ],
    },
    {
      single: {
        position: "Director of Operations",
        name: "Daven Darmawan Sendjaya",
        url: "/about/organogram/director-operations.png",
        linkedin: "https://www.linkedin.com/in/daven-ds/",
      },
      multiple: [
        {
          position: "Manager of Logistics",
          name: "Samuel Irving Pudinaung",
          url: "/about/organogram/manager-logistic.png",
          linkedin: "https://www.linkedin.com/in/samuel-irving-pudinaung-881076248",
        },
        {
          position: "Manager of Web Development",
          name: "Ivan Leovandi",
          url: "/about/organogram/manager-web-dev.png",
          linkedin: "https://www.linkedin.com/in/ivanleovandi/",
        },
        {
          position: "Vice Manager of Web Development",
          name: "Ceavin Rufus D.P.B",
          url: "/about/organogram/vice-manager-web-dev.png",
          linkedin: "https://www.linkedin.com/in/ceavinrufus/",
        },
      ],
    },
    {
      single: {
        position: "Director of Academics",
        name: "Fathiya Amani Shabira",
        url: "/about/organogram/director-academics.png",
        linkedin: "https://www.linkedin.com/in/fathiya-amani-s-0673821b1",
      },
      multiple: [
        {
          position: "Manager of Paper",
          name: "Syandana Fadhil Sulistyawan",
          url: "/about/organogram/manager-paper.png",
          linkedin: "https://www.linkedin.com/in/syandana-fadhil-s/",
        },
        {
          position: "Manager of Project",
          name: "Attariq M. Azhar",
          url: "/about/organogram/manager-project.png",
          linkedin: "https://www.linkedin.com/in/attariqmuhammadazhar/",
        },
        {
          position: "Manager of Competition",
          name: "Rachel Gabriela Chen",
          url: "/about/organogram/manager-competition.png",
          linkedin: "https://www.linkedin.com/in/rachel-gc",
        },
      ],
    },
  ];

  return (
    <ul className="flex flex-col items-center gap-20 lg:gap-32">
      {organogramData.map((data, index) => {
        return (
          <li key={index} className="flex flex-col items-center gap-12">
            {/* Single Data */}
            {data.single && (
              <OrganogramCards
                name={data.single.name}
                position={data.single.position}
                url={data.single.url}
                linkedin={data.single.linkedin}
              />
            )}

            {/* Multiple data / Carousel */}
            {data.multiple && (
              <>
                {/* Small viewport, Carousel */}
                <div className="lg:hidden">
                  <OrganogramCarousel data={data.multiple} />
                </div>

                {/* Large viewport, List, No Carousel */}
                <ul className="hidden lg:flex lg:flex-row lg:gap-10">
                  {data.multiple.map((data, index) => {
                    return (
                      <li key={index} className="lg:flex">
                        <OrganogramCards
                          key={index}
                          position={data.position}
                          name={data.name}
                          url={data.url}
                          linkedin={data.linkedin}
                        />
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Organogram;
