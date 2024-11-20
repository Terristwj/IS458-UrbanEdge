# About

**Urban Edge**: The Shift to the Cloud
This is an AWS project, that utilizes AWS Amplify.

![alt text](image.png)

# Instructions

Run: `npm install --legacy-peer-deps`

### Tutorial Youtube:

-   https://www.youtube.com/watch?v=JgwI22y_eFA

### Legacy migration GraphQL:

-   https://docs.amplify.aws/gen1/javascript/tools/cli/migration/transformer-migration/

### AWS IAM

amplify-terris

-   Access-Key: AKIAQDM2YOJ4OBWBBM5Z
-   Secreet-Access-Key: SuffzjHbG+jpCYdT55bUAYJdtIvtReFTiB4g1Yug

### AWS Amplify - CLI Commands:

1. npm i -g @aws-amplify/cli

    - Install CLI SDK

2. amplify configure

    - Connect to AWS account

3. amplify init

    - Quick startup
    - IAM settings

4. amplify add auth

    - Configure AWS-Cognito with username

5. amplify add storage

    - S3 Bucket - For store images
    - CRUD access for Auth-Users
    - Read access for Guest-Users

6. amplify add function - x2

    - Lambda - processPayment
    - Lambda - createOrder
        - NodeJs, hello-world-template

7. amplify add api

    - GraphQL API
    - To allow React frontend to communicate with AWS-AppSync
    - Configure authorization type for the API: Amazon Cognito User Pool
    - Additional authorization: API key, Guest user access to store
        - Expire 365 days

8. amplify push - Creates Cloud Resources

    - Creates: Resource-Name - Category
        - Userpool - Auth
        - S3 Bucket - Storage
        - AppSync API - API
        - AppSync API + DynamoDB Tables - Resolver
        - 2 Lambda functions - API Pipeline Resolver
    - Create GraphQL API - JavaScript

9. amplify add hosting

    - Plugin with AWS CloudFront and S3
        - CloudFront will be the CDN provider
        - S3 stores the static files

10. amplify publish
    - Deploy CloudFront for frontend site

| **Category** | **Resource name** | **Operation** | **Provider plugin** |
| ------------ | ----------------- | ------------- | ------------------- |
| Hosting      | S3AndCloudFront   | -             | awscloudformation   |
| Auth         | urbanedge3dc72717 | -             | awscloudformation   |
| Storage      | StoreImages       | -             | awscloudformation   |
| Function     | processPayment    | -             | awscloudformation   |
| Function     | createOrder       | -             | awscloudformation   |
| Api          | urbanedge         | -             | awscloudformation   |

11. Others
    -   Stripe: ripava6961@cironex.comA
    -   AWS Site: https://d2zek679hr2f60.cloudfront.net/

# Default

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
