import Link from 'next/Link'


export default function NavBar() {

    return (
          <div className='container-nav'>
            <nav className='menu'>
              <ul>
                <li className="li-inicio">
                  <Link href="/">
                    <a className='link-inicio'>Inicio</a>
                  </Link>
                </li>

                <li className="li-central">
                  <Link href="/crear">
                    <a>Crear</a>
                  </Link>
                </li>

                <li className='li-about'>
                  <Link href="/about">
                    <a className="link-about">About</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
    )
}
