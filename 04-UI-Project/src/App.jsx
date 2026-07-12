import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Content from './components/Section-1/Content'
import Section2 from './components/Section-2/Section2'
import Navbar from './components/Section-1/Navbar'

function App() {
const users = [
  {
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    intro: "Senior Software Engineer building scalable cloud applications and distributed systems.",
    tag: "Software Engineer",
  },
  {
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    intro: "UI/UX Designer creating intuitive digital products with a user-first approach.",
    tag: "UI/UX Designer",
  },
  {
    img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
    intro: "Product Manager leading cross-functional teams to deliver impactful solutions.",
    tag: "Product Manager",
  },
  {
    img: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=600",
    intro: "Data Scientist turning complex datasets into valuable business insights.",
    tag: "Data Scientist",
  },
  {
    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
    intro: "Marketing Strategist helping brands grow through creative digital campaigns.",
    tag: "Marketing Strategist",
  },
  {
    img: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
    intro: "Full Stack Developer specializing in modern web technologies and scalable APIs.",
    tag: "Full Stack Developer",
  },
];
  return (
    <div>
      <Navbar />
      <Content users={users} />
      <Section2 />
    </div>
  )
}

export default App
