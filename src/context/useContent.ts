//upload media to cloudinary
//add data to edits array

export const edits = [

   {
      title: 'Collegiates Edit 2024',
      format: 'portrait',
      description: 'This is an edit I made after the 2024 skydiving collegiates nationals. Featuring jumpers from schools across the country',
      meta: 'Collegiates Z-Hills (skydive city) 2024',
      link: 'https://res.cloudinary.com/djuul0yr0/video/upload/v1756240355/Collegiates2024EditCOMPR_skypfr.mov',
      ref: 'csne24'
   },
   {
      title: 'Uconn Skydiving Involvement Post',
      format: 'portrait',
      description: 'I put together this video for UCONN Skydiving to promote the club to students on campus',
      meta: '2024',
      link: 'https://res.cloudinary.com/djuul0yr0/video/upload/v1756241416/UCSDInvolvementReel2024COMPR_ljjnom.mov',
      ref: 'ucsdinv24'
   },
   {
      title: '2024 End of the Year Edit',
      format: 'portrait',
      description: "My 'year end' edit for 2024",
      meta: '2024',
      link: 'https://res.cloudinary.com/djuul0yr0/video/upload/v1756242432/24YearEndCOMPR_u4khqx.mov',
      ref: 'eoty2024'
   },
   {
      title: '2024 End of the Season - Skydiving',
      format: 'portrait',
      description: 'My season end edit for skydiving 2024',
      meta: 'Skydiving 2024',
      link: 'https://res.cloudinary.com/djuul0yr0/video/upload/v1756242921/24SeasonSDEditCOMPR_fnqdrk.mov',
      ref: 'eots2024sd'
   },
   {
      title: 'UCONN Skydiving Tandem Weekend Fall 2024',
      format: 'portrait',
      description: "This is an edit I made for the UCONN skydiving team for their 'tandem weekend' event they hold for the students at UCONN",
      meta: '2024',
      link: 'https://res.cloudinary.com/djuul0yr0/video/upload/v1756243289/TandemWeekendFall24COMPR_tx0aap.mov',
      ref: 'twfall2024'
   },
   {
      title: '2023/24 End of the Season Edit - Skiing',
      format: 'portrait',
      description: "My 'season end' edit for the 23/24 ski season",
      meta: '2023 / 2024',
      link: 'https://res.cloudinary.com/djuul0yr0/video/upload/v1756243586/2324SeasonSkiEditCOMPR_cklxvo.mov',
      ref: 'eots2324ski',
   },
   {
      title: 'March Snow Storm edit 2024',
      format: 'portrait',
      description: 'I Made this edit with my friends after it snowed 26 inches overnight; The most the mountains on the eastcoast had seen all season. So we were excited.',
      meta: 'Stratton Mountain 2024',
      link: 'https://res.cloudinary.com/djuul0yr0/video/upload/v1756243918/MarchSnowdump24EditCOMPR_q2ysv0.mov',
      ref: 'msse2024'
   },
   {
      title: '2023 End of the Year Edit',
      format: 'portrait',
      description: "My 'Year End' Edit 2023",
      meta: '2023',
      link: 'https://res.cloudinary.com/djuul0yr0/video/upload/v1756244156/23YearEndCOMPR_hl0ppp.mov',
      ref: 'eoty2023'
   },

];

//media type image | landscape | ''(empty string for multiple peices of media)

