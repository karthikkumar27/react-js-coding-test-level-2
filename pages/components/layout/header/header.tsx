const Header: React.FC = () => {
  return (
    <header className="bg-white w-full">
        {/** Top Menu */}
        <div className="bg-gray-100">
            <div className="xl:container mx-auto">
                <ul className="flex flex-row uppercase flex justify-end text-xs py-2">
                    <li className="pr-10 last:pr-0"><a href='/'>Sell On Lazada</a></li>
                    <li className="pr-10 last:pr-0"><a href='/'>Customer Care</a></li>
                    <li className="pr-10 last:pr-0"><a href='/'>Track My Order</a></li>
                    <li className="pr-10 last:pr-0"><a href='/'>Login</a></li>
                </ul>
            </div>
        </div>

        {/** Header */}
        <div className="xl:container mx-auto">
            <div className="top-section-wrapper p-5 flex flex-row place-content-between">
                <div className="logo">
                    <img className="h-10" src="/images/laz-logo.png" />
                </div>
                <div className="global-search w-3/5">
                    <form className="global-search-form flex flex-row items-stretch space-x-4">
                        <div className="global-search-input-wrapper flex flex-row w-full">
                            <input className="global-search-input bg-slate-100 h-10 px-4 outline-transparent	focus:border-cyan-600 w-full" type="text" placeholder="Search in Lazada"/>
                            <div className="search-icon bg-amber-500 bg-[url('/images/search-icon.svg')] h-10 w-10 bg-[length:24px_24px] bg-no-repeat bg-center"></div>
                        </div>
                        <div className="cart-icon w-10 h-10 bg-[url('/images/cart-icon.png')] h-12 w-12 bg-[length:24px_24px] bg-no-repeat bg-center"></div>
                    </form>
                </div>
                <div className="laz-e-wallet">
                    <img className="h-10" src="/images/laz-wallet.png" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;