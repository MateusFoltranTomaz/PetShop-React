import React from 'react'
import Hotviller from '../imagens/rottweiller.jpg'



function Clientes() {
  return (
    <div>
        <section className='clientes'>
            <div>
                <h1>Relação com o cliente</h1>
                <p>Proin enim augue, feugiat fermentum maximus vel, rhoncus ultricies elit. Donec quis aliquam nibh. In hac habitasse platea dictumst. Aenean volutpat tempus ex sed mattis. Nam sodales placerat urna varius vehicula. Vestibulum commodo justo non magna tincidunt, rhoncus vulputate risus condimentum. Donec dignissim risus sit amet placerat convallis. Praesent bibendum tortor in facilisis interdum. Etiam accumsan quis tortor nec tincidunt.</p>  
            </div>
            <img src={Hotviller}/>
        </section>

    </div>
  )
}

export default Clientes
