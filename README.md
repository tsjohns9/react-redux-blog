# React-Redux Blog

This blog was built to demonstrate the use of React and Redux in conjunction with RESTful HTTP services with the JSON placeholder API, as well as unit testing with Jest.

## User Stories

1. As a user I can see a list of posts on the home page.
2. Each post will display the following:
  - A link to preview the post
  - A thumbnail image for the post
  - A truncated title if it is longer than 15 characters
  - Truncated post content if it is longer than 30 characters
  - The Authors name
3. On the post page I should see the following:
  - A big image for the post
  - The title of the post
  - The post content
  - Comments associated to the post
  - The name of the author, with a link to the authors page
  - The ability to anonymously create a new comment, and persist the comment to the post
4. On the author's page I should see a Google map with the author's location, and the authors contact information
5. As a user, I should be able to create a new post, see the post on the home page, and view, add comments, and interact with it like any normal post.
6. Creating a new post and a new comment should show a success message when successful, and an error message if the form is invalid