export const designs = [
   {
      title: 'Illustrator Final Project',
      meta: 'Illustrator 2024',
      format: "landscape",
      mediaType: 'image',
      description: 'This is one of my designs for my Digital Media and Design foundations course final. I did all of the pieces in both Illustrator and Photoshop- including this design.',
      ref: 'illbrupro24',
      path:'designs/imadethisinalecture.png'
   },
   {
      title: 'Illustrator Pen-Tool Project',
      meta: 'Illustrator 2024',
      format: 'portrait',
      mediaType: 'image',
      description: 'This is one of my first designs for a Digital Media and Design foundations course project, as well as my inital introduction to Adobe Illustrator. This was done in illustrator using the brush and pen tools.',
      ref:'illpenpro2024',
      path: 'designs/dmdproj1.jpg',
   },
   {
      title: 'UCONN Skydiving Animation',
      meta: 'Animation 2024',
      format: 'portrait',
      mediaType: 'video',
      description: 'I animated the Uconn Skydiving logo (Which I did not design) for the Uconn Skydiving invovlment reel that I made for their instagram page. This was made in photoshop with key frames',
      ref: 'ucsdanim',
      path: 'designs/ucsdfinal.mp4'
   },
   {
      title: 'DMD Final Project Animation',
      meta: 'Animation 2024',
      format: 'landscape',
      mediaType: 'video',
      description: 'For my Digital Media and Design Foundations final project it had been a requirement to make an animation as part of a design portfolio. I decided to do a frame by frame animation of a skydiving crash video. The result is this 10 second, 12 frame per second animation.',
      ref: 'crazy12fpsanim',
      path: 'designs/dmdfinalanimation.mp4',
   },
   {
      title: 'Uconn Skydiving Tandem Weekend Poster ads',
      meta: 'photoshop 2024',
      format: 'multiple',
      mediaType: '',
      description: 'These are some of the designs that I made for the Uconn Skydiving team Instagram, as well as for posters that were hung up around campus.',
      ref: 'ucsdtwpost24',
      path: [
         {
            url :'designs/twp1.png',
            type: 'image'
         },
         {
            url :'designs/twp2.png',
            type: 'image'
         },
         {
            url :'designs/twp3.png',
            type: 'image'
         },
      ]
   }

];

//upload 1by1 image to public/codepage.
//related images go in public/{project name}
//append new programs object
//create new array of formated text for the project article
//create a new route for the project in main analagous to the page key in the programs array ex: /code/ibn



