import React, {useState} from 'react'
import Logo from '/LOGO.svg'

export default function Header() {
  return (
    <header className='w-full bg-fundoHeader px-4 py-2 flex items-center justify-between overflow-x-auto'>

        <button className='flex-shrink-0'>
           <img src={Logo} alt="" className='w-12 h-8 md:w-20 md:h-12 mr-3 md:mr-auto'/>
        </button>

        <nav className='flex-grow hidden md:inline'>
            <ul className='flex md:justify-end space-x-4 md:space-x-6 text-xs md:text-base uppercase text-naoSelecionado font-bold'>
                <li className='flex'>
                    <a href="">Home</a>
                </li>
                <li className= 'whitespace-nowrap'>
                    <a href="">Como Usar</a>
                </li>
                <li>
                    <a href="">Materiais</a>
                </li>
                <li className=''>
                    <a href="">Referências</a>
                </li>
                <li className='whitespace-nowrap text-botaoSelecionado underline decoration-botaoSelecionado decoration-2'>
                    <a href="">Sobre nós</a>
                </li>
            </ul>
        </nav>

        {/*Menu Hamburgui kkkkkacabapeloamor*/}
        <button className='space-y-1 group md:hidden'>
            <div className='w-6 h-1 bg-white'></div>
            <div className='w-6 h-1 bg-white'></div>
            <div className='w-6 h-1 bg-white'></div>

            {/* menu */}
            <ul className='bg-fundoHeader w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end text-naoSelecionado'>
                <button className='px-10 py-8 relative ml-auto'>
                    <div className='w-6 h-1 rotate-45 absolute bg-white'></div>
                    <div className='w-6 h-1 -rotate-45 absolute bg-white'></div>
                </button>
                <li className='flex justify-center w-full '>
                    <a href="">Home</a>
                </li>
                <li className= 'whitespace-nowrap'>
                    <a href="">Como Usar</a>
                </li>
                <li>
                    <a href="">Materiais</a>
                </li>
                <li className=''>
                    <a href="">Referências</a>
                </li>
                <li className='whitespace-nowrap text-botaoSelecionado'>
                    <a href="">Sobre nós</a>
                </li>
            </ul>
        </button>
        
    </header>
  )
}