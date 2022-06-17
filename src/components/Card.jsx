function Card(props) {
  return (
    <div>
      <div className="flex flex-col border-4 bg-stone-900	border-indigo-700 rounded-lg w-52 h-80	">
        <img className="item-img rounded-lg" src={props.item.image} alt={props.item.title} />
        <span className="leading-tight text-lg text-slate-50	tracking-tighter	mt-2 mx-1.5	">{props.item.title}</span>
        <span className="price-text font-bold	text-xl	subpixel-antialiased tracking-normal	"> $ {props.item.price}</span>
      </div>
    </div>
  );
}

export default Card;