export const programs = [
   {
      title: 'Invited By Nat',
      description: 'A social app created for users to interact with the buisness and their community. Made for Invited By Nat out of west hartford CT.',
      meta: 'Typescript-React-NodeJS-Socket.io-ExpressJS-AWS-mySQL-nginx 2025',
      page: '/code/ibn',
      ref: 'ibn2025',
      mediaLink: 'codepage/ibn1by1.png',
      referenceLinks: [
         {
            title: 'invited by nat',
            url: 'https://invitedbynat.live',
         },
      ]
   },
   {
      title: 'GIBS API  User Interface',
      description: "A small project that uses the GIBS satellite imaging database api. It sets variables within a uri that changes the zoom, position, and date of the images its pulling from.",
      meta: 'Typescript-React 2025',
      page: '/code/gibs',
      ref: 'gibsui2025',
      mediaLink: `https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/${new Date().toISOString().split('T')[0]}/GoogleMapsCompatible_Level9/0/0/0.jpg`,
      referenceLinks: [
         {
            title: 'GIBS api docs',
            url: 'https://nasa-gibs.github.io/gibs-api-docs/',
         },
      ]
   },
   {
      title: 'Tassk Management',
      description: 'A local storage based to do app with JSON based storage of multiple to do lists.',
      meta: 'Javascript-React 2025',
      page: '/code/tassk-management',
      ref: 'tsskmngmnt',
      mediaLink: 'codepage/tm1by1.png',
      referenceLinks: [
         {
            title: 'Tassk Management',
            url: 'https://sebgorgone.github.io/Tassk-Management/',
         },
         {
            title: 'Tassk Management github repo',
            url: 'https://github.com/sebgorgone/Tassk-Management',
         },
      ]
   },
   {
      title: 'Cloud Log',
      description: 'My Fullstack web app for skydivers to track their jumps and keep statistics and records. The hosted version is a local version I converted to work within the local storage of your browser.',
      meta: 'Javascript-React-NodeJS-ExpressJS-AWS-mySQL 2025',
      page: '/code/cloudlog',
      ref: 'cloudlog2025',
      mediaLink: 'codepage/cl1by1.png',
      referenceLinks: [
         {
            title: 'Cloud Log local',
            url: 'https://sebgorgone.github.io/cloudlog-local/',
         },
         {
            title: 'Cloud Log fullstack github repo',
            url: 'https://github.com/sebgorgone/cloud-log'
         },
      ]
   },
   {
      title: "JS blockblast",
      description: "My blockblast clone built using the javascript visual library p5",
      meta: 'Javascript-P5.JS 2025',
      page: '/code/jsblockblast',
      ref: 'jsbb2025',
      mediaLink: 'codepage/jsb1by1.png',
      referenceLinks: [
         {
            title: 'js blockblast',
            url: 'https://sebgorgone.github.io/js-blockblast/',
         },
         {
            title: 'js blockblast repo',
            url: 'https://github.com/sebgorgone/js-blockblast',
         },
      ]
   },
   {
      title: 'Turning Cubes JS',
      description: 'What I consider my first real Javascript project is a generative animation of tiled rhombi that rotate to give the illusion of a morphing topology',
      meta: 'Javascript-P5.JS 2025',
      page: '/code/turningcubes',
      ref: 'turningcubejs',
      mediaLink: 'codepage/tc1by1.png',
      referenceLinks: [
         {
            title: 'turning cubes js',
            url: 'https://sebgorgone.github.io/3d-cube-visual-p5js/',
         },
         {
            title: 'turning cubes github repo',
            url: 'https://github.com/sebgorgone/3d-cube-visual-p5js'
         }
      ]
   },
   {
      title: 'My Portfolio',
      description: "Including this website and another I never really finished ive made about 3 portfolios showcasing my work. I go back and redo it because every time I feel like I can make it better, and its a fun project where I get to look back on what I've done",
      meta: 'Typescript-React 2025',
      page: '/code/portfolio',
      ref: 'ptflio2025',
      mediaLink: 'codepage/port1by1.png',
      referenceLinks: [
         {
            title: 'portfolio 2 (react-js)',
            url: 'https://github.com/sebgorgone/portfolio_revised',
         },
         {
            title: 'portfolio 1(html-css-js)',
            url: 'https://github.com/sebgorgone/Sebastian-Gorgone-Portfolio',
         },
      ]
   },
   
];

type Widget = {
   format: number,
   src: string,
   text: string
};

   // 0 = text-body 
   // 1 = landscape-left 
   // 2 = landscape-right 
   // 3 = portrait-left 
   // 4 = portrait-right 
   // 5 = portrait-iframe(left)+text 
   // 6 = landscape-iframe 
   // 7 = image-landscape 
   // 8 = header (aligned left)
   // 9 = link input (text = link title src=linkUrl seperate multiple links with ' - ')

export const invitedByNat: Widget[] = [
   {
      format: 0,
      src: '',
      text: 'Invited By Nat is a react web app I have been building for a few months now. It is a fullstack web application complete with a community forum- using socket.io. It also has social media style posting for the owners of Invited to post to their customers. Within this project I built a fully custom calendar view for their event postings, as well as full create, update, and delete capabilities via the admin dashboard. It is structured with segmented access to consolidate users, admins, and super-users. Allows for admins to act as moderators of the public community chat forum, as well as revoke and grant access to all users via the user control dashboard.'
   },
   {
      format: 2,
      src: 'codepage/invited/ibn-landscape.png',
      text: 'The app is designed with exclsivity in mind, which led me to developing the authorization and validation process first. The app allows admins to seamlessly segment access to each individual user in a clean GUI'
   },
   {
      format: 3,
      src: 'codepage/invited/ibn-portrait.png',
      text: 'The app is going to ship fully with the admin Dashboard, the landing page welcoming new users to sign up for the application, and the user application wich allows validated users to interact with their community. It also gives them a one stop expirience for posts, events, and new products right as they come out.'
   },
   {
      format: 7,
      src: 'codepage/invited/ibn-cal.png',
      text: '',
   },
   {
      format: 0,
      src: '',
      text: 'Authentication is all driven by JWTs that are encrypted via RSA and encode all of the users metadata. all external data is stored within a mySQL. Files are served seperately from an s3 bucket. Secure temporary URLs for s3 are assigned from the node server and all images and videos are uploaded directly to s3 from the client; circumventing the need for the backend server to handle files and s3 storage. All of the traffic is routed through a reverse proxy, and directs traffic to either the api or the websockets based on the endpoint the client is trying to reach. The app is projected to be launched by then end of the year 2025',
   },
   {
      format: 6,
      src: 'https://invitedbynat.live',
      text: ''
   },
   
];

