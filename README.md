# The Little Herbal Store

Welcome to the Herbalist app - your gateway to the world of natural wellness through herbs. Explore herbs and their potential to support your health journey. Edit existing products and add you favorites!

## Instructions on Installing This Project

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open the repository in VSCode.

   ```
   code .
   ```

## Features

  React application that allows for CRUD operations to be performed on a single resource, Products.

### Navigation Bar

The navigation bar will be present one every page where you will have the option to create a new snack.

### Index Page / All Products

The Index page presents all of the resources in our database table.
When a Product is clicked, you will be brought to the Product Show page.

### Product Show Page

The Show Page includes more detailed information about the specific Product.
You can also edit the existing Product's details on an Edit Form page.
When done editing, you will get sent back to that Product's updated show page.
You will also have the option to delete a Product which will ask you to confirm before deleting the Product and bringing you back to the Products Index page.

### New Product Form

When the create new Product button in the navigation bar is clicked, you will be brought to a new page that includes a form to create a new Product.

When you submit the new Product form, the new Product will be created in the database and you will be brought to that Product's show page.

## Dependencies to install

The Snack App Frontend relies on the following dependencies:
`React` - A JavaScript library for building user interfaces.

`axios` -
A promise-based HTTP client for making API requests.

`react-router-dom` - A routing library for React applications.

### Deployment

- Backend [GitHub](https://backend-final-herbal-store.onrender.com/products)
- Frontend [DeployedSite](https://final-project-frontend-herbalstore.netlify.app/)

