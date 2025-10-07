export default function Categories() {

    const categories = [
        {
            name:"category 1",
            img:"categories/one.avif"
        },
         {
            name:"category 1",
            img:"categories/two.avif"
        },
         {
            name:"category 1",
            img:"categories/three.avif"
        },
         {
            name:"category 1",
            img:"categories/four.avif"
        },
        {
            name:"category 1",
            img:"categories/five.avif"
        },
         {
            name:"category 1",
            img:"categories/six.avif"
        },
         {
            name:"category 1",
            img:"categories/seven.avif"
        },
         {
            name:"category 1",
            img:"categories/eight.avif"
        },
        {
            name:"category 1",
            img:"categories/nine.avif"
        },
         {
            name:"category 1",
            img:"categories/ten.avif"
        },
         {
            name:"category 1",
            img:"categories/A-one.avif"
        },
         {
            name:"category 1",
            img:"categories/A-two.avif"
        },
         {
            name:"category 1",
            img:"categories/A-three.avif"
        },
         {
            name:"category 1",
            img:"categories/A-four.avif"
        },
        {
            name:"category 1",
            img:"categories/A-five.avif"
        },
         {
            name:"category 1",
            img:"categories/A-six.avif"
        },
         {
            name:"category 1",
            img:"categories/A-seven.avif"
        },
         {
            name:"category 1",
            img:"categories/A-eight.avif"
        },
        {
            name:"category 1",
            img:"categories/A-nine.avif"
        },
         {
            name:"category 1",
            img:"categories/A-ten.avif"
        },
    ];


    return (
        <>
            <div className="grid grid-cols-10 px-32 py-3 my-2">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center cursor-pointer">
                        <img src={cat.img} alt={cat.name} className="w-20 h-28 object-contain" />
                        <p className="mt-2 text-sm font-medium">{cat.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}