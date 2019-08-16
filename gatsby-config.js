module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        // enable or disable gatsby-plugin-mdx
        mdx: true,
        // source directory
        contentPath: "decks",
        // base path for routes generate by this theme
        basePath: "/",
      },
    },
  ],
}
