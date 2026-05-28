export interface Program {
  label: string;
  title: string;
  name: string;
  age: string;
  icon: string;
  color: string;
  colorLt: string;
  idx: number;
  body: string;
  modules: string[];
  pricing: string;
}

const C = {
  gold: '#c89f56', goldLt: 'rgba(200,159,86,0.11)',
  teal: '#0f3b46', tealLt: 'rgba(15,59,70,0.08)',
  coral: '#e07a5f', coralLt: 'rgba(224,122,95,0.11)',
};

export const programs: Program[] = [
  {
    label: 'Stage 01', title: 'The Sprouting Seed', name: 'Sprouts', age: 'Ages 5 – 8', icon: '🌱',
    color: C.coral, colorLt: C.coralLt, idx: 0,
    body: 'Foundational habits of mind and heart — curiosity, kindness, basic breath-awareness, and the joy of stories.',
    modules: ['Morning ritual & gratitude journalling', 'Panchatantra and Sanatan story circles', 'Mind-awareness and breathing for children', 'Simple seva projects', 'Bhagavad Gītā verse recitation'],
    pricing: '₹1,999/mo'
  },
  {
    label: 'Stage 02', title: 'The Seeking Mind', name: 'Seekers', age: 'Ages 9 – 12', icon: '🔥',
    color: C.gold, colorLt: C.goldLt, idx: 1,
    body: 'Critical thinking, identity, and purpose — using the Gītā as a map for navigating adolescence with clarity.',
    modules: ['Philosophy dialogues & Socratic circles', 'Gītā case-study workshops', 'Emotional regulation via pranayama', 'Community seva projects', 'Journalling & self-inquiry'],
    pricing: '₹2,499/mo'
  },
  {
    label: 'Stage 03', title: 'The Pioneer', name: 'Pioneers', age: 'Ages 13 – 16', icon: '🏔️',
    color: C.teal, colorLt: C.tealLt, idx: 2,
    body: 'Leadership, contribution, and the pursuit of dharma — preparing young people to act with skill and compassion in the world.',
    modules: ['Dharma-leadership workshops', 'Mentorship & peer-coaching circles', 'Urban seva & social entrepreneurship', 'Meditation & inner-silence retreats', 'Life-design and values clarification'],
    pricing: '₹2,999/mo'
  },
];
