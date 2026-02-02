

import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Careers() {
  const [careers, setCareers] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    coverLetter: "",
    resume: null,
  });

  useEffect(() => {
    document.title = "Careers";
  }, []);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await api.get("/getCareer");
        setCareers(Array.isArray(res.data?.data) ? res.data.data : []);
      } catch {
        setError("Failed to load careers");
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const handleApplySubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume || formData.resume.type !== "application/pdf") {
      alert("Only PDF resume is allowed");
      return;
    }

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) payload.append(key, value);
    });

    payload.append("postId", selectedCareer._id);
    payload.append("positionApplied", selectedCareer.position);

    try {
      await api.post("/applyJob", payload);
      alert("Application submitted successfully");
      setShowApplyForm(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        coverLetter: "",
        resume: null,
      });
    } catch {
      alert("Failed to apply");
    }
  };

  if (loading)
    return <div className="py-24 text-center">Loading careers...</div>;

  if (error)
    return (
      <div className="py-24 text-center text-red-500">{error}</div>
    );

  return (
    <div className="bg-white">
      <div className="pt-20 pb-10">
        <h1 className="text-3xl font-semibold text-center mb-14">
          Careers
        </h1>
      </div>

      {careers.length === 0 && (
        <div className="py-24 text-center text-gray-600">
          No career openings available
        </div>
      )}

      {careers.map((career) => (
        <div key={career._id}>
         
          <div
            onClick={() =>
              setOpenId(openId === career._id ? null : career._id)
            }
            className="text-center cursor-pointer mb-8"
          >
            <p className="text-xl font-semibold text-slate-800">
              {career.title}
            </p>
            <span className="block w-24 h-1 bg-orange-400 mx-auto mt-3 rounded" />
          </div>

          {/* Content */}
          {openId === career._id && (
            <div className="bg-slate-50 py-20">
              <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm px-6 sm:px-14 py-12">
                <p className="mb-2">
                  <b>Position:</b> {career.position}
                </p>
                <p className="mb-2">
                  <b>Experience:</b> {career.experienceRequired}
                </p>
                <p className="mb-4">
                  <b>Deadline:</b> {career.deadline}
                </p>

                <h3 className="font-semibold text-lg mb-2">
                  Job Description
                </h3>

                <div
                  className="prose max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: career.description,
                  }}
                />

                <button
                  onClick={() => {
                    setSelectedCareer(career);
                    setShowApplyForm(true);
                  }}
                  className="mt-8 w-full sm:w-auto bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

    
      {showApplyForm && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center px-4 py-6">
            <div className="bg-white w-full max-w-2xl p-6 sm:p-8 rounded-2xl shadow-xl relative">

             
              <button
                onClick={() => setShowApplyForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
              >
                ×
              </button>

              <h2 className="text-xl font-semibold mb-6">
                Apply for {selectedCareer.position}
              </h2>

              <form
                onSubmit={handleApplySubmit}
                className="space-y-6"
                encType="multipart/form-data"
              >
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    ["Full Name", "fullName", "John Doe"],
                    ["Email", "email", "john@email.com", "email"],
                    ["Phone", "phone", "+977 98XXXXXXXX"],
                    ["Address", "address", "Kathmandu, Nepal"],
                  ].map(([label, key, placeholder, type]) => (
                    <div key={key}>
                      <label className="text-sm font-medium text-gray-700">
                        {label}
                      </label>
                      <input
                        type={type || "text"}
                        required
                        placeholder={placeholder}
                        className="w-full mt-1 border rounded-lg p-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [key]: e.target.value,
                          })
                        }
                      />
                    </div>
                  ))}
                </div>

               
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Cover Letter
                  </label>
                  <textarea
                    rows={5}
                    className="w-full mt-1 border rounded-lg p-3 resize-none text-sm sm:text-base focus:ring-2 focus:ring-orange-400"
                    placeholder="Write a brief cover letter..."
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        coverLetter: e.target.value,
                      })
                    }
                  />
                </div>

                {/* RESUME */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Resume (PDF only)
                  </label>

                  <div className="mt-2 border-2 border-dashed rounded-lg p-4 sm:p-6 text-center">
                    <input
                      type="file"
                      accept="application/pdf"
                      required
                      className="hidden"
                      id="resumeUpload"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          resume: e.target.files[0],
                        })
                      }
                    />

                    <label
                      htmlFor="resumeUpload"
                      className="cursor-pointer text-orange-500 font-medium block"
                    >
                      Tap to upload PDF
                    </label>

                    {formData.resume && (
                      <p className="text-sm text-gray-600 mt-2">
                        {formData.resume.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 pt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition cursor-pointer"
                  >
                    Submit Application
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowApplyForm(false)}
                    className="text-gray-500 hover:underline cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
