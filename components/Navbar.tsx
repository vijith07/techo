import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className='logo'>
          <Link href='/'>
            <a>
              <img src='/log.png' alt='Techo' />
            </a>
          </Link>
        </li>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
        <li>
          <a href='#'>Subscribe</a>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
