import React from 'react'
import Logo from '/LOGO.svg'

export default function Header() {
  return (
    <header className='w-full bg-fundoHeader px-4 py-2 flex items-center justify-between overflow-x-auto'>

        <button className='flex-shrink-0'>
           <img src={Logo} alt="" className='w-12 h-8 md:w-20 md:h-12 mr-3 md:mr-auto'/>
        </button>

        <nav className='flex-grow'>
            <ul className='flex md:justify-end space-x-4 md:space-x-6 text-xs md:text-base uppercase text-naoSelecionado font-bold'>
                <li className='flex text-botaoSelecionado underline decoration-botaoSelecionado decoration-2 '>
                    <a href="">Home</a>
                </li>
                <li className= 'whitespace-nowrap'>
                    <a href="">Como Usar</a>
                </li>
                <li>
                    <a href="">Materiais</a>
                </li>
                <li>
                    <a href="">Referências</a>
                </li>
                <li className='whitespace-nowrap'>
                    <a href="">Sobre nós</a>
                </li>
            </ul>
        </nav>
        
    </header>
  )
}