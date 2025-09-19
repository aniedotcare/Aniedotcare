# Anie Denaud - Doula Website

This is a simple, static website for Anie Denaud, a doula based in Brooklyn, NY.

## Project Structure

-   `/`: Contains the HTML files for each page of the website.
-   `/css`: Contains the stylesheet for the website.
-   `/assets`: Contains images and other static assets.
-   `/content`: Contains the markdown files with the content for the website.
-   `/legal`: Contains the HTML files for the legal pages.

## Deployment

This is a static website, so it can be deployed to any static hosting provider. Here are instructions for deploying to Netlify and GitHub Pages.

### Option 1: Deploying to Netlify (Recommended)

Netlify is a great option for deploying static websites. It offers a free tier and a simple deployment process.

1.  **Create a new repository on GitHub, GitLab, or Bitbucket** and push the code to it.
2.  **Sign up for a free account** at [https://www.netlify.com/](https://www.netlify.com/).
3.  **Click the "New site from Git" button** on your Netlify dashboard.
4.  **Connect your Git provider** (GitHub, GitLab, or Bitbucket).
5.  **Select the repository** for this website.
6.  **Configure the build settings:**
    -   **Branch to deploy:** `main` (or your default branch)
    -   **Build command:** Leave this blank.
    -   **Publish directory:** Leave this as the root of the project.
7.  **Click the "Deploy site" button.**

Netlify will now build and deploy your website. You'll be given a unique URL for your site, and you can also set up a custom domain.

### Option 2: Deploying to GitHub Pages

If you are already using GitHub to host your code, GitHub Pages is a convenient option.

1.  **Make sure your code is in a GitHub repository.**
2.  **Go to the "Settings" tab** of your repository on GitHub.
3.  **Click on the "Pages" tab** in the left-hand sidebar.
4.  **Under "Source", select the branch** you want to deploy from (usually `main`).
5.  **Select the root directory** as the source for your site.
6.  **Click the "Save" button.**

GitHub will now build and deploy your website. It will be available at `https://<your-username>.github.io/<your-repository-name>/`. You can also set up a custom domain.

## Forms & Booking

This website uses Formspree for the contact form and Calendly for booking consultations. Please see the `forms_setup.md` file for instructions on how to set these up.
