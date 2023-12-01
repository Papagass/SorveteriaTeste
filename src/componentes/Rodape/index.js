import React from 'react';

import './style.css';

export default function Rodape(){
    return (
        <footer>
            <div className='secao-rodape'>
                <div className='rodape-logo'>
                    <img src='assets/logo.png' title='logo rodapé' alt='logomarca' />
                </div>

                <div className='rodape-info'>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernadino de Campos, 98</p> 
                    <p>São Paulo, SP 12345-678</p>
                </div>
                
                <div className='rodape-info'>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>

                <div className='rodape-info'>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>

            <div className='rodape-copyright'>
                <p>Gelateria. Orgulhosamente desenvolvido por Rickson Santos</p>
            </div>
        </footer>
    )
}
