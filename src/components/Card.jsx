import { products } from "../data.js"

export default function Card() {
    console.log(products);

    return (
        <>
            <h2 className="my-16 text-center text-[40px]">Carrito de compras</h2>
            <main className="grid grid-cols-3 gap-5 w-[1200px] mx-auto">
                {products.map((product, index) => (
                    <Product
                        key={product.id}
                        productProp={product}
                        index={index}
                    />
                ))}
            </main>
        </>
    )
}

function Product(props) {
    return (
        /* Conditional Rendering = renderizacion condicional
        usando operador ternario 
        */
        <>
            <figure className={`bg-gray-200 flex flex-col items-center mb-8 rounded-[12px]
                ${props.index % 2 === 0 ? "col-span-2" : "col-span-1"}`}>
                <img className="p-9 w-[60%]" src={props.productProp.imagen} alt="" />
                <h3 className="text-[35px] text-center">{props.productProp.nombre}</h3>
                <section className="flex flex-col items-center gap-4">
                    <p className="text-[20px]">{props.productProp.Descripcion}</p>
                    <a className="bg-red-700 py-2 text-[20px] px-6 rounded-xl text-white mb-10" href="">Add Carr</a>
                </section>
            </figure>
        </>
    )
}
