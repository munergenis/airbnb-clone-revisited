import airbnbLogo from 'assets/airbnb-logo.png'

const Navbar = () => {
  return (
    <nav className='fixed w-full bg-white px-8 py-6 shadow-slate-200 shadow-md'>
      <img className='w-24' src={airbnbLogo} alt="AirBnb logo" />
    </nav>
  )
}

export default Navbar
