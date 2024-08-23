# Snapsizer

Snapsizer is a web application designed to help you resize your videos and photos with ease. It also provides pre-defined frames optimized for social media platforms like Instagram, Twitter, and Facebook. Additionally, Snapsizer allows users to compress video sizes, making it easier to share them across various platforms.

## Features

- **Resize Photos and Videos**: Quickly resize your media files to fit your needs.
- **Social Media Frames**: Apply frames specifically tailored for Instagram posts, Twitter posts, Facebook posts, and more.
- **Video Compression**: Reduce the size of your videos while maintaining quality for easier sharing and storage.
- **User Authentication**: Secure login and signup using Clerk's authentication.
- **Cloudinary Integration**: Efficiently manage and store your media files with Cloudinary.
- **Responsive Design**: Optimized for various screen sizes with a sleek and modern UI using Tailwind CSS and DaisyUI.
- **Smooth Animations**: Enjoy a visually pleasing experience with Framer Motion.

## Tech Stack

- **Frontend**: 
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Framer Motion](https://www.framer.com/motion/)
  - [DaisyUI](https://daisyui.com/)
  - [AceternityUI](https://ui.aceternity.com/)
  
- **Backend**: 
  - [Prisma](https://www.prisma.io/) for database ORM
  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) for serverless functions

- **Media Management**: 
  - [Cloudinary](https://cloudinary.com/) for image and video processing and storage
  - [next-cloudinary](https://next-cloudinary.dev/) for seamless integration with Next.js

- **Authentication**: 
  - [Clerk](https://clerk.dev/) for user authentication and management

- **Utilities**: 
  - [Axios](https://axios-http.com/) for HTTP requests
  - [dayjs](https://day.js.org/) for date manipulation
  - [filesize](https://filesizejs.com/) for file size management

## Installation

To get started with Snapsizer locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/mauryavinay1407/snapsizer-saas.git
    cd snapsizer-saas
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root of the project.
    - Add your environment variables (e.g., database connection string, Cloudinary credentials, Clerk API keys).

4. **Run Prisma migrations**:
    ```bash
    npx prisma migrate dev
    ```

5. **Start the development server**:
    ```bash
    npm run dev
    ```

6. **Open the app**:
    - Navigate to `http://localhost:3000` in your browser.

## Usage

- **Resize Media**: Upload your image or video, choose the desired dimensions, and download the resized version.
- **Apply Frames**: Select the social media platform, and the app will automatically resize and add the appropriate frame.
- **Compress Video**: Upload a video, adjust the compression settings, and download a smaller file.

