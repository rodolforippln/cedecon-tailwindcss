
import Image from 'next/image'

export default function Section05() {
  return (
    <div className='flex flex-col mx-auto mt-8 mb-8'>
        <div className='mx-8 mt-6 mb-8 text-center'>
            <h2 className='text-2xl font-bold'>Estude na Cruzeiro do Sul Virtual</h2>
            <p>Escolha uma das nossas formas de ingresso e venha para a Cruzeiro do Sul Virtual.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-16 mt-6 text-center gap-8'>

            
            <div>
                <Image
                    width={75}
                    height={75}
                    alt='Imagem Hero'                    
                    src="/home/icon-45.svg"
                    className='rounded-md'
                /> 
                <h2 className='text-xl font-semibold mt-2 mb-3'>Bolsa Mérito até 100%</h2>
                <p>Conheça nossas bolsas de estudo por mérito e escolha a sua!</p>
            </div>
            <div>
                <Image
                    width={75}
                    height={75}
                    alt='Imagem Hero'                    
                    src="/home/icon-14.svg"
                    className='rounded-md'
                /> 
                <h2 className='text-xl font-semibold mt-2 mb-3'>Bolsa Mérito até 100%</h2>
                <p>Conheça nossas bolsas de estudo por mérito e escolha a sua!</p>
            </div>
            <div>
                <Image
                    width={75}
                    height={75}
                    alt='Imagem Hero'                    
                    src="/home/icon-23.svg"
                    className='rounded-md'
                /> 
                <h2 className='text-xl font-semibold mt-2 mb-3'>Bolsa Mérito até 100%</h2>
                <p>Conheça nossas bolsas de estudo por mérito e escolha a sua!</p>
            </div>


        </div>

        <div className='mx-8 mt-8 mb-8 text-center'>

            <Image
                width={833}
                height={118}
                alt='Imagem Hero'                    
                src="/home/three-pointers.svg"
                className='rounded-md'
            /> 

        </div>
        <div className='mx-8 mt-2 mb-2 text-center'>
            <p>Por que fazer <span className='font-bold'>Cruzeiro do Sul Virtual?</span></p>
        </div>

        <div className='mt-8 mb-8 text-center mx-auto'>
            <div className='bg-white rounded-md pt-8 px-1 shadow-2xl relative mx-8'>
                <div className='absolute top-1 left-1'>
                    <Image
                        width={65}
                        height={25}
                        alt='Imagem Hero'                    
                        src="/home/3pontos-browser.jpg"
                        
                    />
                </div >

                <Image
                    width={900}
                    height={667}
                    alt='Imagem Hero'                    
                    src="/home/image-strecht.jpg"
                    className=''
                />

            </div> 
        </div>
        <div className='mx-8 sm:mx-24 md:mx-36 lg:mx-64 sm:mt-3 text-center'>
            <p className='text-sm'>Graduação, Segunda Graduação 2.0, Formação Pedagógica, MBA, Especialização, Cursos Livres, Técnicos, de Idiomas e Preparatórios em diversas áreas do conhecimento.</p>
        </div>

    </div>
  )
}