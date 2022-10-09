import { NextSeo } from "next-seo";

const title = "Hack Bahamas";
const description =
  "Hack Bahamas is a 48-hour hackathon that will be held in-person on December 16th 2022, in Nassau, Bahamas.";
const url = "https://hackbahamas.com";

const Meta = () => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url,
          type: "website",
          images: [
            {
              url: `${url}/og.png`,
              width: 1200,
              height: 630,
              alt: "Hack Bahamas. An in-person hackathon in Nassau, Bahamas. December 16th, 2022",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};

export default Meta;
