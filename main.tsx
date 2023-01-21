/** @jsx h */

import blog, { ga, redirects } from "https://deno.land/x/blog/blog.tsx";
import unocss_opts  from "https://deno.land/x/htm/plugins/unocss.ts";

blog({
  author: "Philippe",
  title: "Philippe's how-to",
  description: "tech secrets revealed",
  avatar: "tree.jpg",
  avatarClass: "rounded-full",
  coverTextColor: "grey",
  links: [
    { title: "Email", url: "mailto:philhu@tyxio.com" },
    { title: "GitHub", url: "https://github.com/philhu22" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/philippehuet/" },
  ],
  lang: "en",
  favicon: "favicon.ico",
  theme: "dark",
  // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  middlewares: [
    ga("UA-XXXXXXXX-X"),
    redirects({
      "/foo": "/my_post",
      // you can skip leading slashes too
      "bar": "my_post2",
    }),
  ],
 // unocss: unocss_opts, // check https://github.com/unocss/unocss


  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
