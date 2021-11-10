import {gql, GraphQLClient} from "graphql-request";

const client = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/cksgedybb0l0701xr4nohe4a2/master');

// Get all blog posts
export const getAllPosts = async () => {
    const query = gql`
     {
      blogs {
        id
        title
        slug
        summary
        content {
           raw
           html
           markdown
           text
        }
        publishedAt
      
      }
    }
  `;

    return await client.request(query);
};

// Get a blog post
export const getPost = async (slug) => {
    const query = gql`
     {
      blogs(where: { slug: "${slug}" }) {
        id
        title
        slug
        summary
        content {
           raw
           html
           markdown
           text
        }
        publishedAt,
        createdBy {
          name
          picture
        }
      }
    }
  `;

    return await client.request(query);
};


export const getAllPostsPaths = async () => {
    const posts = await getAllPosts();


    return posts.blogs.map((post) => {
        return {
            params: {
                id:   post.id,
                slug: post.slug,
            },
        };
    });
};
