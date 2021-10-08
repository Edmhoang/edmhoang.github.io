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
        linkedin: 'eddie-hoang2809',
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
            company: 'Monstarlab Bangladesh',
            position: 'Software Engineer',
            from: 'September 2021',
            to: 'Present'
        },
        { 
            company: 'Orangetoolz - My Offer 360 Degree',
            position: 'Jr. Full Stack Engineer',
            from: 'July 2019',
            to: 'August 2021'
        },
        { 
            company: 'Techvillage',
            position: 'Jr. Software Engineer',
            from: 'January 2019',
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
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'arifszn',
        limit: 2 // How many posts to display. Max is 10.
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
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

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
