import CategoryRow from "../CategoryRow.jsx"

export default function ColdDrinks() {
    const items = [
        { img: "rowImages/first.avif", title: "prod 1", desc: "1 unit (32 pieces)", price: 50 },
        { img: "rowImages/second.avif", title: "prod 2", desc: "1 pack (32+32 pieces)", price: 50 },
        { img: "rowImages/third.avif", title: "prod 3", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/fourth.avif", title: "prod 4", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/fifth.avif", title: "prod 5", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/sixth.avif", title: "prod 6", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/seventh.avif", title: "prod 7", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/eighth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/ninth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/tenth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/eleventh.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/tweleveth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/thirteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/fourteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/fifteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { img: "rowImages/sixteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
    ]

    return (
        <div className="p-6">
            <CategoryRow category="cold drinks" items={items} />
        </div>
    )
}
