# Deployment of Coffee Enthusiast Hub - Frontend to AWS S3

This document provides step-by-step instructions for deploying the React client application to AWS S3.

## Prerequisites

- AWS account with necessary permissions to create and manage S3 buckets.
- Node.js and npm (or yarn) installed on your local machine.
- The `aws-cli` installed and configured on your local machine (optional, for CLI deployment).

## Steps

### 1. Build the React App

Create a production build of your React application.

```sh
npm run build
# Or if you use yarn
yarn build
```

### 2. Create an S3 Bucket

1. Log in to the AWS Management Console.
2. Navigate to S3.
3. Click "Create bucket".
4. Enter a unique bucket name (e.g., my-react-app-bucket).
5. Choose a region.
6. Click "Create bucket".

### 3. Configure the S3 Bucket for Static Website Hosting

1. Go to the bucket you just created.
2. Click on the "Properties" tab.
3. Scroll down to "Static website hosting".
4. Click "Edit".
5. Select "Enable".
6. For the "Index document," enter index.html.
7. For the "Error document," enter index.html.
8. Click "Save changes".

### 4. Upload Build Files

1. Go to the "Objects" tab of your bucket.
2. Click "Upload".
3. Click "Add files" and select all files from the build directory.
4. Click "Add folder" and select all folders from the build directory.
5. Click "Upload".

### 5. Set Bucket Permissions

1. Go to the "Permissions" tab of your bucket.
2. Click on "Bucket Policy".
3. Add the following policy, replacing your-bucket-name with your actual bucket name:

```sh
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

### 6. Access Your Website

1. Go to the "Properties" tab of your bucket.
2. Under "Static website hosting", find the "Bucket website endpoint".
3. This URL is where your React app is now hosted.
