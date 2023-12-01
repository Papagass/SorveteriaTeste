import React from 'react';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

import './style.css'

export default function App() {
  return (

    <div>
      
    <Topo />

    <main>

      <section className='fundo-banner'>
        <div className='secao-banner-sabores'>
          <div className='texto-banner-sabores'>
            <h1>NOSSOS SABORES</h1>
          </div>
        </div>
      </section>

      <section className='secao-sabores limita-container'>
        <h1>SABORES DE SORVETE</h1>

        <div className='container-sabores'>
          <div className='item-sabores'>
            <img src='assets/sabor-oreo.png' title='sabor oreo' alt='sabor oreo'/>
            <span>Sorvete de Oreo</span>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>

          <div className='item-sabores'>
            <img src='assets/sabor-pistache.png' title='sabor pistache' alt='sabor pistache'/>
            <span>Sorvete Pistache</span>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>

          <div className='item-sabores'>
            <img src='assets/sabor-cookies-avela.png' title='sabor cookies & avelã' alt='sabor cookies & avelã'/>
            <span>Sorvete Cookies & Avelã</span>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>

          <div className='item-sabores'>
            <img src='assets/sorbet-kiwi.png' title='sabor de kiwi' alt='sabor de kiwi'/>
            <span>Sorvete de Kiwi</span>
            <p>Delicoso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
          </div>

          <div className='item-sabores'>
            <img src='assets/sorbet-morango.png' title='sabor de morango' alt='sabor de morango'/>
            <span>Sorvete de Morango</span>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>

          <div className='item-sabores'>
            <img src='assets/sorbet-limao.png' title='sabor limão' alt='sabor limão'/>
            <span>Sorvete de Limão Siciliano</span>
            <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
          </div>
          
        </div>

      </section>

    </main>

    <Rodape />

    </div>

  )

  
}


