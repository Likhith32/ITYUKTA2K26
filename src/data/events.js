
/* ============================================
   Individual Event Pages Data
   (Converted from event-*.jsp and workshop-*.jsp)
   ============================================ */
export const EVENTS = {
    'ludo': {
        name: 'Ludo',
        icon: '🎲',
        category: 'non-technical',
        registrationUrl: 'https://forms.gle/n5PxHkCy1CjAY6yH9',
        description: 'Classic board game goes competitive.',
        longDescription: "Ludo goes competitive! This classic childhood game takes on a new level of intensity as players strategize, block, and race to get all their tokens home first. Simple rules, endless strategy, and loads of fun!",
        fee: 50,
        date: 'March 11, 2026',
        time: '11:00 AM',
        duration: '1 Hour',
        venue: 'Seminar Hall',
        teamSize: 'Individual',
        rules: [
            'Individual participation — 4 players per board',
            'Standard Ludo rules apply',
            'Tournament format with knockout rounds',
            'Time limit per game to ensure fair play',
            'Winner advances to the next round',
            'No electronic dice — physical dice only'
        ]
    },

    'dumb-smash': {
        name: 'Lip Sync Battle',
        icon: '🤪',
        category: 'non-technical',
        registrationUrl: 'https://forms.gle/WWH6r1RF8TX1Z1ru5',
        description: 'A hilarious game of charades and gestures!',
        longDescription: "Dumb Smash is a laugh-riot event where one team member acts out a word or phrase using only gestures and body language while their teammates try to guess. No speaking, no lip-syncing — just pure acting and hilarious moments!",
        fee: 50,
        date: 'March 11, 2026',
        time: '1:00 PM',
        duration: '2 Hours',
        venue: 'Open Stage',
        teamSize: 'Team of 3',
        rules: [
            'Teams of 3 members',
            'One actor, two guessers per round',
            'Categories: movies, songs, tech terms, general knowledge',
            'No speaking, writing, or pointing at objects',
            'Time limit per word — most correct guesses win'
        ]
    },

    'dive-n-design': {
        name: 'Dive N Design',
        icon: '🎨',
        category: 'technical',
        registrationUrl: 'https://forms.gle/MLoQK89ufee1evySA',
        description: 'Build stunning websites under pressure!',
        longDescription: 'Dive N Design is a web-based design competition where participants create visually stunning and functional web pages within a limited time. Show off your HTML, CSS, and JavaScript skills while demonstrating creativity and technical prowess!',
        fee: 50,
        date: 'March 11, 2026',
        time: '10:00 AM',
        duration: '3 Hours',
        venue: 'IT Block - Lab 2',
        teamSize: 'Individual',
        rules: [
            'Individual participation',
            'Time limit for design completion',
            'Use of frameworks allowed',
            'Judged on creativity, responsiveness, and functionality',
            'Theme will be announced at the start'
        ]
    },

    'twin-lock': {
        name: 'Twin Lock',
        icon: '🔐',
        category: 'technical',
        registrationUrl: 'https://forms.gle/S4GWsANiDMtvWXVv5',
        description: 'A challenging pairs event that tests coordination!',
        longDescription: 'Twin Lock is a team game where pairs must complete tasks in perfect sync. One member is blindfolded while the other guides them through challenges. Test your bond!',
        fee: 50,
        date: 'March 11, 2026',
        time: '2:30 PM',
        duration: '1.5 Hours',
        venue: 'Courtyard',
        teamSize: 'Team of 2',
        rules: [
            'Teams of 2 members',
            'Multiple rounds of coordination tasks',
            'Points awarded for speed and accuracy',
            'No physical contact during tasks',
            'Judges decisions are final'
        ]
    },

    'treasure-hunt': {
        name: 'Treasure Hunt',
        icon: '🗺️',
        category: 'non-technical',
        registrationUrl: 'https://forms.gle/mkJYAvoJZX36AU7Q8',
        description: 'Find hidden treasures across the campus!',
        longDescription: 'Get ready for an adventure of a lifetime! Solve puzzles, decode clues, and race against time to find the hidden treasure. Work as a team, explore the campus!',
        fee: 50,
        date: 'March 11, 2026',
        time: '11:00 AM',
        duration: '2 Hours',
        venue: 'Entire Campus',
        teamSize: 'Team of 4',
        rules: [
            'Teams of 4 members',
            'Clue-based treasure hunt across campus',
            'Time limit of 2 hours',
            'No running inside buildings',
            'Use of phones only for receiving clues'
        ]
    },

    'shadow-pages': {
        name: 'Shadow Pages',
        icon: '📄',
        category: 'technical',
        registrationUrl: 'https://forms.gle/kRnKJvNQiSt3muuK6',
        description: 'Craft compelling narratives in this writing event!',
        longDescription: 'Shadow Pages is a creative writing competition where participants craft compelling stories, poems, or essays based on a given theme. Let your imagination run wild!',
        fee: 50,
        date: 'March 11, 2026',
        time: '1:30 PM',
        duration: '1.5 Hours',
        venue: 'Library Hall',
        teamSize: 'Individual',
        rules: [
            'Individual participation',
            'Topic will be provided on the spot',
            'Time limit for writing',
            'Judged on creativity, grammar, and storytelling',
            'No plagiarism allowed'
        ]
    },

    'runtime-rush': {
        name: 'Runtime Rush',
        icon: '⚡',
        category: 'technical',
        registrationUrl: 'https://forms.gle/BrtoYtsXj9udut3N7',
        description: 'Fast-paced coding challenge for speed and accuracy!',
        longDescription: 'Runtime Rush is an intense coding speed contest. Solve algorithmic problems as fast as possible. Efficiency matters — optimize your code for the best runtime!',
        fee: 50,
        date: 'March 11, 2026',
        time: '10:00 AM',
        duration: '2 Hours',
        venue: 'IT Block - Lab 1',
        teamSize: 'Individual',
        rules: [
            'Individual participation',
            'Multiple rounds with increasing difficulty',
            'Languages: C, C++, Java, Python',
            'Fastest correct solution wins',
            'Penalty for wrong submissions'
        ]
    },

    'movie-mania': {
        name: 'Cine Crage',
        icon: '🎬',
        category: 'non-technical',
        registrationUrl: 'https://forms.gle/fYe4zPF6RxT8fDk47',
        description: 'Test your movie knowledge in this trivia battle!',
        longDescription: 'Are you a true cinephile? Movie Mania tests your knowledge of movies across genres and languages. Identify dialogues, songs, scenes, and more!',
        fee: 50,
        date: 'March 11, 2026',
        time: '3:00 PM',
        duration: '2 Hours',
        venue: 'Seminar Hall',
        teamSize: 'Team of 2',
        rules: [
            'Teams of 2 members',
            'Multiple rounds: audio, visual, and written',
            'Covers Tollywood, Bollywood, and Hollywood',
            'No phones during the competition',
            'Fastest buzzer gets to answer'
        ]
    },

    
    'meme-matrice': {
        name: 'Bottle Bash',
        icon: '🍾',
        category: 'non-technical',
        registrationUrl: 'https://forms.gle/eAW3KZnS54EJPtkt6',
        description: 'Create the funniest memes and win!',
        longDescription: 'Think you can make everyone laugh? Meme Matrice is where your meme-making skills get tested. Create memes on given topics and templates, and let the audience decide the Meme Lord!',
        fee: 50,
        date: 'March 11, 2026',
        time: '2:00 PM',
        duration: '1 Hour',
        venue: 'Online/Social Media',
        teamSize: 'Individual',
        rules: [
            'Individual participation',
            'Templates and topics provided',
            'Time limit for meme creation',
            'No offensive or inappropriate content',
            'Audience voting determines the winner'
        ]
    },
'colour-clash': {
    name: 'Colour Clash',
    icon: '🎨',
    category: 'non-technical',
    registrationUrl: 'https://forms.gle/yourColourClashLink',
    description: 'Test your creativity with colors and teamwork!',
    longDescription: 'Colour Clash is an exciting and vibrant competition where participants showcase their creativity through color-based challenges. Teams will complete fun and engaging tasks involving color coordination, artistic skills, and quick thinking. Bring your imagination and clash your way to victory!',
    fee: 50,
    date: 'March 11, 2026',
    time: '11:00 AM',
    duration: '1.5 Hours',
    venue: 'On-Campus',
    teamSize: 'Team of 2-4 Members',
    rules: [
        'Team participation (2-4 members)',
        'All materials will be provided',
        'Complete tasks within the given time',
        'Judging based on creativity and teamwork',
        'No unfair practices allowed'
    ]
},

'ipl-auction': {
    name: 'IPL Auction',
    icon: '🏏',
    category: 'non-technical',
    registrationUrl: 'https://forms.gle/yourIPLAuctionLink',
    description: 'Build your dream team and bid smartly!',
    longDescription: 'Experience the thrill of an IPL-style auction! Participants will act as team owners and strategically bid on players within a fixed budget. The goal is to build the strongest possible team using smart decision-making, planning, and game strategy. The team with the best-balanced squad wins the title!',
    fee: 100,
    date: 'March 11, 2026',
    time: '3:30 PM',
    duration: '2 Hours',
    venue: 'Seminar Hall',
    teamSize: 'Team of 3-5 Members',
    rules: [
        'Team participation (3-5 members)',
        'Each team gets a fixed virtual budget',
        'Bidding must follow auction rules',
        'No exceeding the allocated budget',
        'Final evaluation based on team strength and balance'
    ]
},

    'vibe-coding': {
        name: 'Vibe Coding',
        icon: '🎵',
        category: 'workshop',
        isWorkshop: true,
        registrationUrl: 'https://forms.gle/fLRQovf9H565ec286',
        description: 'Experience a new way of coding where creativity meets music. Build projects in a fun, high-energy environment with live beats and collaborative challenges.',
        longDescription: 'Vibe Coding is a revolutionary workshop where rhythm meets logic. Participants will learn to build interactive applications while being immersed in a high-energy environment with live music and collaborative coding challenges. It’s about finding your flow and pushing the boundaries of traditional software development.',
        fee: 600,
        date: 'March 11, 2026',
        time: '10:30 AM',
        duration: '4 Hours',
        venue: 'Main Auditorium',
        teamSize: 'Individual',
        topics: ['Creative Coding', 'Music Integration', 'Frontend Magic', 'Collaborative Flows'],
        prerequisites: ['Basic JavaScript knowledge recommended', 'A laptop with VS Code installed'],
        rules: [
            'Individual participation',
            'Bring your own laptop',
            'Active engagement with live coding challenges',
            'Projects will be shared at the end of the session'
        ]
    },
    'agentic-ai': {
        name: 'Agentic AI',
        icon: '🤖',
        category: 'workshop',
        isWorkshop: true,
        registrationUrl: 'https://forms.gle/fLRQovf9H565ec286',
        description: 'Explore the world of autonomous AI agents that can reason, plan, and act. Learn to build intelligent systems that solve real-world problems independently.',
        longDescription: 'Dive deep into the future of Artificial Intelligence with our Agentic AI workshop. Learn how to build and deploy autonomous agents that can analyze data, plan complex tasks, and execute actions with minimal human intervention. We’ll cover frameworks like LangChain, AutoGPT, and more.',
        fee: 600,
        date: 'March 12, 2026',
        time: '10:00 AM',
        duration: '5 Hours',
        venue: 'IT Block - Lab 1',
        teamSize: 'Individual',
        topics: ['LLM Fundamentals', 'Autonomous Agent Architecture', 'Task Planning & Execution', 'Safe AI Integration'],
        prerequisites: ['Python basics required', 'Interest in AI and Automation', 'Laptop with Python 3.10+'],
        rules: [
            'Individual participation',
            'Hands-on building session',
            'Collaborative debugging encouraged',
            'Final agent demos for selected participants'
        ]
    },
    'debug-relay': {

        name: 'Debug Relay',
        icon: '🐞',
        category: 'technical',
        registrationUrl: 'https://forms.gle/zY3iyaUmdB3biWhB8',
        description: 'A relay-style debugging marathon!',
        longDescription: 'Debug Relay is a high-stakes team event where one person starts debugging a complex piece of code and then passes the baton to the next teammate. Quick thinking and smooth transitions are key!',
        fee: 50,
        date: 'March 12, 2026',
        time: '2:00 PM',
        duration: '2 Hours',
        venue: 'IT Block - Lab 4',
        teamSize: 'Team of 2',
        rules: [
            'Teams of 2 members',
            'Relay format: one member at a time',
            'Identify and fix bugs in nested logic',
            'Smooth handovers are critical',
            'Fastest fix with clean code wins'
        ]
    }
}


/* ============================================
   Pass Types
   (Converted from RegistrationServlet.java)
   ============================================ */
export const PASS_TYPES = {
    full: {
        name: 'Full Pass',
        icon: '🚀',
        description: 'Access all events for both days',
        fee: 250
    },
    day: {
        name: 'Day Pass',
        icon: '⚡',
        description: 'Access events for a single day',
        fee: 150
    },
    premium: {
        name: 'Premium Pass',
        icon: '👑',
        description: 'Full access with accommodation and meals',
        fee: 600
    }
}
