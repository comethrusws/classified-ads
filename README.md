# Classifieds Ads Marketplace

## Overview

Classifieds Marketplace is a web application for listing and browsing motorbike ads. Built with Next.js, TypeScript, Tailwind CSS, and using a MongoDB backend, this project provides an intuitive interface for users to create, view, and manage bike listings. 

## Features

- **User Authentication**: Secure login and registration for users.
- **Ad Creation**: Easily create and publish bike ads with images and details.
- **Ad Management**: Edit and delete your ads.
- **Location Integration**: Visualize ad locations on an interactive map using Leaflet.
- **Responsive Design**: Fully responsive UI that works well on both desktop and mobile devices.

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, Shadcn components.
- **Backend**: Next.js API routes.
- **Map Integration**: Leaflet for open-source mapping.


## Installation

### Prerequisites

- Node.js (>=14.x)
- npm or Yarn

### Clone the Repository

```bash
git clone https://github.com/yourusername/bike-classifieds-marketplace.git
cd bike-classifieds-marketplace

Install Dependencies

bash

npm install
# or
yarn install

Environment Variables

Create a .env.local file in the root of the project and add the necessary environment variables. For example:

env

NEXT_PUBLIC_MAPS_KEY=your-leaflet-api-key
DATABASE_URL=your-mongodb-connection-string
NEXTAUTH_SECRET=your-next-auth-secret

Run the Development Server

bash

npm run dev
# or
yarn dev

Navigate to http://localhost:3000 to view the application.
Building and Deploying

To build the project for production, run:

bash

npm run build
# or
yarn build

To start the production server locally:

bash

npm start
# or
yarn start
