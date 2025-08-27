export default function Card() {
    return (
        <>
            <h2 className="my-16 text-center text-[40px]">Carrito de compras</h2>
            <main className="grid grid-cols-3 gap-5 w-[1200px] mx-auto">
                <figure className="bg-gray-200 flex flex-col items-center mb-8 rounded-[12px]">
                    <img className="p-9 w-[60%]" src={"/genovesa.png"} alt="" />
                    <h3 className="text-[35px] text-center">Genovesa</h3>
                    <section className="flex flex-col items-center gap-4">
                        <p className="text-[20px]">Deliciosas Genovesas</p>
                        <a className="bg-red-700 py-2 text-[20px] px-6 rounded-xl text-white mb-10" href="">Add Carr</a>
                    </section>
                </figure>
                <figure className="bg-gray-200 flex flex-col items-center mb-8 rounded-[12px]">
                    <img className="p-9 w-[60%]" src={"/cobitos.png"} alt="" />
                    <h3 className="text-[35px] text-center">Cobitos</h3>
                    <section className="flex flex-col items-center gap-4">
                        <p className="text-[20px] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <a className="bg-red-700 py-2 text-[20px] px-6 rounded-xl text-white" href="">Add Carr</a>
                    </section>
                </figure>
                <figure className="bg-gray-200 flex flex-col items-center mb-8 rounded-[12px]">
                    <img className="p-9 w-[60%]" src={"/reposteria.png"} alt="" />
                    <h3 className="text-[35px] text-center">Reposteria</h3>
                    <section className="flex flex-col items-center gap-4">
                        <p className="text-[20px] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <a className="bg-red-700 py-2 text-[20px] px-6 rounded-xl text-white" href="">Add Carr</a>
                    </section>
                </figure>
                <figure className="bg-gray-200 flex flex-col items-center mb-8 rounded-[12px]">
                    <img className="p-9 w-[60%]" src={"/snacks.png"} alt="" />
                    <h3 className="text-[35px] text-center">Snacks</h3>
                    <section className="flex flex-col items-center gap-4">
                        <p className="text-[20px] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <a className="bg-red-700 py-2 text-[20px] px-6 rounded-xl text-white" href="">Add Carr</a>
                    </section>
                </figure>
                <figure className="bg-gray-200 flex flex-col items-center mb-8 rounded-[12px]">
                    <img className="p-9 w-[60%]" src={"/tortas.png"} alt="" />
                    <h3 className="text-[35px] text-center">Tortas</h3>
                    <section className="flex flex-col items-center gap-4">
                        <p className="text-[20px] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <a className="bg-red-700 py-2 text-[20px] px-6 rounded-xl text-white mb-10" href="">Add Carr</a>
                    </section>
                </figure>
            </main>
        </>
    )
}
