import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type Blog = {
    description?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    blog?: Blog;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',

    title: 'Ateliar',

    description: 'DIY projects, home ideas, technology, gadgets, crafts and gaming.',

    image: {
    src: '/assets/images/hero/ateliar-hero.jpg',
    alt: 'Ateliar - DIY, technology, gadgets, crafts and gaming.'
},
    headerNavLinks: [
        {
            text: 'Home',
            href: withBase('/')
        },
        {
            text: 'Blog',
            href: withBase('/blog')
        },
        {
            text: 'Tags',
            href: withBase('/tags')
        },
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        }
    ],

    footerNavLinks: [
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        },
        {
            text: 'RSS Feed',
            href: withBase('/rss.xml')
        },
        {
            text: 'Sitemap',
            href: withBase('/sitemap-index.xml')
        }
    ],

    socialLinks: [
    {
        text: 'Instagram',
        href: 'https://www.instagram.com/hollowpiticus/'
    },
    {
        text: 'Pinterest',
        href: 'https://www.pinterest.com/mzeekelly4024/'
    }
],

    hero: {
        eyebrowText: 'Ideas. Projects. Inspiration.',

        title: 'Make. Create. Explore.',

        text: 'Discover DIY projects, clever home ideas, useful technology, gadgets, crafts and gaming content.',

        image: {
    src: '/assets/images/hero/ateliar-hero.jpg',
    alt: 'Creative workspace with technology and projects'
},

        actions: [
            {
                text: 'Explore Articles',
                href: withBase('/blog')
            },
            {
                text: 'Subscribe',
                href: '#subscribe'
            }
        ]
    },

    about: {
    title: 'About Ateliar',

    text: 'Ateliar is a place for curious people who enjoy making, building and exploring. From DIY and home projects to technology, gadgets, crafts and gaming, Ateliar brings together practical ideas, creative inspiration and interesting things worth trying.'
},

contactInfo: {
    title: 'Contact',

    text: "Have a question, suggestion, collaboration idea, or just want to say hello? I'd love to hear from you.",

    email: {
        text: 'Send me an email and I’ll get back to you as soon as I can.',
        href: 'mailto:qqq4024@outlook.com',
        email: 'qqq4024@outlook.com'
    },

    socialProfiles: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/hollowpiticus/'
        },
        {
            text: 'Pinterest',
            href: 'https://www.pinterest.com/mzeekelly4024/'
        }
    ]
},

subscribe: {
    title: 'Subscribe to Ateliar',

    text: 'Get new DIY projects, useful tech, creative ideas and more delivered to your inbox.',

    formUrl: '#'
},

blog: {
    description: 'Explore DIY projects, home ideas, technology, gadgets, crafts and gaming.'
},

postsPerPage: 6,

recentPostLimit: 3
};

export default siteConfig;