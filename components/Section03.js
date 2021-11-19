

import Image from 'next/image'

export default function Section03() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>

        <div className='lg:flex lg:items-center'>
            <div className='hidden sm:flex flex-col py-8 sm:pl-8 sm:pr-16 justify-center md:mx-auto'>
                <Image
                    width={510}
                    height={459}
                    alt='Imagem Hero'                    
                    src="/home/celular-image.jpg"
                />            
            </div>
        </div>

        <div className='lg:flex lg:items-center p-4 lg:p-6 xl:p-8'>
            <div className='flex-grow p-8'>
                <h1 className='text-3xl sm:text-4xl font-bold mb-3'>Prova On-line</h1>
                <p className='mb-4'>Com a Agendada Digital, você faz a prova na unidade de sua escolha, no melhor dia e horário. O resultado é imediato!</p>                  
            </div>
        </div>

    </div>
  )
}