# 🚀 QuickLink — URL Shortener

A full-stack URL shortening platform built with the MERN stack.  
Create short, shareable URLs, track clicks, manage links, and generate QR codes through a responsive dashboard.

## 🌐 Live Demo

https://quicklink-sudhanshu.pages.dev

## ✨ Features

- Shorten long URLs with unique short codes
- Create custom aliases for personalized URLs
- Track clicks on shortened URLs
- Redirect short URLs to their original destination
- Set link expiry
- Generate QR codes for short URLs
- Copy short URLs to the clipboard
- Delete shortened URLs
- Validate URLs on the server
- Paginated URL listing
- Display current page and total pages
- Show newest links first
- Responsive dark-themed interface
- Loading, error, and success states

## 🛠️ Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js
- Mongoose
- Axios
- TanStack Query
- React Hook Form
- Tailwind CSS
- Lucide React
- QRCode React

## 🎯 Technical Highlights

- Built RESTful APIs using Express.js
- Designed MongoDB schemas using Mongoose
- Implemented unique short-code generation with collision handling
- Implemented server-side URL validation
- Implemented pagination using `countDocuments()`
- Used MongoDB `$inc` for atomic click-count updates
- Used TanStack Query for caching, invalidation, and refetching
- Used React Hook Form for form handling and validation
- Implemented clipboard and QR-code functionality
- Used environment variables for configuration
- Built a responsive frontend with Tailwind CSS

## 🚀 Future Improvements

- User authentication and personal URL management
- Advanced click analytics and charts
- Rate limiting and abuse protection
- Admin dashboard

## 👨‍💻 Author

**Sudhanshu Shukla**

[GitHub](https://github.com/ErSudhanshuShukla) | [LinkedIn](https://www.linkedin.com/in/ErSudhanshuShukla)