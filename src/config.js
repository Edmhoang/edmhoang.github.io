// config.js
module.exports = {
    github: {
        username: 'Edmhoang', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'https://www.linkedin.com/in/eddie-hoang2809/',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://edmhoang.github.io',
        phone: '',
        email: 'minhduc2034@gmail.com'
    },
    skills: [
        'MySQL',
        'Python',
        'Tableau',
        'R',
    ],
    experiences: [
        { 
            company: 'Sobeys Halifax, Canada',
            position: 'HMR Clerk',
            from: 'March 2021',
            to: 'Present'
        },
        { 
            company: 'Walmart Sydney River, Canada',
            position: 'Customer Experience Salefloor Associates',
            from: 'April 2020',
            to: 'November 2020'
        },
        { 
            company: 'PricewaterhouseCoopers, Vietnam',
            position: 'Transfer Pricing Intern',
            from: 'October 2018',
            to: ' June 2019'
        }
    ],
    education: [
        { 
            institution: 'Cape Breton University, Nova Scotia',
            degree: 'Post Baccalaureate of Business Analytics',
            from: '2020',
            to: '2022'
        },
        { 
            institution: 'University of Economics Ho Chi Minh City, Vietnam',
            degree: 'Bachelor of Accounting',
            from: '2015',
            to: '2019',
        }
    ],
      Schoolproject: [
        { 
            Project name: 'Building database structure for sale department',
            'MySQL',
            Course: 'Database Concepts',
        },
         { 
            Project name: 'Mining absenteeism data in the workplace',
            'R',
            Course: 'Data Mining',
        },
            { 
            Project name: 'Data visualization in Youtube Trending Videos',
            'Tableau',
            Course: 'Data Visualization',
        },
            { 
            Project name: 'Exploratory Data in k-mean clustering',
            'Python',
            Course: 'Capstone Project',
        },
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: '', // medium | dev.to
        username: '',
        limit: 0 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id
    },
    hotjar: {
        id: '', //  Please remove this and use your own id
        snippetVersion : 6
    },
    themeConfig: {
        default: 'lofi',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
