# Netflix clone
 
This project is a clone of Netflix using React. It was built as part of a tutorial to learn React and web development.

### Installation
To run this project locally, clone the repository and run the following commands:

    cd netflix-clone
    npm install
    npm start

This will start a development server at http://localhost:3000 where you can view the app in your browser.

#### Obtaining an API key
To use your own API key, you can obtain one from the themoviedb.org website. Follow these steps:

1. Go to https://www.themoviedb.org/ and create an account if you haven't already.
2. Navigate to your account settings and select the "API" option from the sidebar.
3. Click on the "Generate New API Key" button to obtain a new API key.
4. Copy the API key to your clipboard.

To use the new API key in the application, open the `constants.js` file located in the `src/components/constants/` folder and update the value of the `API_KEY` constant with your own key. Save the changes to the file and restart the application for the new key to take effect.


### Features
- Integration with the TMDb API for movie data
- Movie trailers using the react-youtube

### Technologies used
This project was built with the following technologies:

- React
- Firebase
- TMDb API
- React Player

### Credits
This project was completed by following the [YouTube tutorial playlist](https://www.youtube.com/watch?v=jSWwKABiFik&list=PLY-ecO2csVHfgVM9sChmUirqK7BXUBX9P&ab_channel=BrototypeMalayalam) by [Brototype Malayalam](https://www.youtube.com/@BrototypeMalayalam) on how to build a Netflix clone using React. The tutorial was a great help in learning how to build this website.

### Hosted website
For hosted webiste [click here](https://netflix-clone-irfanrasheedkc.vercel.app/).
