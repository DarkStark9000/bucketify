function Card(props) {
  return (
    <div>
      <h1>{props.item.name}</h1>
      <h2>{props.item.price}</h2>
    </div>
  );
}

export default Card;
