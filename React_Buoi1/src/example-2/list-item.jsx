import Item from "./item";

export default function ListItem() {
  return (
    <div className="grid grid-cols-4 gap-5 my-5 container mx-auto">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}
