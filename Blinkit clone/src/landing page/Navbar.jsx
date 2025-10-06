import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-container justify-between flex border-b items-center px-6 sticky top-0 z-50 h-20">
                <div className="h-full border-r items-center flex hover:bg-slate-100 pr-4">
                    <div className="logo ">
                        <h1 className='text-2xl font-extrabold'> <span className="text-yellow-300">Blink</span><span className="text-green-600">it</span> </h1>
                    </div>
                </div>
                <div className="item-container flex hover:bg-slate-100 gap-6 px-4 flex-grow">
                    <div className="delivery text-xs">
                        <h1 className='font-bold'>Deliver in 8 minutes</h1>
                        <p className='w-45'>B62, Pocket B, South City I, Sector...<ArrowDropDownIcon /> </p>
                    </div>
                    <div className="search-tem flex-grow self-center">
                        <div className="flex bg-gray-100 rounded-md px-2 py-1 border border-slate-200 items-center">
                            <SearchIcon fontSize='small' />
                            <form action="">
                                <input type="text" className=' bg-gray-100 outline-none' />
                            </form>
                        </div>
                    </div>

                    <div className="action flex items-center gap-4">
                        <button className='font-thin'>
                            Login
                        </button>
                        <button className="bg-gray-200 py-2 px-3 rounded text-white text-xs font-bold">
                            <ShoppingCartOutlinedIcon /> My Cart
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}