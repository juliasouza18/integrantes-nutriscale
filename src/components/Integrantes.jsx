import React from 'react'

export default function Integrantes() {
  return (
    <div>
      <section className='flex flex-col items-center justify-center p-6'>
        <h1 className='uppercase text-center mt-4 mb-7 font-bold text-xl  text-sobre'>Sobre nós</h1>
        <section>
            <div className='w [345px] p-8 h-[488px]  flex flex-col justify-normal items-center bg-fundoHeader left-10 rounded-[8px]'>
              <img className=' w-40 h-40 ' src="/src/assets/judecosta 2.png" alt="" />
            <p className=''>Julia Schiavi</p>
            <p className=''>Idade:18 anos</p>
            <p className=''>Formação: Unasp- Técnico de Informática</p>
            <a href="https://www.instagram.com/juh_schiavi18?igsh=ZnVzMHZ1dWc2am4x&utm_source=qr"> <img src="/src/assets/insta.png" alt="" /></a>
            </div>
            
        </section>
      </section>
    </div>
  )
}
