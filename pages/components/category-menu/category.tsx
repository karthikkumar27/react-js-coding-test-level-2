const CategoryMenu: React.FC = () => {
  return (
    <div className="category-menu">
        <ul className="text-xs">
            <li className="block"><a className="m-2 block" href=''>Electronic Accessories</a></li>
            <li className="block"><a className="m-2 block" href=''>Electronic Devices</a></li>
            <li className="block"><a className="m-2 block" href=''>TV &amp; Home Appliances</a></li>
            <li className="block"><a className="m-2 block" href=''>Health &amp; Beauty</a></li>
            <li className="block"><a className="m-2 block" href=''>Babies &amp; Toys</a></li>
            <li className="block"><a className="m-2 block" href=''>Groceries &amp; Pets</a></li>
            <li className="block"><a className="m-2 block" href=''>Home &amp; Lifestyle</a></li>
        </ul>
    </div>
  )
}
  
export default CategoryMenu;