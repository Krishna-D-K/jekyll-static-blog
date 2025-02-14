---
title: Backtracing the Origins
author: Krishna
categories: [Tech]
description: Even we had blogspot and medium, why create a new blog website?
comments: true
pin: false
image: /assets/cover/backtracing-the-origins.jpg
tags: ['beginning']     # TAG names should always be lowercase
---

What motivated me to create this blog website? Actually, it never began as a blog website. It all started when I created my first independently made website Average_Satti.  This was a CRUD application integrated with JWT authentication( not Firebase cause I wanted to learn about JWT) and Google Drive API.  Though it may seem very basic to me at this time, I was pretty excited about it. But during the beta testing of the site (yes, I'm being technical), I realised that I'm lacking the most basic project that a web developer has. That is his own, made using the bits and pieces of HTML and CSS knowledge gathered till now, portfolio website.

So I began to develop the portfolio website until I came across this Medium article. Forget about the getting-the-jobs part, I personally love to write about the kinds of stuff that all come to my mind (the reason why I joined TSA, and partly because I couldn't make it into TLS 😢). The most appealing thing was as if I was looking back to the time when I read those blogs. So, I decided to begin writing blogs. But I needed a platform for it. So while developing the portfolio website, I decided to make a blogging platform alongside. And the cherry on the cake is to integrate it with my portfolio website.
> ##### Every Pro once started as a Noob

Truly said in the medium blog, I faced a lot of difficulties in making the website. Not having prior knowledge about SEO, static-site generators, headless CMS, webhooks and other kinds of stuff, it took me a lot of time to pick the right stack for me. I finally decided to with the following stack:

GatsbyJS: Because I had experience working in ReactJS, the only new thing I needed was to generate the pages programmatically.
Sanity-io: Had many options for headless CMS, but the flexibility it provides for the sanity studio schema design and Graphql database impressed me.
Vercel: For hosting the website, I thought to rather go with Vercel than Netlify.

But the thing that was the most irritating was I didn't know I needed a webhook between Sanity and Vercel for automatic deployments. I nearly spent 2 hours configuring this😖. And finally, I had this site done and working, and I'm quite proud of myself.

Also, Shivam Kumar Jha's site ([thealphadollar.me](https://thealphadollar.me)) and Brittany Chiang's site ([brittanychiang.com](https://brittanychiang.com)) were quite helpful in making this site and giving me the ideas for the frontend development of it (you'll probably see it😂).


Signing off,
Hasta Luego!!

P.S. I later migrated to Contentful from Sanity because of the simplistic schema creation and overall UI. Also for their preview API :)

