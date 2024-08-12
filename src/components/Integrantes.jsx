import React from 'react'

export default function Integrantes() {
  return (
    <div>
      <section className='flex flex-col items-center justify-center p-6 text-center'>
        <h1 className='uppercase text-center mt-4 pb-6 font-bold text-xl  text-sobre '>Sobre nós</h1>
        <section>
            <div className='w [345px] p-8 h-auto  flex flex-col justify-normal items-center bg-fundoHeader left-10 rounded-[8px] mt-10'>
              <img className=' w-48 h-48 ' src="/src/assets/pedro.png" alt="" />
            <p className='font-bold text-2xl pt-6 font-sans'>Pedro H. Gomes</p>
            <p className='text-xl'><span className='font-bold'>Idade:</span>17 anos</p>
            <p className='text-xl'> <span className='font-bold'>Formação:</span> Unasp- Técnico de Informática</p>
            <a className='pt-6 ' href="https://www.instagram.com/juh_schiavi18?igsh=ZnVzMHZ1dWc2am4x&utm_source=qr"> <img src="/src/assets/insta.png" alt="" /></a>
            </div>
           
        </section>

        <section className='py-20'>
            <div className='w [345px] p-8 h-auto  flex flex-col justify-normal items-center bg-fundoHeader left-10 rounded-[8px] mt-10'>
              <img className=' w-48 h-48 ' src="/src/assets/judecosta 2.png" alt="" />
            <p className='font-bold text-2xl pt-6 font-sans'>Julia Schiavi</p>
            <p className='text-xl'><span className='font-bold'>Idade:</span>18 anos</p>
            <p className='text-xl'> <span className='font-bold'>Formação:</span> Unasp- Técnico de Informática</p>
            <a className='pt-6 ' href="https://www.instagram.com/juh_schiavi18?igsh=ZnVzMHZ1dWc2am4x&utm_source=qr"> <img src="/src/assets/insta.png" alt="" /></a>
            </div>
            
        </section>

        <section>
            <div className='w [345px] p-8 h-auto  flex flex-col justify-normal items-center bg-fundoHeader left-10 rounded-[8px] mt-10'>
              <img className=' w-48 h-48 ' src="/src/assets/joao.png" alt="" />
            <p className='font-bold text-2xl pt-6 font-sans'>João Victor Martins</p>
            <p className='text-xl'><span className='font-bold'>Idade:</span>17 anos</p>
            <p className='text-xl'> <span className='font-bold'>Formação:</span> Unasp- Técnico de Informática</p>
            <a className='pt-6 ' href="https://www.instagram.com/juh_schiavi18?igsh=ZnVzMHZ1dWc2am4x&utm_source=qr"> <img src="/src/assets/insta.png" alt="" /></a>
            </div>
            
        </section>
      </section>
    </div>
  )
}
