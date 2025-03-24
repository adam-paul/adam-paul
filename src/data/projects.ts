
import type { Project } from '@/components/ProjectCard';

const projects: Project[] = [
  {
    id: '1',
    title: 'Portals',
    summary: 'A portal-based hub for game creators, providing a shared universe for the new wave of AI-enabled web games.',
    description: 'Three.js is emerging as the new native animation layer for the web. This has been missing since the untimely demise of flash. Now, web games are back, and Portals is providing a way to create a user-generated game-world for accessing all these new games in one place. In the future, shared creator revenue, further in-game mechanics, an interoperable game assets layer, and many other things can be added. Imagine if the internet were fun again?',
    thumbnail: 'https://i.imgur.com/WCY0Ohz.png',
    images: [
      'https://i.imgur.com/YSuq7Wg.mp4',
      'https://i.imgur.com/MjUHgDV.png',
      'https://i.imgur.com/LNKSqGa.png',
    ],
    technologies: ['React', 'TypeScript', 'Three.js', 'Neon serverless backend'],
    githubUrl: 'https://github.com/adam-paul/portals',
    liveUrl: 'https://game-portals.com/'
  },
  {
    id: '2',
    title: 'Hackerchat',
    summary: 'A terminal-themed, browser-based Slack clone with chatbots for querying the message space.',
    description: 'Minimalist chat interface with channels, threads, subthreads, direct messages, ASCII reactions, user presence tracking, file and picture uploads, webhooks for idle disconnect, and more. A chatbot is available 24/7 for natural language queries to the message store through a vector database and RAG API. Command line aesthetic for maximal camp. Built in three days. If you can\'t connect to the websockets, I haven\'t paid my Railway bill.',
    thumbnail: 'https://i.imgur.com/eZJ1CiT.png',
    images: [
      'https://i.imgur.com/Zxx8r5Q.png',
      'https://i.imgur.com/r44s8je.png',
      'https://i.imgur.com/qvvuCy0.png',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel', 'postgres', 'RAG w/ Pinecone vectorstore'],
    githubUrl: 'https://github.com/adam-paul/hackerchat',
    liveUrl: 'https://hackerchat-adampaul.vercel.app/'
  },
  {
    id: '3',
    title: 'Smart Home IoT Hub',
    summary: 'A central control system for managing smart home devices through web and mobile interfaces.',
    description: 'This IoT hub connects and controls various smart home devices through a central interface. The hub uses MQTT for device communication, features a React-based web dashboard, and includes a React Native mobile app. It supports temperature sensors, smart lights, security cameras, and voice assistants, with automation capabilities through Node-RED.',
    thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585503418537-88331351ad99?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1932&auto=format&fit=crop'
    ],
    technologies: ['React', 'Node.js', 'MQTT', 'React Native', 'Node-RED', 'MongoDB', 'WebSockets'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '4',
    title: 'Neural Network Visualization Tool',
    summary: 'Interactive web tool for visualizing and understanding neural network architectures and operations.',
    description: 'This educational tool visualizes neural network architectures and operations in real-time. Users can build custom neural networks, observe training processes, and see how data transforms through layers. The visualization shows activation functions, weights, biases, and gradient flow, making it ideal for learning and teaching machine learning concepts.',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1668088233308-0cf1a9b5ba4c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1655721530791-59f5bbd64a36?q=80&w=1932&auto=format&fit=crop'
    ],
    technologies: ['Three.js', 'React', 'TensorFlow.js', 'WebGL', 'TypeScript', 'WebWorkers'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '5',
    title: 'Decentralized File Storage System',
    summary: 'A blockchain-based decentralized storage solution for secure file sharing and storage.',
    description: 'This decentralized application (DApp) provides secure file storage and sharing using blockchain technology. Files are encrypted, split into fragments, and distributed across a peer-to-peer network. The system uses smart contracts to manage access control and payments, with IPFS for content-addressable storage and Ethereum for transaction processing.',
    thumbnail: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2032&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2032&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1642058800587-6a231f468e3e?q=80&w=1972&auto=format&fit=crop'
    ],
    technologies: ['Ethereum', 'Solidity', 'IPFS', 'React', 'Web3.js', 'Node.js', 'Cryptography'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

export default projects;
