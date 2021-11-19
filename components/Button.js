import Link from 'next/link'

export default function TestePage({ text, color, link }) {
  return (  
      <>    
    <Link href='#'>
        <a className={`text-${color}-600 bg-${color}-200 hover:text-white hover:bg-${color}-600  font-semibold rounded-md px-6 py-3 mr-4 whitespace-nowrap`}>{text}</a>      
    </Link>
    
    </>
    
  )
}