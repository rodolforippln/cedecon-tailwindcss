
import Image from 'next/image'

export default function Section02() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>        
        <div className=' lg:flex lg:items-center p-4 lg:p-6 xl:p-8'>
            <div className='flex-grow p-8'>
                <h1 className='text-3xl sm:text-4xl font-bold mb-4'>Agendamento Digital</h1>

                <div>
                        <Image
                            width={50}
                            height={50}
                            alt='Imagem icom section 2'                    
                            src="/home/icon-1.svg"
                        />
                        <Image
                            width={50}
                            height={50}
                            alt='Imagem icom section 2'                    
                            src="/home/icon-23.svg"
                        />
                        <Image
                            width={50}
                            height={50}
                            alt='Imagem icom section 2'                    
                            src="/home/icon-67.svg"
                        /> 
                    </div> 

                <p className='mt-4'>Com a Agendada Digital, você faz a prova na unidade de sua escolha, no melhor dia e horário. O resultado é imediato!</p>

                
                
            </div>
        </div>

        <div className='lg:flex lg:items-center'>
            <div className='flex flex-col py-8 sm:pl-8 sm:pr-16 justify-center md:mx-auto border border-solid'>
                <Image
                    width={511}
                    height={340}
                    alt='Imagem Hero'                    
                    src="/home/estudar-a-distancia.jpg"
                    className='sm:pr-16 border border-solid border-gray-400'
                />        
            
            </div>
        </div>
    </div>
  )
}