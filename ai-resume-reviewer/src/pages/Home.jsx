
import ResumeUpload from "../components/ResumeUpload";
import JobDescription from "../components/JobDescription";
import { useState } from "react";

function Home() {

    return (<>
        <h1>AI Resume Reviewer</h1>
        <ResumeUpload />
        <JobDescription />
    </>)
}

export default Home;