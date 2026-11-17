function ResumeUpload({
  file,
  setFile
}) {

  const handleFileChange =
    (e) => {

      setFile(
        e.target.files[0]
      );

    };

  return (
    <div>

      <h3>Upload Resume</h3>

      <input
        type="file"
        accept=".pdf"
        onChange={
          handleFileChange
        }
      />

      {
        file &&
        <p>
          Selected:
          {file.name}
        </p>
      }

    </div>
  );
}

export default ResumeUpload;