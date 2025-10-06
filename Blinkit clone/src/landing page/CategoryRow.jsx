import Card from "./Card.jsx"

export default function CategoryRow({ category, items }) {
    return (
        <div className="mb-8 mx-12">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold">{category}</h2>
                <button className="text-green-600 text-sm font-medium hover:underline">see all</button>
            </div>

            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {items.map((item, idx) => (
                    <Card
                        key={idx}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}