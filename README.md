# The King's Temple Church Website

This repository contains the codebase for The King's Temple Church website. The website is available at [kingstemple.in](https://kingstemple.in) and is built using Next.js, a React framework that enables features such as server-side rendering and static site generation, and Tailwind CSS for styling.

## Overview

The King's Temple Church is one of the fastest-growing churches in the world, with a dynamic presence both offline and online. The website serves as a digital extension of this presence, providing an accessible platform for church members and visitors to learn more about the church's activities, connect, and contribute online. With an active membership of over 10,000 people offline and reaching millions online every month, The King's Temple Church expands its reach to every continent and over 30+ countries, with more than 2000+ people considering The King's Temple Church as their home.

## Tech Stack

- **Next.js**: The primary framework used for building the website.
- **Tailwind CSS**: Used for styling the website.
- **TypeScript**: The main programming language used.
- **React**: JavaScript library for building user interfaces.
- **Razorpay**: Payment gateway integrated for online transactions.
- **Stripe**: Payment gateway integrated for online transactions.

## Repository Structure

- `/app`: Contains different components of the application like `connect`, `giving`, `ministries`, and others. Each of these sub-folders contains TypeScript files defining the functionality for each component.
- `/pages`: This directory contains pages of the website which are mapped to a route based on its file name.
  - `/api`: This subdirectory inside `/pages` contains server-side functions that handle backend functionality of the website.
- `/public`: This directory contains static resources such as images used in the website.
- `/styles`: Contains global CSS styles for the website.
- `package.json`: This file contains the list of project dependencies and scripts.

## Installation and Setup

To set up and run this project locally for development purposes, you'll need to have Node.js and npm installed on your local machine. Follow the steps below:

1. Clone the repository to your local machine using `git clone https://github.com/tktchurch/website.git`
2. Navigate to the project directory with `cd website`
3. Install the project dependencies with `npm install`
4. Start the development server with `npm run dev`

This starts the development server on `localhost:3000`.

## Deployment

This website is hosted on DigitalOcean's App Platform. The `npm run build` script is used to create an optimized production build of the website, and `npm start` starts the application in production mode.

## Contributing

Contributions to the project are welcome. Please ensure that you adhere to our coding standards and commit message guidelines when making a pull request. For major changes, please open an issue first to discuss the change.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

For any questions, issues, or feedback, please create an issue on this repository, and we will address it promptly.
