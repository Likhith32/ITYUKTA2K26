/* ============================================
   ITYUKTA 2K26 - FINAL EVENTS DATA
   ============================================ */

export const EVENTS = {

  /* ================= TECHNICAL EVENTS ================= */

  'runtime-rush': {
    name: 'Runtime Rush',
    icon: '⚡',
    category: 'technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/BrtoYtsXj9udut3N7',
    description: 'Competitive coding sprint focused on speed and accuracy.',
    longDescription:
      'Runtime Rush is a fast-paced coding competition where participants solve algorithmic problems within strict time limits.',
    fee: 50,
    date: 'March 11, 2026',
    time: '10:00 AM',
    duration: '2 Hours',
    venue: 'IT Block - Lab 1',
    teamSize: 'Individual',
    rules: [
      'Languages allowed: C, C++, Java, Python',
      'Penalty for wrong submissions',
      'Fastest correct solutions win'
    ]
  },

  'dive-n-design': {
    name: 'Dive N Design',
    icon: '🎨',
    category: 'technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/MLoQK89ufee1evySA',
    description: 'Design and develop stunning websites.',
    longDescription:
      'Participants build creative and responsive web pages within a limited time.',
    fee: 50,
    date: 'March 11, 2026',
    time: '10:00 AM',
    duration: '3 Hours',
    venue: 'IT Block - Lab 2',
    teamSize: 'Individual'
  },

  'shadow-pages': {
    name: 'Shadow Pages',
    icon: '📖',
    category: 'technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/kRnKJvNQiSt3muuK6',
    description: 'Creative writing competition.',
    longDescription:
      'Write stories, essays, or poems based on a given topic.',
    fee: 50,
    date: 'March 11, 2026',
    time: '1:30 PM',
    duration: '1.5 Hours',
    venue: 'Library Hall',
    teamSize: 'Individual'
  },

  'twin-lock': {
    name: 'Twin Lock',
    icon: '🔐',
    category: 'technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/S4GWsANiDMtvWXVv5',
    description: 'Blindfold coordination challenge.',
    longDescription:
      'One teammate is blindfolded and guided verbally by the other.',
    fee: 40, // ₹40 per person
    date: 'March 11, 2026',
    time: '2:30 PM',
    duration: '1.5 Hours',
    venue: 'Courtyard',
    teamSize: 'Team of 2'
  },

  'debug-relay': {
    name: 'Debug Relay',
    icon: '🐞',
    category: 'technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/zY3iyaUmdB3biWhB8',
    description: 'Relay-style debugging competition.',
    longDescription:
      'Teams take turns debugging complex code.',
    fee: 50,
    date: 'March 12, 2026',
    time: '2:00 PM',
    duration: '2 Hours',
    venue: 'IT Block - Lab 4',
    teamSize: 'Team of 2'
  },

  /* ================= NON-TECHNICAL EVENTS ================= */

  'treasure-hunt': {
    name: 'Treasure Hunt',
    icon: '🗺️',
    category: 'non-technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/mkJYAvoJZX36AU7Q8',
    description: 'Adventure-based clue solving game.',
    longDescription:
      'Teams solve clues and find the final treasure.',
    fee: 50, // ₹50 per person
    date: 'March 11, 2026',
    time: '11:00 AM',
    duration: '2 Hours',
    venue: 'Entire Campus',
    teamSize: 'Team of 4',
    rules: [
      '₹50 per person',
      '4 members per team'
    ]
  },

  'steady-wins': {
    name: 'Steady Wins',
    icon: '🍾',
    category: 'non-technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/yourBottleEventLink',
    description: 'Bottle placement teamwork challenge.',
    longDescription:
      'Teams must place a bottle at a distance without letting it fall.',
    fee: 10, // ₹10 per person
    date: 'March 11, 2026',
    time: '12:00 PM',
    duration: '1 Hour',
    venue: 'Open Ground',
    teamSize: 'Team of 10',
    rules: [
      '₹10 per person',
      '10 members per team'
    ]
  },

  'cine-craze': {
    name: 'Cine Craze',
    icon: '🎬',
    category: 'non-technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/fYe4zPF6RxT8fDk47',
    description: 'Movie-based fun challenges.',
    longDescription:
      'Guess movies, identify songs, and act famous scenes.',
    fee: 40, // base per person
    date: 'March 11, 2026',
    time: '3:00 PM',
    duration: '2 Hours',
    venue: 'Seminar Hall',
    teamSize: '2 or 3 Members',
    rules: [
      '₹40 per person',
      '₹80 for 2 members',
      '₹100 for 3 members'
    ]
  },

  'ludo': {
    name: 'Ludo',
    icon: '🎲',
    category: 'non-technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/n5PxHkCy1CjAY6yH9',
    description: 'Classic board game competition.',
    longDescription:
      'Move all tokens home before opponents.',
    fee: 40, // ₹40 per person
    date: 'March 11, 2026',
    time: '11:00 AM',
    duration: '1 Hour',
    venue: 'Seminar Hall',
    teamSize: '2 Members',
    rules: [
      '₹40 per person',
      '2 members per team'
    ]
  },

  'colour-clash': {
    name: 'Colour Clash',
    icon: '🎨',
    category: 'non-technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/yourColourClashLink',
    description: 'Fast color-response challenge.',
    longDescription:
      'Arrange colours in correct sequence quickly.',
    fee: 30, // ₹30 per person
    date: 'March 11, 2026',
    time: '11:30 AM',
    duration: '1.5 Hours',
    venue: 'On-Campus Arena',
    teamSize: 'Individual / Team',
    rules: [
      '₹30 per person'
    ]
  },

  'lip-sync-battle': {
    name: 'Lip Sync Battle',
    icon: '🎤',
    category: 'non-technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/hJ572L9YyLdnxPy97',
    description: 'Stage performance entertainment event.',
    longDescription:
      'Participants perform songs by lip-syncing.',
    fee: 30, // ₹30 per person
    date: 'March 11, 2026',
    time: '1:00 PM',
    duration: '1.5 Hours',
    venue: 'Open Stage',
    teamSize: '2 Members',
    rules: [
      '₹30 per person',
      '2 members per team'
    ]
  },

  'ipl-auction': {
    name: 'IPL Auction',
    icon: '🏏',
    category: 'non-technical',
    currency: 'INR',
    registrationUrl: 'https://forms.gle/yourIPLAuctionLink',
    description: 'Strategic team-building auction event.',
    longDescription:
      'Teams bid for players within a fixed virtual budget.',
    fee: 20, // ₹20 per person
    date: 'March 11, 2026',
    time: '3:30 PM',
    duration: '2 Hours',
    venue: 'Seminar Hall',
    teamSize: 'Team of 6',
    rules: [
      '₹20 per person',
      '6 members per team'
    ]
  }

};