export const tasskManagement: Widget[] = [
   {
      format: 0,
      src: '',
      text: 'Tassk Management is my to do application built in react. It is a standalone frontend that uses your browsers local storage to store multiple todolists in a single JSON document format similar to a document database. The name comes from a toy sloth that I have named molasses (Ass) and he is also the mascot on the application. I have made a handful of these to do apps, but this one is my all time favorite for its organization and versatility alone. I use it all the time to organize everything from my day to day tasks, to individual steps in a procedure, to segmenting work for my classes. Most of all I love it because of how persoanl it is to me!',
   },
   {
      format: 1,
      src: 'codepage/tassk-management/tm-tasks.png',
      text: 'The page tiles tasks in columns that scroll indipendently, and you can open and close tabs like you would in your browser. Depending on the pixel width of your browser it limits the number of widows you can have open at a given time.'
   },
   {
      format: 2,
      src: 'codepage/tassk-management/tm-pal.png',
      text: 'You can customize your tasks with custom pallettes and by favoriting them. Favoriting tasks gives them the ass icon in the file explorer and in the tab header. All customization and input is crud enabled. That includes the task group title, description, and pallettes.'
   },
   {
      format: 7,
      src: 'codepage/tassk-management/tm-task.png',
      text: ''
   },
   {
      format: 6,
      src: 'https://sebgorgone.github.io/Tassk-Management',
      text:''
   }
];

export const cloudlog: Widget[] = [
   {
      format: 0,
      src: '',
      text: 'Cloudlog is the application I built over the summer of 2025 to learn the react framework. It started as a simple UI build to mess around, but it evolved into me signing up for aws, learning node and express, learning SQL, and hosting all of that data in the cloud. The app itself was a skydiving logbook app for jumpers (myself pretty much) to log their skydives and track statistics such as total freefall time, total jumps, total anything via the tag function I built out extensively. There was also stats by year, by week, by month. Progress bars for different milestone progressions. And so much more that I baked into this frontend from just a hosted node app and database that stored nothing but your user ID and your jumps.',
   },
   {
      format: 1,
      src: 'codepage/cloudlog/cl1.png',
      text: 'Logbooks are a staple in skydiving; serving as the source of truth of your skydiving expirience and knowledge. I wanted this app to make auditing and skimming through your jumps and notes alot easier. And most of all a one-page view of your all time stats.'
   },
   {
      format: 7,
      src: 'codepage/cloudlog/cl3.png',
      text: ''
   },
   {
      format: 7,
      src: 'codepage/cloudlog/cl5.png',
      text: ''
   },
   {
      format: 7,
      src: 'codepage/cloudlog/cl7.png',
      text: '',
   },
   {
      format: 0,
      src: '',
      text: 'This rendition of the app is meant to work with the local storage in the browser for display. The original app was hosted fully on AWS. I used AWS Amplify for the frontend, lambda functions for the backend, and an ec2 instance for the mysql database. Im still in the process of converting the api endpoints to store data in local caches. Check out the frontend published with github pages, or the original fullstack project'
   },
   {
      format: 6,
      src: 'https://sebgorgone.github.io/cloudlog-local',
      text: ''
   },

];

