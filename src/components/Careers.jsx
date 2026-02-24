import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Careers() {

  const [jobs, setJobs] = useState([]);
  const [openJobId, setOpenJobId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [showApplyForm, setShowApplyForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
const [isSubmitted, setIsSubmitted] = useState(false);
 
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
    async function fetchJobs() {
      try {
        const response = await api.get("/getCareer");
        setJobs(Array.isArray(response.data?.data) ? response.data.data : []);
      } catch (error) {
        setError("Failed to load careers. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }


  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      alert("Only PDF files are allowed");
      return;
    }
    setFormData((prev) => ({ ...prev, resume: file }));
  }

  async function handleApplySubmit(e) {
    e.preventDefault();


    if (!selectedJob?._id) {
      alert("Please select a valid job to apply for.");
      return;
    }

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.coverLetter.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!formData.resume) {
      alert("Please upload your resume (PDF only).");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();

      payload.append("fullName", formData.fullName.trim());
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("address", formData.address.trim());
      payload.append("coverLetter", formData.coverLetter.trim());
      payload.append("positionApplied", selectedJob.position);
      payload.append("postId", selectedJob._id);
      payload.append("resume", formData.resume);


   const response = await api.post("/applyJob", payload, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Your application was submitted successfully!");
        setShowApplyForm(false);


        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          coverLetter: "",
          resume: null,
        });
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "There was an error submitting your application."
      );
    } finally {
      setIsSubmitting(false);
    }
  }


  if (loading) {
    return <div className="py-24 text-center">Loading career openings...</div>;
  }

  if (error) {
    return <div className="py-24 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="bg-white">
      <div className="pt-20 pb-10">
        <h1 className="text-3xl font-semibold text-center mb-6">Careers</h1>


        {successMessage && (
          <div className="text-center text-green-600 font-semibold mb-6">
            {successMessage}
          </div>
        )}
      </div>

      {jobs.length === 0 && (
        <div className="py-24 text-center text-gray-600">
          No career openings available at the moment.
        </div>
      )}


      {jobs.map((job) => (
        <div key={job._id}>
         
          <div
            onClick={() =>
              setOpenJobId(openJobId === job._id ? null : job._id)
            }
            className="text-center cursor-pointer mb-8"
          >
            <p className="text-xl font-semibold text-slate-800">{job.title}</p>
            <span className="block w-24 h-1 bg-orange-400 mx-auto mt-3 rounded" />
          </div>

          
          {openJobId === job._id && (
            <div className="bg-slate-50 py-20">
              <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm px-6 sm:px-14 py-12">
                <p className="mb-2">
                  <b>Position:</b> {job.position}
                </p>
                <p className="mb-2">
                  <b>Experience:</b> {job.experienceRequired}
                </p>
                <p className="mb-4">
                  <b>Deadline:</b> {job.deadline}
                </p>

                <h3 className="font-semibold text-lg mb-2">Job Description</h3>

                <div
                  className="prose max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />

                <button
                  onClick={() => {
                    setSelectedJob(job);
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
                className="absolute top-4 right-4 text-gray-400 text-2xl cursor-pointer"
                aria-label="Close application form"
              >
                ×
              </button>

              <h2 className="text-xl font-semibold mb-6">
                Apply for {selectedJob.position}
              </h2>

              <form onSubmit={handleApplySubmit} className="space-y-6">
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    ["Full Name", "fullName", "John Doe"],
                    ["Email", "email", "john@email.com", "email"],
                    ["Phone", "phone", "+977 98XXXXXXXX"],
                    ["Address", "address", "Kathmandu, Nepal"],
                  ].map(([label, name, placeholder, type]) => (
                    <div key={name}>
                      <label className="text-sm font-medium text-gray-700">
                        {label}
                      </label>
                      <input
                        type={type || "text"}
                        name={name}
                        value={formData[name]}
                        onChange={handleInputChange}
                        placeholder={placeholder}
                        required
                        className="w-full mt-1 border rounded-lg p-3 focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                  ))}
                </div>

               
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    rows={5}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Write a brief cover letter..."
                    required
                    className="w-full mt-1 border rounded-lg p-3 resize-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Resume (PDF only)
                  </label>
                  <div className="mt-2 border-2 border-dashed rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf"
                      id="resumeUpload"
                      onChange={handleFileChange}
                      required
                      className="hidden"
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

                
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 pt-4 cursor-pointer">
                  <button
  type="submit"
  disabled={isSubmitting || isSubmitted}
  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 disabled:opacity-50"
>
  {isSubmitting
    ? "Submitting..."
    : isSubmitted
    ? "Application Submitted "
    : "Submit Application"}
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