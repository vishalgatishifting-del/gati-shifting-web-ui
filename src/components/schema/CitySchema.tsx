import { Helmet } from "react-helmet-async";

const CitySchema = ({ cityMeta }: any) => {

  if (!cityMeta) return null;


  // BREADCRUMB SCHEMA
  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://gatishiftingpackers.com"
      },

      {
        "@type": "ListItem",

        position: 2,

        name: cityMeta?.city,

        item: `https://gatishiftingpackers.com/packers-and-movers-in-ghaziabad-${cityMeta?.slug}`
      }
    ]
  };

  // SERVICE SCHEMA
  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "MovingCompany",

    name: "Gati Shifting Packers",

    url: `https://gatishiftingpackers.com/city/${cityMeta?.slug}`,

    telephone: "+91-9422799477",

    image: "https://gatishiftingpackers.com/favicon-48x48-v2.png?v=3",

    address: {
      "@type": "PostalAddress",

      streetAddress: cityMeta?.address,

      addressCountry: "IN"
    },

    areaServed: {
      "@type": "City",

      name: cityMeta?.city
    },

    serviceType:
      cityMeta?.pageData?.services?.map(
        (service: any) => service?.linkText
      ) || []
  };

  // REVIEW SCHEMA
  const reviewSchema = {
    "@context": "https://schema.org",

    "@type": "Review",

    reviewRating: {
      "@type": "Rating",

      ratingValue: "5",

      bestRating: "4.8"
    },

    author: {
      "@type": "Person",

      name: "Abhishek Gupta"
    },

    reviewBody:
      `Professional packing and relocation services in ${cityMeta?.city}. Safe delivery and affordable pricing.`,

    itemReviewed: {
      "@type": "MovingCompany",
      name: "Gati Shifting Packers",
      url: `https://gatishiftingpackers.com/city/${cityMeta?.slug}`

    }
  };

  return (
    <Helmet>


      {/* BREADCRUMB SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* SERVICE SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      {/* REVIEW SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>

    </Helmet>
  );
};

export default CitySchema;