import logo from '/logo.png'

export default function Header() {
    return (
        <>
            <section className='flex justify-around mt-8'>
                <img className='w-[300px]' src={logo} alt="" />
                <nav className='flex justify-between items-center gap-10 text-[25px]'>
                    <a className='hover:bg-red-700 p-4 rounded-xl hover:text-white' href="">Menu</a>
                    <a className='hover:bg-red-700 p-4 rounded-xl hover:text-white' href="">Categorias</a>
                    <a className='hover:bg-red-700 p-4 rounded-xl hover:text-white' href="">Puntos</a>
                    <a className='hover:bg-red-700 p-4 rounded-xl hover:text-white' href="">Blog</a>
                </nav>
            </section>
        </>
    )
}