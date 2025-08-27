
export default function Banner() {
    return (
        <>
            <section className="relative w-[1200px] mx-auto my-8">
                <section
                    className='h-[450px] bg-cover bg-no-repeat rounded-[20px]'
                    style={{ backgroundImage: `url(${"/postresyponques.jpg"})` }}>
                </section>
                <section className="absolute inset-0 flex flex-col justify-center items-center text-white text-[40px] bg-black/50 rounded-[20px] gap-4">
                    <h2 className="font-bold text-[50px]">Para los gustos, los sabores</h2>
                    <p className="font-bold text-[30px]">Ahora Piña Colada</p>
                    <a className="bg-red-700 py-2 text-[20px] px-6 rounded-xl text-white" href="">Compra YA</a>
                </section>
            </section>
        </>
    )
}