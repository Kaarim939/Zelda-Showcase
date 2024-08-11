# Deployed version

## https://zelda-totk-showcase.netlify.app/

# Pitch

The goal here was to create a simple showcase website for the game The Legend of Zelda: Tears of the Kingdom.  
I've used some pretty uncommon libraries which I had already used in my previous projects as Leaflet for the world map or ThreeJs Fiber for the 3D models.
Overall, the code is well-structured and easy to read. The components are well-organized and reusable. The code is clean and well-commented.  
The website is fully responsive.

ALL the assets are from the original game or the original website.  
As it's only a showcase website, I've decided to not use protection for the assets.  
The website is not fully finished ( the story section and footer are missing, as are other little things like the markers on the map).

# Issue

The performance of this app is pretty bad because of the large images, the tiles of the map and the 3D models load at the same time. I could easily fix this by loading components only when they are in the viewport or splitting the home page into multiple pages but it's not the goal of this project.

# How To Run locally

-`npm i` to install all the packages  
-`npm run dev`to launch the app
