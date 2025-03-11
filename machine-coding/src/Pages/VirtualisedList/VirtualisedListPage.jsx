import { VirtualisedList } from "./VirtualisedList";

const VirtualisedListPage = () => {
  const list = Array.from({ length: 10000 }, (_, index) => index);

  return (
    <div>
      <VirtualisedList list={list} />
    </div>
  );
};

export default VirtualisedListPage;
