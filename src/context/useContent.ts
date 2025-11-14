

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
      title: 'illustrator final project',
      meta: 'Illustrator 2024',
      format: "landscape",
      mediaType: 'image',
      description: 'This is one of my designs for my Digital Media and Design foundations course final. I did all of the pieces in both Illustrator and Photoshop- including this design.',
      ref: 'illbrupro24',
      path:'designs/imadethisinalecture.png'
   },
   {
      title: 'illustrator pen-tool project',
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
      description: 'My Fullstack web app for skydivers to track their jumps and keep statistics and records. The hosted version is a local Version I converted to work within the local storage of your browser.',
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

   // 0 = text-body 
   // 1 = landscape-left 
   // 2 = landscape-right 
   // 3 = portrait-left 
   // 4 = portrait-right 
   // 5 = portrait-iframe(left)+text 
   // 6 = landscape-iframe 
   // 7 = image-landscape 
   // 8 = card-layout (seperate paths with -) the background for this is black

export const invitedByNat = [
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

export const tasskManagement = [
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

export const cloudlog = [
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
      format: 2,
      src: 'codepage/cloudlog/cl3.png',
      text: ''
   },
   {
      format: 1,
      src: 'codepage/cloudlog/cl5.png',
      text: ''
   },
   {
      format: 2,
      src: 'codepage/cloudlog/cl7.png',
      text: '',
   },
   {
      format: 8,
      src: 'codepage/cloudlog/svg/cloudlog404white.svg-codepage/cloudlog/svg/cloudlogiconwhite.svg',
      text: 'I did alot of design work for this app as well. Mostly SVGs for the icons, and the banners, etc. My favorite is still the cutaway outline svg for the nopage 404.'
   }

];






