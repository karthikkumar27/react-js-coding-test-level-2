import CategoryMenu from "../category-menu/category";

const Carousel: React.FC = () => {    
    return (
      <div className="color-carousel bg-purple-600 w-full">
            <div className="xl:container mx-auto">
                <div className="px-5">
                    <div className="category-carousel flex flex-row place-content-between">
                        <div className="bg-white border-y-2 border-slate-300 w-1/6">
                            <CategoryMenu></CategoryMenu>
                        </div>

                        <div className="color-carousel-slide w-5/6">
                            <img className="" src="/images/slide-01.jpg" />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }

export default Carousel;