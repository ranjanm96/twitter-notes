function JobDescription({
  value,
  onChange
}) {

  return (
    <div>

      <h3>
        Job Description
      </h3>

      <textarea
        rows={10}
        cols={80}
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
      />

    </div>
  );
}

export default JobDescription;