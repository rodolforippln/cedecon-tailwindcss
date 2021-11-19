
import Image from 'next/image'
import CardSection04 from './CardSection04'

export default function Section04(props) {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-5'>        
        <div className='col-span-3 lg:flex lg:items-center px-8 lg:p-6 xl:p-16'>
            <div className='flex-grow'>
                <h1 className='text-3xl sm:text-4xl font-bold mb-8'>Graduação a distância na Cruzeiro do Sul Virtual</h1>
                <p className='mb-8 sm:mb-16'>Fazer um curso de graduação na modalidade EAD traz diversas vantagens: além da flexibilidade de tempo, que permite estudar em qualquer horário ou local, bastando, para isso, ter um aparelho com conexão à internet, ele possui mensalidades mais acessíveis — e tudo isso com diploma sem diferenciação, afinal, os cursos EAD são reconhecidos e regulamentos pelo Ministério da Educação – MEC.</p>
                <div className='grid grid-cols-2 gap-12'>

                    <CardSection04 
                        title='Bolsa Mérito até %100'
                        content='Conheça nossas bolsas de estudo por mérito e escolha a sua!'                    
                    />
                    <CardSection04 
                        title='Bolsas de Estudo'
                        content='Construa a sua história de sucesso aqui com a gente.'                    
                    />
                    <CardSection04 
                        title='Segunda Graduação'
                        content='Venha estudar conosco com bolsa de até 50% até o fim do curso!'                    
                    />
                    <CardSection04 
                        title='Teste Vocacional'
                        content='Encontre a profissão certa para você com o Teste Vocacional!'                    
                    />

                </div>                
            </div>
        </div>

        <div className='lg:flex lg:items-center col-span-2 order-first sm:order-none'>
            <div className='flex flex-col sm:pr-16 justify-center items-center md:mx-auto px-8 mb-6'>
                <Image
                    width={492}
                    height={684}
                    alt='Imagem Hero'                    
                    src="/home/img19-otimizada.jpg"
                    className='rounded-md'
                />        
            
            </div>
        </div>
    </div>
  )
}