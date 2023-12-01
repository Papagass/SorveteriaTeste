import {Link} from 'react-router-dom';

import './style.css';

export default function Topo() {
  return (
    <header>
      <div className="limita-container">
        <a href='index.html'> 
          <img src='assets/logo.png' title='icone-logo' alt='logomarca'/>
        </a>

        <nav className='topo-links'>
          <Link className='link-topo' to='/'>Home</Link>
          <Link className='link-topo' to='/sabores'>Sabores</Link>
          <Link className='link-topo' to='/sobre'>Sobre</Link>
        </nav>
      </div>
    </header>
  )
}



