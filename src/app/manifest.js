export default function manifest() {
  return {
    name: 'Treasured Care For You',
    short_name: 'Treasured Care For You',
    description: 'Discover a community where independence is cherished. Treasured Care For You offers personalised NDIS support in a caring and welcoming environment for individuals and families',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [ 
      {
        src: '/logo1.png', 
        sizes: '192x192',
        type: 'image/png', 
      },
      {
        src: '/logo1.png', 
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}