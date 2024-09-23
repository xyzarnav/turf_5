# Turf Booking Application

## Overview
This project is a **Turf Booking System** that allows users to browse available sports turfs, check the availability of time slots, and book a turf for various sports. The app handles booking, payment proof submission, and displays available time slots dynamically. It's built with **React**, **Node.js**, **Express**, and **MySQL**.

## Features
- View a list of available turfs with detailed information.
- Filter the turfs according to area . 
- Sort the turfs according to price . 
- Check availability for specific time slots.
- Book turfs for sports like Cricket, Football, and Badminton.
- Upload payment proof as part of the booking process.
- Dynamic availability status (booked slots marked in red).

## Technologies Used
- **Frontend**: React, Ant Design (for DatePicker and Card components)
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Axios**: For API requests
- **Moment.js**: For handling dates

## How to run the project 
- Clone the repo
- Install install dependencies for both the frontend (client) and backend (server).
- You will need to set up the MySQL database using XAMPP. Use the database file to create the database .
- Run the server file by npm start first and then the client file .

## Project Images 
- Login Page 
![image](https://github.com/user-attachments/assets/8d1becf5-efbd-442f-a475-f7e753374935)
- Home Page
  ![image](https://github.com/user-attachments/assets/93da5871-4ed4-4c12-a010-2cd9890ef3f4)
- Booking Page
  ![image](https://github.com/user-attachments/assets/7771ec03-46be-4125-887c-6dcf817dcac3)




## Project Structure

```bash
turfbooking/
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── AddTurf.js          # Page to add new turfs
│   │   │   ├── BookingPage.js      # Turf booking page
│   │   │   ├── Navbar.js           # Navigation bar
│   │   │   ├── Footer.js           # Footer component
│   │   │   ├── AboutUs.js          # About Us page
│   │   │   ├── Availability.js     # Page to show turf availability
│   │   │   ├── Bookings.js         # Page to show user bookings
│   │   │   ├── Carousel.js         # Carousel component for showcasing images
│   │   │   ├── Contact.js          # Contact page
│   │   │   ├── Login.js            # Login page
│   │   │   ├── ProfilePage.js      # User profile page
│   │   │   ├── Register.js         # User registration page
│   │   ├── App.js                  # Main application file
│   │   ├── index.js                # Entry point for React app
│   │   └── AppTurf.css             # Styling for turf components
│   ├── package.json
│   └── README.md
├── server
│   ├── server.js                   # Express server for handling API requests
├── database.sql                    # SQL file for creating necessary database schema

```

## Database Structure 

```bash
database/
├── turfs                     # Stores turf information
│   ├── id                    # Unique identifier for each turf (Primary Key)
│   ├── name                  # Name of the turf
│   ├── price                 # Price to book the turf
│   ├── cricket               # Boolean field indicating if cricket is supported
│   ├── football              # Boolean field indicating if football is supported
│   ├── badminton             # Boolean field indicating if badminton is supported
│   ├── area                  # Area where the turf is located
│   ├── detailed_info         # Additional information about the turf
│   ├── imageURL              # URL to the turf image
│   ├── created_at            # Timestamp when the turf entry was created
├── userprofile               # Stores user profile information
│   ├── UserID                # Unique identifier for each user (Primary Key)
│   ├── FullName              # Full name of the user
│   ├── Email                 # Email of the user (Unique)
│   ├── Password              # Encrypted password of the user
│   ├── DateOfBirth           # Date of birth of the user
│   ├── Gender                # Gender of the user (Male, Female, Other)
├── bookings                  # Stores booking information for turfs
│   ├── id                    # Unique identifier for each booking (Primary Key)
│   ├── name                  # Name of the person making the booking
│   ├── email                 # Email of the person making the booking
│   ├── date                  # Date of the booking
│   ├── time_slot             # Time slot for the booking
│   ├── paymentProof          # File name or path to the payment proof
│   ├── numberOfPeople        # Number of people for the booking
│   ├── turf_id               # Reference to the turf being booked (Foreign Key)
│   ├── created_at            # Timestamp when the booking was created
├── turfavailability          # Stores turf availability status
│   ├── id                    # Unique identifier for each availability entry (Primary Key)
│   ├── turf_id               # Reference to the turf (Foreign Key)
│   ├── date                  # Date for which availability is being checked
│   ├── time_slot             # Time slot for the turf
│   ├── is_available          # Boolean indicating if the turf is available

```

## Webpage Structure 

```bash
Webpages/
├── LoginPage                  # First page user sees, allows login
│   ├── Login Form             # User enters email and password to log in
│   ├── Register Link          # If the user doesn't have an account, they can go to the Register Page
│   ├── Redirect to HomePage   # On successful login, user is redirected to Home Page 
│   
├── RegisterPage               # Registration page for new users
│   ├── Register Form          # User provides name, email, password, and other details
│   ├── Redirect to LoginPage  # After successful registration, user is taken back to LoginPage
│   
├── HomePage                   # Main page after login, shows all available turfs
│   ├── Turf List              # Displays list of turfs with details (name, price, sports supported)
│   ├── Filters                # Allows sorting of turfs based on price and Filtering Based on Area 
│   ├── Navigation Links       # Links to other pages (About, Contact, AddTurf, BookingPage, ProfilePage)
│   
├── AboutUsPage                # Information about the platform
│
├── ContactPage                # Contact information for the platform
│
├── AddTurfPage                # Page for admin or authorized user to add new turfs
│   ├── Add Turf Form          # Form to add a new turf (name, price, sports supported, etc.)
│   
├── BookingPage                # Page to book a turf
│   ├── Turf Details           # Displays detailed information about the selected turf
│   ├── Booking Form           # User selects date, time slot, number of people, and uploads payment proof
│
├── ProfilePage                # User's profile page with their details
│   ├── View Bookings Link     # Link to show the user's bookings
│   
├── ShowBookingsPage           # Page to display user's past and current bookings
│   ├── Booking List           # List of all bookings made by the user


```









