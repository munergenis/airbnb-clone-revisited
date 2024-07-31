import Navbar from 'components/Navbar.jsx'
import Hero from 'components/Hero.jsx'
import Card from 'components/Card.jsx'
import data from 'src/data/data.js'

const App = () => {
  const cards = data.map(el => (
    <Card
      key={el.id}
      img={el.coverImg}
      rating={el.stats.rating}
      reviewCount={el.stats.reviewCount}
      location={el.location}
      title={el.title}
      price={el.price}
      openSpots={el.openSpots}
    />
  ))

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl pt-24">
        <Hero />
        <section className='px-8 mt-16 gap-4 flex overflow-x-scroll'>
          {cards}
        </section>
      </main>
    </>
  )
}

export default App