export const jsBlockblast: Widget[] = [
   {
      format: 5,
      src: 'https://sebgorgone.github.io/js-blockblast/',
      text: 'JS blockblast was a javascript project I made for fun over the summer of 2025. It uses the P5.js javascript library to render all of the things on screen. I did my best to map the scoring to the original blockblast. The score is stored within the browsers local storage. P5 uses an event loop to render content on the screen. It has a setup to initialize any code you want to run previous to the loop and it is rendered in a canvas object in the DOM. The loop in this project run through a laundry list of checks to see if a row is complete and if there needs to be new items in the \'tray\'. The scroging is event based- it triggers any time a new row is cleared, and on every loop the code checks the current blocks you have against the board to see if there are still valid placed and when that number of valid placements gets to zero the game ends and your score is saved.'
   },
];

export const turningCubes: Widget[] = [
   {
      format: 0,
      src: '',
      text: 'I would label this as my first real javascript project. I made this after using p5 to learn javascript, and turned it in for a visual programming final project. Theres alot going on in this project and some interactivity mainly serving as debug methods for myself. They do give alot of good insight on how the algorithm is running.'
   },
   {
      format: 0,
      src: '',
      text: 'This project was insipired by a 3blue1brown video on solving puzzles using higher order dimensional reperesentations of them. More info on that in the design process below the frame.'
   },
   {
      format: 9,
      src: 'https://www.youtube.com/watch?v=piJkuavhV50&list=WL&index=3',
      text: '3blue1brown youtube video',
   },
   {
      format: 8,
      src: '',
      text: 'Click the animation to use the keybinds'
   },
   {
      format: 6,
      src: 'https://sebgorgone.github.io/3d-cube-visual-p5js/',
      text: ''

   },
   {
      format: 2,
      src: 'codepage/turningcubes/codeexplain.png',
      text: '*Key Binds* \n debug HUD: b \n conditional filtering: v \n modes (0-4): 0, 1, 2, 3, 4'
   },
   {
      format: 0,
      src: '',
      text: 'This code base is 1 javascript document and an html index that sources it. Over the course of about 2 and a half months I made this with the goal of turning it in as a digital art project. In turn the code has alot of conditional logic to test different variations of how it is working. Wich is where the mode variable came from.'
   },
   {
      format: 8,
      src: '',
      text: 'B : Debug HUD'
   },
   {
      format: 7,
      src: 'codepage/turningcubes/debug.png',
      text: ''
   },
   {
      format: 0,
      src: '',
      text: 'The debug hud overlays the mode, displays when conditional filtering is on, shows when rhombi polarities are fliped to make a tranformation, shows a stress meter for debugging what my scale limit was, displays how many valid cubes are on screen as well as the polarities of the cube it is iterating over. I go more in depth on the polaraties of the rhombi in the design process below, but they were the biggest hurdle for making this program work as well as integral for some of the conditional logic i would implent after I had achieved a working design. The lines in the debug overlay reperesent polarity, and the dots are valid cubes. The last thing is conditional slip- which works globally to halt conditional filtering periodically.'
   },
   {
      format: 8,
      src: '',
      text: 'V : Conditional Filtering'
   },
   {
      format: 0,
      src: '',
      text: 'Conditional filtering was some extra logic I started to mess with later on in the project to try and nudge the algorithm to build \'bigger\' cubes. It works by checking if the polarities are all aligned either toward the center or away from the center and only turns thoes cubes. The result is the grid starts to arrange itself into big shelfs and walls, but as this goes on less and less valid cubes exist and in turn the animation slows down. Thats where the conditional slip comes in. Conditional slips allows the algorithm to break this rule periodically often triggering a cascade effect of transformations and helps further push the algorithm to morph the grid. The debug view realy helps to visualize how the polarities affect this outcome, because youll see that the cubes with common polarities will cascade towards a single corner.'
   },
   {
      format: 8,
      src: '',
      text: 'Mode 0 : Random Cube Flipping',
   },
   {
      format: 0,
      src: '',
      text: 'Begins from the start of initialized rhombus array, and checks for valid cubes to turn. Increments by 1 The same algorith as mode 1'
   },
   {
      format: 8,
      src: '',
      text: 'Mode 1 : Sequential cube flipping (Decrementing by 4)',
   },
   {
      format: 0,
      src: '',
      text: 'Using the array of all of the indivudual rhombi on screen. This mode iterates in the negative direction over the rhombus object array by decrements of 4. If the selected rhombus can be flipped (builds a cube) it is flipped. The array is ordered based on the order the rhombi are initialized in.'
   },
   {
      format: 8,
      src: '',
      text: 'Mode 2 : Sequential cube flipping (Incrementing by 1)',
   },
   {
      format: 0,
      src: '',
      text: 'Begins from the start of initialized rhombus array, and checks for valid cubes to turn. Increments by 1- Uses the same flip validation algorithm as mode 1.'
   },
   {
      format: 8,
      src: '',
      text: 'Mode 3 : Periodically toggles conditional filtering',
   },
   {
      format: 0,
      src: '',
      text: 'This is Mode 2 with 30 seconds of conditional flipping and 30 seconds of normal flipping.'
   },
   {
      format: 8,
      src: '',
      text: 'Mode 4 : Do it yourself',
   },
   {
      format: 0,
      src: '',
      text: 'Quit relying on computers to do everything for you. Making this one felt like cheating - no algorithm, no iteration, no fun. It is relaxing though.'
   },
   {
      format: 8,
      src: '',
      text: 'The Design Process'
   },
   {
      format: 2,
      src: 'codepage/turningcubes/3b1b.png',
      text: 'In january of 2025 I was given a due date to hand in a final project proposal for some kind of digital art piece in a class where we were working with javascript (the p5.js library). Coincidentaly I had come across this 3blue1brown video where he has this animation of rhombus tiles that spin and morph into a 3d like structure.'
   },
   {
      format: 0,
      src: '',
      text: 'His video is super interesting and goes into way more that just how and why this geometric pattern works, but I was instantly grabbed by this mesmorizing animation and thought I could absolutely acheive a generative version of this.'
   },
   {
      format: 0,
      src: '',
      text: 'I had thought starting out that the easiest way to get to where I was going was to come up with a way to iteratively create these cubes with the corect angles. Wich definetly took alot of trial, error, and math.'
   },
   {
      format: 0,
      src: '',
      text: 'I decided it was easiest build the cubes one rhombus at a time as they were meant to be able to move around the screen as they flipped. So it started with three rhombi being drawn from a central point all offset 120 degrees from eachother to form the cube.'
   },
   {
      format: 0,
      src: '',
      text: 'From there I got the grid to fill by iteratively placing offset rhombi on the adjacent ends of the initial rhombi from the first cube. This is where the animated initializing period was born from. Its not a bug its a feature!'
   },
   {
      format: 0,
      src: '',
      text: 'Creating the rhombus in this polarity based way where all of the cordinates stem from a common center created alot of challenges for me when trying to get the animation to flip cubes that would form based on previous cube flips. This got me to a point where i could turn the cubes but i could only flip them right back after.'
   },
   {
      format: 8,
      src: '',
      text: 'Geometry and polarity'
   },
   {
      format: 0,
      src: '',
      text: 'The Rhombi themselves had an x and y coordinate responsible for their position. they also had an angle (theta) to determine thier orientation. In order to create a rhombille grid that "Tile the plane" as 3Blue1Brown puts it. There need to be 3 rhombi that all consist of 2 sets of both 60 and 120 degree inner angles. If three of these ideal rhombi align at a common point at their 120 degree angles, they can be flipped 180 degrees to fit neatly in the grid while shifting their orientations relative to the surrounding grid. This tranformation effectively shifts the perspective of the three rhombi, and is the basis for the visuals in this project.'
   },
   {
      format: 3,
      src: 'codepage/turningcubes/polarhex.png',
      text: 'An X and Y would sit at a 120 degree angle of any given rhombus. The rest of the rhombus is built by setting a point at constant distance or radius from that first point in the direction preset for that given rhombus. Then the last two points are places 60 degrees offset left and right of the last point at the same distance from the initial- creating the two 60 degree angles. I did it this way because of how nicely this fits on a unit circle and i couldnt think of another way how.'
   },
   {
      format: 0,
      src: '',
      text: 'I acheived these angles by setting a universal radius value. This is decided based on the longest side in pixels of the viewport. Then by using cartesian cordinate conversions I retrieved the x and y coordinates. \n x = r * cos(angle)\ny = r * sin(angle)'
   },
   {
      format: 0,
      src: '',
      text: "At first I 'spawned' three rhombi or one cube, and tried to do the math to make a properly offset gred for them to be iterated over. However, that approach wasnt working out and I ended up getting frustrated at the math. I then had the idea to just build new rhombi off of the inital 3 in a itterative way. With the exit conditions being the viewport edges plus one rhombus 'radius'. This is what lives in the code now. I also made an alternative 'setupMode', where it would build one big cube from the initial. This was a cool concept because it was apart of 3blue1browns puzzle where he would take the grid from that single cube state to a grid state in the shortest amount of transformations. The animation that followed did not necesscarily get moving fast enough having only one valid cube to start with. I would need a different selection algorithm. I didnt end up incorperating a way to interactively change this unfortunately as it requires a restart of the animation and I didnt think it added enough to my original goal."
   },
   {
      format: 7,
      src: 'codepage/turningcubes/bigcubepic.png',
      text: ''
   },
   {
      format: 8,
      src: '',
      text: 'Algorithm'
   },
   {
      format: 0,
      src: 'codepage/turningcubes/loworderlarge.png',
      text: 'I struggled here. Once I had gotten the grid geometry down my first instict was to just randomly flip these cubes by adding pi to their rhombi\'s theta angles. This would give the effect of shifting gemoterys and perspective, but it was limited. The flips would only move the cube once, but any new cubes that formed would never be touched. The result being the same cubes just flipping back and forth and at best making zigzag patterns out of the rhombi. Not close to the big shelves and walls I was looking for in a truley generative design.'
   },
   {
      format: 0,
      src: '',
      text: 'You can see how in this example the random cube flipping does change the grid but over time will keep its stairstep and zigzag like structure. The main reason again was the polarity. It was simple to rotate the cubes around the axis they were built on. But when you had a cube that formed with diferent x and y cordinates- trying to come up with a way to systematically translate thoes rhombi to their new correct location became difficult. So I dumped the idea of going based on the cubes with common center points because that was doomed to fail.'
   },
   {
      format: 0,
      src: '',
      text: 'Then i did it the hard way. Instead of making an array of the cubes that get formed with common center points (initial 120 degree angles), and iterating over it to flip cubes, I iterated over every rhombus. The process goes like this- The algorithm checks every rhombus for valid cubes to flip. It does this by checking if 3 rhombi sit together to make a cube. Then a random rhombus from that subset of valid cubes is chosen to be evaluated. The algorith checks the other rhombi on the grid for shared x and y cordinates with the given rhombus. It does this for both 120 degree angle verticies. If during this process and either one of the angles its checking finds two other matches it then proceeds with the flip process. This starts with checking the polarity of each rhombus compared to the inital one. if they all line up already, then they rotate. If they dont, the algorithm flips the rhombi that arent flipped to be pointing outward from the center so that they all share a common x,y. Then the flip happens. And the algorithm repeats checking the board for valid cubes once again as this state is volitle across transformation.'
   },
   {
      format: 4,
      src: 'codepage/turningcubes/highorder.png',
      text: 'This ened up being what I stuck with. Its clunky and slow, and worst of all, I have to limit how many cubes it wants to throw on screen. But its what I wanted and how I wanted it. It achieves the generative part, solves the polarity problem, and allows for some cool conditional things to happen based on how thoes cubes are positioned.'
   },
   {
      format: 9,
      src: 'https://sebgorgone.github.io/3d-cube-visual-p5js - https://github.com/sebgorgone/Sebastian-Gorgone-Portfolio',
      text: 'turning cubes - turning cubes github repo'
   }

];

