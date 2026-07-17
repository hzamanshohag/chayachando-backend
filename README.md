# bd-news-backend

Live Deployment Link [digital-pulse](https://digital-pulse-assignment-3.vercel.app/).

## digital-pulse-api

<!-- - Create User **POST** `https://digital-pulse-assignment-3.vercel.app/api/user/create-user` -->

- Create Admin **POST** `https://digital-pulse-assignment-3.vercel.app/api/user/create-admin`
- Register User **POST** `https://digital-pulse-assignment-3.vercel.app/api/auth/register`
- Auth Login **POST** `https://digital-pulse-assignment-3.vercel.app/api/auth/login`
- Auth Login **POST** `https://digital-pulse-assignment-3.vercel.app/api/auth/login`
- All Blogs **GET** `https://digital-pulse-assignment-3.vercel.app/api/blogs?sortOrder=desc&sortBy=createdAt&search=Marketing&filter=authorId`
- Create Blog **POST** `https://digital-pulse-assignment-3.vercel.app/api/blogs`
- Update Blog **PATCH** `https://digital-pulse-assignment-3.vercel.app/api/blogs/blogId`
- Delete Blog **DELETE** `https://digital-pulse-assignment-3.vercel.app/api/blogs/blogId`
- Admin - Block User **PATCH** `https://digital-pulse-assignment-3.vercel.app/api/admin/users/:userId/block`
- Admin - Blog User **PATCH** `https://digital-pulse-assignment-3.vercel.app/api/admin/blogs/:blogId`

## Package Management

- ts-node

## Project Command

- You can run this app ( npm run dev)
- You can build this app (npm run build)

# Blog Project Name: Digital- Pulse

## Overview

The goal of this assignment is to develop a backend for a blogging platform where users can write, update, and delete their blogs. The system will have two roles: **Admin** and **User**. The Admin has special permissions to manage users and their blogs, while users can perform CRUD operations on their own blogs. The backend will include secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.

---

## Technologies

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**

---
