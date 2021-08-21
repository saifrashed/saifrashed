import { NextSeo, ArticleJsonLd } from "next-seo";

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();

  return (
    <>
      <NextSeo
        title={`${title} – Saif Rashed`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [
            {
              url: image,
              width: 2240,
              height: 1260,
              alt: title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        authorName="Saif Rashed"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[image]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Saif Rashed"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
