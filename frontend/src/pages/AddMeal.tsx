import { useState } from "react";
import { TopBar } from "../components/layout/TopBar";
import { Button } from "../components/common/Button";

export default function AddMeal() {
  const [rawText, setRawText] = useState("");

  return (
    <div>
      <TopBar title="Thêm bữa ăn" />
      <form>
        <div className="px-4">
          <h2 className="mt-8 text-xl">Nhập nhanh thông tin</h2>
          <textarea
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder=""
            required
            className="w-full border border-gray-400 rounded-md h-32 my-4"
          />
        </div>
        <Button type="submit" label="Phân tích" />
      </form>
    </div>
  );
}
