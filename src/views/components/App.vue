<template>
    <router-view></router-view>
</template>

<style>
    @import '../../../static/css/style.css';
    @import '../../../static/css/animate.css';

</style>

<script>


  export default {
    name: 'RootLayout',
    head: {
      // Meta tags
      meta: [
        {name: 'application-name', content: 'ClassGotcha'},
        // {name: 'description', content: 'A description of the page', id: 'desc'}, // id to replace intead of create element
        // ...
        // Twitter
        // {name: 'twitter:title', content: 'Content Title'},
        // with shorthand
        // {n: 'twitter:description', c: 'Content description less than 200 characters'},
        // ...
        // Google+ / Schema.org
        // { itemprop: 'name', content: 'Content Title' },
        // { itemprop: 'description', content: 'Content Title' },
        // ...
        // Facebook / Open Graph
        // { property: 'fb:app_id', content: '123456789' },
        // { property: 'og:title', content: 'Content Title' },
        // with shorthand
        // { p: 'og:image', c: 'https://example.com/image.jpg' },
        // ...
      ],
      // link tags
      link: [
        // { rel: 'canonical', href: 'http://example.com/#!/contact/', id: 'canonical' },
        {rel: 'author', href: 'author', undo: false}, // undo property - not to remove the element
        {rel: 'icon', href: require('../../../static/favicon/favicon-32x32.png'), sizes: '16x16', type: 'image/png'},
      ]
    }
  }

</script>
