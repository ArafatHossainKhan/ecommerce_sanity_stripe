/** @type {import('next').NextConfig} */



const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
    // next config
});
module.exports = nextConfig;

// const withPWA = require('next-pwa');

// const nextConfig = withPWA({
//   reactStrictMode: false,

//  withPWA:{
 
//     dest: "public",
//     register: true,
//     skipWaiting: true
  
//  }
  
 
  
// })

// module.exports = nextConfig
