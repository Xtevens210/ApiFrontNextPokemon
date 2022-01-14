import Link from 'next/Link'


export default function NavBar() {

    return (
          <nav className='menu'>
            <ul>
              <li>
                <Link href="/">
                  <a className='link-inicio'>Inicio</a>
                </Link>
              </li>

              <li>
                <Link href="/crear">
                  <a>Crear</a>
                </Link>
              </li>

              <li>
                <Link href="/About">
                  <a className="link-about">About</a>
                </Link>
              </li>
            </ul>
          </nav>
    )
}
