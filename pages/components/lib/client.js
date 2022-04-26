import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
 
export const client = sanityClient({
    projectId: '5k92dslg',
    dataset: 'production',
    apiVersion: '2022-04-24',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true

})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)

// import sanityClient from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';

// export const client = sanityClient({
//   projectId: '5k92dslg',
//   dataset: 'production',
//   apiVersion: '2022-04-24',
//   useCdn: true,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);