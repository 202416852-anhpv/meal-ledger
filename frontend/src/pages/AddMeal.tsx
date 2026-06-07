import { useState } from "react";
import { TopBar } from "../components/layout/TopBar";
import { Button } from "../components/common/Button";

export default function AddMeal() {
  const [rawText, setRawText] = useState("");

  return (
    <div>
      <TopBar title="Thêm bữa ăn" />
      <form>
        <h2>Nhập nhanh thông tin</h2>
        <textarea
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          placeholder=""
          required
        />
      </form>
      <Button label="Phân tích" />
    </div>
  );
}
