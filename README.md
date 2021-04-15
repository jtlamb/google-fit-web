# Google Fit Web

This is an independent student project for CS 4365 at the Georgia Institute of Technology. 

## Run Locally

In order to run this project you will need to create your own application in the Google Cloud Platform console. 

### Get a Google Account
To use the Fitness REST API, you need a Google Account. If you already have an account, then you're all set. You may also want to create a separate Google Account for testing purposes.

### Getting Started

- Go to the [Google API Console](https://console.cloud.google.com/flows/enableapi?apiid=fitness).
- Select a project, or create a new one. Use the same project for the Android and REST versions of your app.
- Click **Continue** to enable the Fitness API (this may take a minute).
- Click **Go to credentials**.
- Click the **OAuth consent screen** on the side navigation.
    - At this point, you will need to create an OAuth Consent Screen. Most of the options are personal to how you want to use the application but there are some specific settings in order for the application to function correctly.

### Setting up OAuth Consent Screen for this app

There are several scopes you need to add to your project in order for the project to work correctly.

- Non-sensitive scopes
    - openid
    - .../auth/fitness
    - .../auth/user.birthday.read
    - .../auth/user.gender.read
    - .../auth/userinfo.email
    - .../auth/userinfo.profile
- Sensitive scopes
    - .../auth/fitness.body.write
    - .../auth/fitness.body.read
    - .../auth/fitness.activity.read
    - .../auth/fitness.heart_rate.read
    - .../auth/fitness.location.read

These are the base scopes for Google Fit Web to work correctly. If you plan on adding to this project, you may have to add more scopes. You must add them in the GCP project as well as in the `SignInOut.jsx` component.

### Setting up Credentials

Follow these steps to set up an OAuth 2.0 Client ID

- Click the **Credentials** tab on the side navigation.
- Click the **CREATE CREDENTIALS** button at the top of the page.
- Select the **OAuth client ID** option.
- Select **Web Application** for the Application type.
- Name
    - Whatever you want
- Authorized JavaScript origins
    - `http://localhost:3000`
- Authorized redirect URIs
    - `http://localhost:3000/google-fit-web/`

### Adding Credentials to the project

Make sure you have the project on your machine either by downloading, forking, or cloning the source.

- Go into the OAuth 2.0 Client ID you created in the above section
- Click the **DOWNLOAD JSON** button at the top of the page.
- Create a `/secrets` folder in `/src`
- Place the JSON into this folder.

`SignInOut.jsx` imports the JSON as `keys` to authenticate login and ask the user to allow the requested scopes.

### Optional: Domain verification

If you plan on hosting this project on a personal domain, you must verify your domain.

- In the GCP console, navigate to **Domain verification**
- Click **Add domain**
- Register your domain on [Search Console](https://www.google.com/webmasters/tools)
    
> **Note**: Things have changed. When I was setting up my domain (https://jtlamb.github.io/google-fit-web/), I had to add a given `.html` file to the public folder. Depending on how you are hosting your website, Google has various options that you can follow through. 

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Builds the app for production and pushes to GitHub pages to be hosted. This can only be done by the owner of the Git repository. Instructions to set this up were found [here](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f). 

## Future Work

### Use proper Google Fit branding
My number one priority was to try and maintain Google's visual identity to look like the application came straight from Google themselves. Unfortunately, I was not able to obtain access to Google Fit's official branding. For example, the logo in the top right was obtained from their [Partner Marketing Hub](https://partnermarketinghub.withgoogle.com/brands/google-fit/overview/brand-introduction/) site. Further branding such as other logos and icons are locked up and you must request access to get them. 

### Add more data fields to the various pages
Due to the REST API limitations, some data points shown in the Google Fit mobile app were not able to be diplayed or represented in the web application.

1. Goals are hard coded in because they are only available in the Android API

2. The activites shown in the Google Fit mobile app `Journal` page are automatically recorded events and cannot be obtained through the REST API. Instead, the REST API only has access to a data type entitled `sessions`. These `sessions` have to be manually inputed by a user via a third party application, not directly in the Google Fit app.
    - My goal for this was to add a `Activities` table in the `Journal` page where the `Log` is. Much like in the home page where the `chips` are used to select between the Heart Points and Steps pie charts, the user can select to see their hourly data or their sessions. The `Activites` tab would display those sessions in the rows similar to the Google Fit mobile app. Additionally, there would be an option at the top of the table to add a `session`. A modal would pop up and allow the user to manually enter their information.  
    
3. (Maybe) Height and weight were not able to be obtained correctly through the REST API because it is reliant on a user entering their height and weight recently in the Google Fit app. If they have not entered it recently, it becomes extraneous tracking dowwn that information.

### Overall improve the look and flow of the application
Right now, the application is very snappy and there are not many transitions. For example, when a user is loading into the home page, I would like to show dynamic graphs that smoothly populate with data rather than an instant flash of information.

### Make it public
I am working on getting the project public so that if you have a Google account, you can use the application, but due to the use of sensitive scopes, there are some extra steps in order to get it public. 
- [x] An official link to your app's Privacy Policy
- [ ] A YouTube video showing how you plan to use the Google user data you get from scopes
- [ ] A written explanation telling Google why you need access to sensitive and/or restricted user data
- [x] All your domains verified in Google Search Console