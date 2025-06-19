# 🧑‍💻 Job Hunter - Full Stack Job Portal

**Job Hunter** is a modern full-stack web application designed to streamline job posting and job hunting processes. Built with React, Node.js, Express, and MongoDB, it offers a smooth user experience and powerful job management features.

---
## 🚀 Live Site
🌐 [https://job-hunter-7315a.web.app/](https://job-hunter-7315a.web.app/)
---
## 🚀 Features

### ✅ 1. Responsive Design
- Fully responsive for **mobile**, **tablet**, and **desktop** using Tailwind CSS.

### 🔐 2. Authentication System
- Email/password login
- Google login via Firebase
- JWT-based protected routes

### 💼 3. Job Management
- Add, update, delete, and view job postings
- Filter jobs by recruiter email
- Paginated job listing for better performance

### 📄 4. Pagination in Jobs Page
- Server-side pagination implemented
- Uses query parameters (`page`, `limit`) to efficiently fetch job data
- Improves UX on `/jobs` route with navigation between pages

### 📝 5. Job Applications
- Apply to jobs with detailed forms
- One user cannot apply for the same job more than once
- Applications are user-specific and stored securely

---

## 📄 Pages Overview

### 🏠 Home Page (`/`)
- **Animated Header**: Built with Framer Motion for smooth image/text transitions
- **Job Cards**: Display summary info with “Details” button

### 🔎 Jobs Page (`/jobs`) *(Private Route)*
- Displays job listings with **pagination**
- Data fetched dynamically from backend with `/jobCount` for total records
- Only authenticated users can access
- Implemented searching and sorting in the jobs cards

### 📋 Job Details Page (`/job/:id`) *(Private Route)*
- View job description, company info, and requirements
- Apply to job via a form
- Uses **React Toastify** for feedback

### 📥 My Applications Page (`/myApplications`) *(Private Route)*
- Displays all jobs the user has applied to
- Matches applications by email address

### 📤 My Posted Jobs Page (`/myPostedJobs`) *(Private Route)*
- View jobs posted by the logged-in user
- Manage job posts (edit, delete)

---

## 🛠 Tech Stack

| Category       | Technology                                   |
|----------------|-----------------------------------------------|
| Frontend       | React, Tailwind CSS, React Router, Framer Motion |
| Backend        | Node.js, Express.js                          |
| Database       | MongoDB      |
| Auth           | Firebase Authentication, JWT                 |
| Deployment     | Firebase Hosting (Frontend), Vercel (Backend) |


---


If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
"# Job-Hunter" 
