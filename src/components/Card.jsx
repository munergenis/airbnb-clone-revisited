import starRedIcon from 'assets/star-red-icon.png'

const Card = ({ img, rating, reviewCount, location, title, price, openSpots }) => {
  const badge = {
    isVisible: false,
    text: ''
  }

  if (openSpots <= 0) {
    badge.isVisible = true
    badge.text = 'SOLD OUT'
  } else if (location === 'Online') {
    badge.isVisible = true
    badge.text = 'ONLINE'
  } else {
    badge.isVisible = false
    badge.text = ''
  }

  return (
    <div className='relative text-[10px] w-44 flex-grow-0 flex-shrink-0'>
      {badge.isVisible && <div className='absolute bg-white left-2 top-2 rounded-sm px-2 py-1'>{badge.text}</div>}
      <img src={`/${img}`} alt={title}/>
      <div className='flex gap-1 mt-2'>
        <img className='h-3' src={starRedIcon} alt="rating icon" />
        <span className='ml-1'>{rating}</span>
        <span className='text-neutral-400'>({reviewCount})</span>
        <span className='text-neutral-400'>·</span>
        <span className='text-neutral-400'>{location}</span>
      </div>
      <h2>{title}</h2>
      <p>
        <span className='font-bold'>From ${price}</span> / person
      </p>
    </div>
  )
}

export default Card
