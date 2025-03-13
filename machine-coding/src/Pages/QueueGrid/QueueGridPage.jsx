import { useState } from "react";
import { QueueGrid } from "./QueueGrid";

const QueueGridPage = () => {
  const [size, setSize] = useState(3);

  const handleSizeChange = (e) => {
    if (e.target.value >= 0 && e.target.value < 10) {
      setSize(e.target.value);
    }
  };

  return (
    <div className="queue-grid-page-container">
      <label className=".queue-grid-label">
        Grid size (1-9):
        <input type="number" value={size} onChange={handleSizeChange} />
      </label>
      <QueueGrid size={size || 1} />
    </div>
  );
};

export default QueueGridPage;
