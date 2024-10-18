import { useState } from "react";
import { TrackerColors } from "../../../schema/colors.schema";
import { InputModal } from "../../../Components/InputModal";

interface TrackerContainer {
  id: number;
  title: string;
  bgColor: string;
  borderColor: string;
}

interface TrackerItem {
  containerId: number;
  id: number;
  content: string;
}

export const Tracker = () => {
  const [containers, setContainers] = useState<TrackerContainer[]>([]);
  const [items, setItems] = useState<TrackerItem[]>([]);
  const [draggedItem, setDraggedItem] = useState<TrackerItem | null>(null);
  const [containerInputOpen, setContainerInputOpen] = useState(false);
  const [itemInputOpen, setItemInputOpen] = useState<number>(0);

  function addContainer(title: string) {
    setContainers((prev) => {
      const id = prev.length === 0 ? 1 : prev[prev.length - 1].id + 1;
      const { bgColor, borderColor } =
        TrackerColors[Math.floor(Math.random() * TrackerColors.length)];

      return [...prev, { id, title, bgColor, borderColor }];
    });
  }

  function deleteContainer(containerId: number) {
    setContainers((prev) => {
      setItems((prevItems) => {
        return [...prevItems].filter(
          ({ containerId: contId }) => contId !== containerId
        );
      });
      return [...prev].filter(({ id }) => id !== containerId);
    });
  }

  function addItem(containerId: number, content: string) {
    setItems((prev) => {
      const id = prev.length === 0 ? 1 : prev[prev.length - 1].id + 1;

      return [...prev, { id, containerId, content, bgColor: "bg-red-200" }];
    });
  }

  function deleteItem() {
    if (draggedItem) {
      const item = draggedItem;
      setItems((prev) => {
        return [...prev].filter(({ id }) => id !== item.id);
      });

      setDraggedItem(null);
    }
  }

  function moveItem(containerId: number) {
    if (draggedItem) {
      const item = draggedItem;
      setItems((prev) => {
        const newV = [...prev];

        const existing = newV.find(({ id }) => id === item.id);
        if (existing) existing.containerId = containerId;

        return newV;
      });

      setDraggedItem(null);
    }
  }

  return (
    <div className="relative h-full w-full overflow-auto p-2">
      <InputModal
        isOpen={containerInputOpen}
        title="Enter category name"
        onClose={() => {
          setContainerInputOpen(false);
        }}
        onSubmit={(content) => {
          addContainer(content);
        }}
        maxLen={20}
      />
      <InputModal
        isOpen={itemInputOpen !== 0}
        title="Enter item content"
        onClose={() => {
          setItemInputOpen(0);
        }}
        onSubmit={(content) => {
          addItem(itemInputOpen, content);
        }}
        maxLen={200}
        isTextArea
      />
      <div className="flex flex-wrap gap-4 pb-1">
        {containers.map((cont) => {
          return (
            <div
              key={`tracker-container-${cont.id}`}
              className="flex flex-col gap-1 min-w-52 max-w-96 border border-slate-700 rounded-lg"
              onDrop={() => moveItem(cont.id)}
              onDragOver={(e) => {
                e.preventDefault();
              }}
            >
              <div className="flex items-center gap-1 bg-slate-700 p-2 rounded-t-md text-white">
                {cont.title}
                <div className="flex-1 bg-white mt-1 h-[1px]"></div>
                <button
                  type="button"
                  onClick={() => {
                    setItemInputOpen(cont.id);
                  }}
                  className="bg-white rounded-full text-black h-4 w-4 flex items-center justify-center"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => {
                    deleteContainer(cont.id);
                  }}
                  className="bg-white rounded-full text-black h-4 w-4 flex items-center justify-center"
                >
                  x
                </button>
              </div>
              <div className="p-2 flex flex-wrap gap-2">
                {items
                  .filter(({ containerId }) => containerId === cont.id)
                  .map((item) => {
                    return (
                      <div
                        draggable
                        onDragStart={() => {
                          setDraggedItem(item);
                        }}
                        key={`tracker-item-${item.id}`}
                        className={`${cont.bgColor} rounded-3xl border-2 ${cont.borderColor} px-2`}
                      >
                        {item.content}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className="absolute bottom-6 right-4 bg-white shadow-elevated-button rounded-full h-6 w-6 flex items-center justify-center"
        onClick={() => {
          setContainerInputOpen(true);
        }}
      >
        +
      </button>
      {draggedItem && (
        <div
          onDrop={deleteItem}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          className="absolute bg-gradient-to-b from-transparent to-red-500 bottom-0 left-0 w-full h-12 flex items-start justify-center text-2xl rounded-b-xl"
        >
          D
        </div>
      )}
    </div>
  );
};
