import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-clip bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}
