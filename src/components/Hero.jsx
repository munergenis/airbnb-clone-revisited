import heroImg from 'assets/hero-img.png'

const Hero = () => {
  return (
    <section className='px-8'>
      <img className='px-10 py-6' src={heroImg} alt="Collage of AirBnb experiences" />
      <h1 className='mt-2 text-3xl font-semibold'>Online Experiences</h1>
      <p className='w-3/4 mt-3 leading-none font-normal text-neutral-600'>Join unique interactive activites led by one-of-a-kind hosts-all without leaving home.</p>
    </section>
  )
}

export default Hero
