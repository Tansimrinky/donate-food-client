# Community Food Sharing Platform

## Project Description

Our project is a Community Food Sharing Platform, developed using technologies like React, Firebase, Node.js (Express.js), and MongoDB. The platform aims to connect individuals with surplus food to those in need, reducing food waste and addressing hunger. Join us in creating a user-friendly, socially impactful platform that promotes sustainability and community cooperation.

## Layout

- **Navbar and Footer:** Present on all pages except for the 404-page.
- **Footer:** Includes the website logo, name, copyright notice, contact information, social media links, address, etc.

## Technologies Used

- React
- Firebase
- Node.js (Express.js)
- MongoDB
- Tailwind CSS
- [Optional] Try some other Tailwind CSS library for design like Flowbite, Mamba UI, Preline, Chakra UI.

## Navbar

The navbar includes:
- Website name with logo
- Home
- Available Foods
- Add Food
- Manage My Foods
- My Food Request
- Login/Signup

## Login & Registration Systems

- Login Page:
  - Email/Password
  - Google/Github Sign-in
  - Link to the registration page

- Registration Page:
  - Name
  - Email
  - Password
  - Photo URL

Note: Email verification and forget/reset password methods are not enforced.

## Home Page

- Banner/Slider
- Featured Foods
- Show All button
- Extra Sections
- [Optional] Explore new packages like react-elastic-carousel, Lottie-react, Framer-motion, React Hook Form, React Helmet.

## Available Foods Page

- Filter Section (by Food name)
- Sorting Section (by Food Expire Date)
- Foods Section with detailed information
- View Details Button (redirects to Food details page)

## Single Food Details

- Donor Information
- Single Food Section with details
- Request Button (opens a modal with input fields)
- On clicking Request Button, the requested food is added to the database food request collection.

## Add a Food (PRIVATE)

- Add Food form
- Added food is shown in the Available Food Page.

## Manage My Foods (PRIVATE)

- Tabular format showing all foods added by the logged-in user.
- Each card has Edit and Delete buttons.
- Edit opens a modal or another route.
- Delete prompts for confirmation.

## Manage Single Food (PRIVATE)

- Displays food request information.
- Food donor can update request status from pending to delivered.

## My Food Request (PRIVATE)

- Displays all food requests made by the logged-in user.
- Each request includes detailed information.
- Cancel Request Button removes the request if the status is "available."

## Show The Toast

- For all CRUD operations, show relevant toast/notification.
- Avoid using Browser Alert.

## 404 Page

- Displays an interesting jpg/gif.
- Back to home button redirects to the home page.

## Environment Variable

- Use Environment variables to hide Firebase config keys and MongoDB credentials.



## Bonus Requirements

- Commits & Readme: Follow the specified guidelines for committing and creating a README.
- Fix Reload Issue: Ensure that protected/private routes redirect to the login page upon reload.
- Make HomePage Responsive: Adapt the homepage for mobile, tablet, and desktop responsiveness.
- Website Naming: Dynamically change the website title based on the route.
- Do Some Security with JWT: Implement JWT for email/password-based and social login on private routes.
- Optional (Highly Recommended): Implement any two tasks from the optional list.

## What to Submit

1. Client-side code GitHub repository
2. Server-side code GitHub repository
3. Live website link

## Guidelines

- Make sure to host your site on Firebase for the client-side and Vercel for the server-side.
- Deploy both server-side and client-side on the first day.
- If you encounter hosting or GitHub push issues, join the "Github and deploy" support session.

## Additional Information

- You can host images anywhere.
- You can use vanilla CSS or any library.
- Make sure to explore and implement additional optional tasks.

Feel free to add any specific instructions or modifications based on your project's needs.

