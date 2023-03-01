function DessertsList({ data }) {
  return (
    <ul>
      {data
        .filter((dessert) => dessert.calories < 500)
        .sort((a, b) => a.calories - b.calories)
        .map((dessert) => (
          <li key={dessert.name}>
            {dessert.name} - {dessert.calories} cal
          </li>
        ))}
    </ul>
  );
}

export default DessertsList;