export const portfolio: Widget[] = [
   {
      format: 0,
      src: '',
      text: 'Building portfolios has been what has brought me to web development in the first place. I wanted a place to display my javascript project that I had made for school. I quickly realized theres not a great way to do that from a template based site like wix or otherwise. So I caved and learned html- I wrote a static portfolio site with alot of standalone html and css and quickly fell in love with web development. It took me just about a month to learn and write the full site. I definetly wrote some code I would never write in a similar way ever again, but ultimately I learned so much about the basics of web development in the process.'
   },
   {
      format: 0,
      src: '',
      text: 'Fast forward 9 months and Ive deployed a couple of fulstack projects and have done almost nothing but learn the ins and outs of we design as a whole. With this site being written in typescript and react, hacing a responsive mobile and desktop layout, built in search, and a completely modular architecture allowing me to add and remove different projects with ease. I want this to be the last porfolio repo I ever need to write.'
   },
   {
      format: 3,
      src: 'codepage/portfolios/pfo3files.png',
      text: 'My goal for this portfolio was to create as small and effecient of a codebase while incorperating as much as I can into it.\n The only module in top level source directory other than main is the home page. I did this only because it is unique from the other pages and required seperate attention. The pages folder houses all of the standalone pages that have their own URL paths via \'react-router-dom\'. Im using the hash router to simplify static hosting for the site.\n Any modules that get reused get put into the components folder including the header footer and sidebar, and the same goes for the mobileComponents folder for mobile. context is for global variables and logic. Finally any supplementray materials such as images and text get put into public with its ease of use in react projects.'
   },
   {
      format: 7,
      src: 'codepage/portfolios/pfo3compstructure.png',
      text: ''
   },
   {
      format: 0,
      src: '',
      text: 'The useViewport context lets me globaly push the displaywidth as the screen size changes. With this I set a breakpoint at 1240px of width to discern desktop from mobile layouts. From there I built two seperate layouts for desktop and mobile respectively.'
   },
   {
      format: 2,
      src: 'codepage/portfolios/pfo3useviewport.png',
      text: 'I pass this function into all of my components. Ultimately I only use the device type string variable as refactoring the breakpoint happens in one spot in my code base. Or if I want to add more layouts in the future for different widths I can do that in one place and just add one more conditional to my component return statements.'
   },
   {
      format: 0,
      src: '',
      text: 'I wanted this project to have very little over head for adding new content to it. So All of the pages conditionally render components from a single a ts document; Similar to a documentDB. The idea is in the future if I felt like it I could make a UI and database for myself to upload projects. This setup also makes it very nice to itterate over the documents strings and create search functions within the portfolio. Arguably it\'s unnessecary for a portfolio website, but I enjoyed writing the search algorithm and text highlighting features. I think its cool so it exists.'
   },
   {
      format: 7,
      src: 'codepage/portfolios/pfo3content.png',
      text: ''
   },
   {
      format: 0,
      src: '',
      text: 'Ultimately This Project has come a long way from my previous portfolios. The code reads so much better. The source directory is so much less bloated. The logic is plain and clear. And updating it takes very little effort. No drilling through componenets to change content. No jumping from file to file to change any content- Its all in one document. And nothing that gets added is ever added in more than one place in the code. It all lives in one spot, and propogates from there.'
   },
   {
      format: 9,
      src: 'https://github.com/sebgorgone/portfolio2025',
      text: 'My Portfolio Github Repo'
   },
   {
      format: 8,
      src: '',
      text: 'My Second Portfolio (React + Javascript)'
   },

];






