import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import JobDescription from "../components/JobDescription";

function Home() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleAnalyze = () => {
    console.log("Resume:", resumeFile);
    console.log("JD:", jobDescription);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Resume Reviewer</h1>

      <ResumeUpload
        file={resumeFile}
        setFile={setResumeFile}
      />

      <JobDescription
        value={jobDescription}
        onChange={setJobDescription}
      />

      <button
        onClick={handleAnalyze}
        style={{
          marginTop: "20px",
          padding: "10px"
        }}
      >
        Analyze Resume
      </button>
    </div>
  );
}

export default Home;