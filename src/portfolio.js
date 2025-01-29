const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'SK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Samrath kumar',
  role: 'Front End && FullStack Engineer',
  description:
    'Dedicated and detail-oriented React Developer with  2 years of full-stack development experience. Proficient in creating scalable and responsive web applications with a strong focus on React, SCSS, Redux, and React Router. Complemented by expertise in full-stack development, including RESTful API creation with Java, GCP deployment, and Python for web scraping. Skilled in mentoring team members and contributing to cross-functional teams',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/samrath007/',
    github: 'https://github.com/Samarath',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Drum Machine',
    description:
      'This drum kit will let you play music. A good tool to enjoy yourself with music. I made this during the FreeCodeCamp Front end project.',
    stack: ['React', 'CSS'],
    sourceCode: 'https://github.com/Samarath/Drum-Machine',
    livePreview: 'https://samarath.github.io/Drum-Machine/',
  },
  {
    name: 'Pomodoro clock',
    description:
      ' This app is helpful for that kind of people who is always procrasting. This is pomodoro clock where you can set time of your work and also set time of break very easily. Check this out.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Samarath/Pomodoro-clock',
    livePreview: 'https://samarath.github.io/Pomodoro-clock/',
  },
  {
    name: 'AI Mentor',
    description:
      'AI-Powered Career Growth Mentor is a platform designed to help students seek mentorship and track their career progress.It provides personalized skill roadmaps, allowing users to set career goals, track progress interactively, and receive AI-driven mentorship tailored to their interests. PS: Currently it is in development',
    stack: ['SASS', 'Next js', 'Python', 'Java', 'langchain', 'Material UI'],
    sourceCode: 'https://github.com/Samarath/My-AI-Mentor',
    livePreview: 'https://github.com/Samarath/My-AI-Mentor',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Redux/Redux-saga',
  'SASS',
  'Material UI',
  'Git',
  'GCP',
  'JAVA',
  'Spring boot',
  'Python',
  'firebase',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'originalsamrathkumar@gmail.com',
}

export { header, about, projects, skills, contact }
