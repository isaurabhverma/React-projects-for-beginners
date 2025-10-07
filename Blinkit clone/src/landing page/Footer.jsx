import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';


export default function Footer() {
    return (
        <footer className='border-t'>
            <div className="footer-container max-w-screen-xl mx-auto px-6 pt-10 pb-2 ">

                <div className="links grid grid-cols-2 gap-10 my-2">

                    <div className="links">
                        <h2 className='font-bold mb-2'>Useful links</h2>
                        <ul className='grid grid-cols-3 gap-y-2  text-sm text-gray-500'>
                            <li>Blog</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>FAQs</li>
                            <li>Security</li>
                            <li>Contact</li>
                            <li>Partner</li>
                            <li>Franchise</li>
                            <li>Seller</li>
                            <li>Warehouse</li>
                            <li>Deliver</li>
                            <li>Resources</li>
                            <li>Recipes</li>
                            <li>Bistro</li>
                        </ul>
                    </div>

                    <div className="categories">
                        <h2 className='font-bold mb-2'>
                            categories <span className='text-green-500 text-sm'>see all</span>
                        </h2>
                        <ul className="space-y-1 text-xs text-gray-500 grid grid-cols-3 gap-y-1 gap-x-10">
                            <li>Vegetables & Fruits</li>
                            <li>Cold Drinks & Juices</li>
                            <li>Bakery & Biscuits</li>
                            <li>Dry Fruits, Masala & Oil</li>
                            <li>Paan Corner</li>
                            <li>Pharma & Wellness</li>
                            <li>Personal Care</li>
                            <li>Beauty & Cosmetics</li>
                            <li>Electronics & Electricals</li>
                            <li>Toys & Games</li>
                            <li>Rakhi Gifts</li>
                            <li>Dairy & Breakfast</li>
                            <li>Instant & Frozen Food</li>
                            <li>Sweet Tooth</li>
                            <li>Sauces & Spreads</li>
                            <li>Organic & Premium</li>
                            <li>Cleaning Essentials</li>
                            <li>Ice Creams </li>
                            <li>Fashion & Accessories</li>
                            <li>Stationery Needs</li>
                            <li>Print Store</li>
                            <li>Munchies</li>
                            <li>Tea, Coffee & Health Drinks</li>
                            <li>Atta, Rice & Dal</li>
                            <li>Chicken, Meat & Fish</li>
                            <li>Baby Care</li>
                            <li>Home & Office</li>
                            <li>Pet Care</li>
                            <li>Kitchen & Dining</li>
                            <li>Books</li>
                            <li>E-Gift Cards</li>
                        </ul>
                    </div>

                </div>

                <div className="social-conatiner flex justify-between items-center px-10 py-7">
                    <p className='text-xs text-gray-500'>© Blink Commerce Private Limited, 2016-2025</p>
                    <div className="flex items-center gap-4">
                        <p className='text-sm text-gray-500'>Download app</p>
                        <img src="googleplay.webp" alt="" className="h-7" />
                        <img src="Iosplay.webp" alt="" className="h-7" />
                        <div className="social-icons flex gap-3">
                            <FacebookIcon fontSize='medium' />
                            <XIcon fontSize='medium' />
                            <InstagramIcon fontSize='medium' />
                            <LinkedInIcon fontSize='medium' />
                            <PinterestIcon fontSize='medium' />
                        </div>
                    </div>
                </div>

                <div className="disclaimer">
                    <p className="text-xs text-gray-400">
                        “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
                    </p>
                </div>
            </div>
        </footer>
    )
}