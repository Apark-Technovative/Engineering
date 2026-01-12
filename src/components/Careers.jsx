import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Careers() {
  const [careers, setCareers] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await api.get("/getCareer");
        console.log("Career API response:", res.data);

        
        if (Array.isArray(res.data?.data)) {
          setCareers(res.data.data);
        } else {
          setCareers([]);
        }
      } catch (err) {
        console.error("Error fetching careers:", err);
        setError("Failed to load careers");
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  if (loading)
    return <div className="py-24 text-center text-gray-600">Loading careers...</div>;

  if (error)
    return <div className="py-24 text-center text-red-500">{error}</div>;

  return (
    <div className="bg-white">
      
      <div className="relative pt-20 pb-10">
        <h1 className="text-3xl font-semibold text-center mb-14">Careers</h1>
      </div>

      
      {careers.length === 0 && (
        <div className="py-24 text-center text-gray-600">
          No career openings available
        </div>
      )}

      
      {careers.map((career) => (
        <div key={career._id}>
          
          <div
            onClick={() => setOpenId(openId === career._id ? null : career._id)}
            className="text-center cursor-pointer mb-8"
          >
            <p className="text-xl font-semibold text-slate-800">{career.title}</p>
            <span className="block w-24 h-1 bg-orange-400 mx-auto mt-3 rounded"></span>
          </div>

          
          {openId === career._id && (
            <div className="bg-slate-50 py-20">
              <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm px-14 py-12">
                <p className="font-semibold text-gray-800 mb-2">
                  Position: {career.position}
                </p>
                <p className="text-gray-600 mb-2">
                  Experience Required: {career.experienceRequired}
                </p>
                <p className="text-gray-600 mb-4">Deadline: {career.deadline}</p>

                <h3 className="font-semibold text-lg mb-2">Job Description</h3>
                <p className="text-gray-600 leading-relaxed">{career.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
