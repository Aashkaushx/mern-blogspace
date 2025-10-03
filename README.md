📌 Blogging Platform – MERN Stack Project

This is an ongoing full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack, designed to provide a rich blogging experience for users. The goal is to create a secure and engaging platform where users can write, edit, manage, and interact with blogs while also giving administrators control over user management and content moderation.

🔑 Core Features

JWT-based Authentication

Provides secure login and signup for users.

JWT tokens are generated on login and verified on every API request.

Role-based access ensures normal users and admins have different privileges.

Rich Text Blog Editor

Integrated React Quill, a modern text editor, for blog formatting.

Users can add headings, bold/italic text, lists, images, and links.

Content is stored in HTML or Quill Delta format for flexibility.

Blog Management with Media Upload

Users can add, edit, or delete blogs with full CRUD functionality.

Blog images are uploaded to Cloudinary, and their URLs are stored in MongoDB.

This feature supports multimedia-rich blogs.

Like & Comment System

Readers can like blogs and post comments.

All likes and comments are linked with user IDs and stored in MongoDB.

The system prevents multiple likes from the same user, ensuring authenticity.

Profile Management & Admin Dashboard

Users can view and manage their authored blogs from their profile.

Admins have a dedicated panel to manage blogs and users effectively.

Search & Filter Functionality

Blogs can be searched by keywords.

Advanced filters allow sorting by categories or tags, improving discoverability.

🌍 Real-World Application

Practiced end-to-end CRUD operations with Express.js and MongoDB.

Implemented role-based authentication to simulate real-world user/admin flows.

Built a responsive UI with React and connected it with backend APIs.

⚙️ Tech Stack: React.js | Node.js | Express.js | MongoDB | JWT | Multer | Cloudinary

This project demonstrates my ability to build secure, scalable, and user-friendly applications with real-world features that go beyond basic CRUD operations.
