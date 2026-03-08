# Testing a Vue Application with Vue Router and Pinia Store

## Overview

This project is a Vue application built to explore and test the features of tVue Router and Pinia. The application fetches random user data from the Random User API: `https://randomuser.me/api/?results=3`.

The data is displayed as interactive cards with responsive layout and simple animations.

Users can:

- Browse a list of randomly generated people
- View additional information on hover (desktop)
- See additional details directly on mobile devices
- Navigate to a detail page for each person

The project also demonstrates how to persist application state using localStorage, ensuring that previously fetched data remains available when navigating between pages.

---

## Features

- Vue Router for page navigation
- Pinia for centralized state management
- Axios for API requests
- State persistence using localStorage
- Responsive card layout

---

## Technologies Used

- Vue 3
- Vue Router
- Pinia
- Axios
- Pug
- Less / CSS
- Font Awesome

---

## Installation

Clone the repository and install dependencies.

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will typically run at:

```
http://localhost:5173
```

---

## Build for Production

To build the project for production:

```bash
npm run build
```

---

## Application Structure

### Home Page

The Home page displays a list of randomly generated users.

Each card initially shows:

- User image
- User name

On desktop devices, hovering over the card reveals additional information:

- Email
- "More details" link

On mobile devices, all information is visible by default because hover interactions are not available.

---

### Person Detail Page

Clicking "More details" navigates to a dedicated page showing:

- Larger profile image
- Full name
- Email
- Location
- Short biography text (dummy text)

"Back to Home" button allows users to return to the main page while preserving previously fetched data.

---

## API

User data is fetched from the Random User API:

```
https://randomuser.me/api/?results=3
```
