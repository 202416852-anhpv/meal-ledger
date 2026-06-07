import { TopBar } from "../components/layout/TopBar";
import { Button } from "../components/common/Button";
import { useNavigate } from "react-router";
import { useState, type SyntheticEvent } from "react";

export default function AddMeal() {
  const [rawText, setRawText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate("/add-meal-detail", { state: { rawText: rawText } });
  };

  return (
    <div>
      <TopBar title="Thêm bữa ăn" />
      <form onSubmit={handleSubmit}>
        <div className="px-4">
          <h2 className="mt-8 text-xl">Nhập nhanh thông tin</h2>
          <textarea
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder=""
            required
            className="w-full border border-gray-400 rounded-md h-32 my-4 p-2"
          />
        </div>
        <Button type="submit" label="Phân tích" />
      </form>
    </div>
  );
}
