import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

export default function KarakhanaOrderPanel() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("Pending");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);

  const handleUpdate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUpdated(true);
      setTimeout(() => setUpdated(false), 2000);
    }, 1000);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center">Karakhana Order Panel</h1>
      <div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Order ID</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 text-sm"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Status</label>
          <select
            className="w-full border rounded-md px-3 py-2 text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Pending</option>
            <option>Cutting</option>
            <option>Stitching</option>
            <option>QC</option>
            <option>Ready to Dispatch</option>
            <option>Delivered</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Notes</label>
          <textarea
            className="w-full border rounded-md px-3 py-2 text-sm"
            placeholder="Add any remarks..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center justify-center mx-auto"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" /> Updating...
              </>
            ) : updated ? (
              <>
                <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                Updated!
              </>
            ) : (
              "Update Order"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
