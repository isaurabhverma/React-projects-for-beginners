export default function Card({ img, title, desc, price }) {
    return (
        <div className="min-w-[180px] max-w-[180px] bg-white rounded-lg shadow-sm border p-3 flex flex-col">
            <img src={img} alt={title} className="h-24 object-contain mb-2" />

            <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
            <p className="text-xs text-gray-500 mb-2">{desc}</p>

            <div className="flex justify-between items-center mt-auto">
                <p className="font-semibold text-sm">₹{price}</p>
                <button className="border border-green-700 text-green-700 px-3 py-1 rounded-md text-xs "> ADD
                </button>
            </div>
        </div>
    )
}
