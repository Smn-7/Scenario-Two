Welcome to "Scenario Two": A Blog About Focus

Hey there! This is the code for my blog about focus and digital well-being.

The blog's main idea is comparing two scenarios:

Scenario 1: A more focused, analog way of living.

Scenario 2: Our default mode today—distracted and always online.

The goal is to find ways to get back the focus of "Scenario 1" without ditching our tech.

Check Out the Live Site!

You can see the finished blog, live and deployed, right here:

➡️ https://smn-7.github.io/Scenario-Two/


A Quick Look at the Tech Setup

This project is built "headless." The blog posts (text, titles, etc.) are all stored in simple JSON files, separate from the React code that makes the blog look pretty.

This makes it super easy to edit content or add new posts.

How the Post Data is Set Up

All posts are driven by this simple JSON structure:

{
  "id": "number",
  "slug": "string (URL-friendly)",
  "title": "string",
  "date": "string",
  "excerpt": "string",
  "content": "string (HTML-formatted)"
}


What Each Field Means:

id: A unique number for the post (used by React).

slug: The clean string used in the URL (e.g., .../blog/my-post).

title: The main title of the post.

date: The publication date.

excerpt: A short summary for the homepage.

content: The full blog post, stored as an HTML string.
