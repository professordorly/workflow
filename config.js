const config = {
  title: "My Awesome Blog",
  description: "This is my awesome blog built with Flowershow",
  author: "John",
  // logo image
  authorLogo: "/images/logo.svg",
  // url to author website
//   authorUrl: "https://john.app/",
  // links to the pages you want to link to in the navbar
  navLinks: [{ href: "/about", name: "About" }],
  // any folders/files that you want to exclude from being published; all other files in your content folder will be published
  contentExclude: ["docs/testpage.md"],
  // publish only these folders/files in your content folder (you can combine contentInclude and contentExclude)
  contentInclude: ["docs"],
};

const userConfig = {
    navBarTitle: {
      text: "Your custom title here",
      logo: "/assets/your-logo.svg",
    },
  };
  

export default config;

// const userConfig = {
//   // links to the pages you want to add to the navbar
//   navLinks: [
//     { href: '/about', name: 'About' },
//     //dropdown menu should not have an href and should contain 'subItems' array
//     {name: 'DropdownExample', subItems: [{href: '/goToLink1', name: 'Link1'}, {href: 'goToLink2', name: 'Link2}]}
//   ],
// }

// export default userConfig

