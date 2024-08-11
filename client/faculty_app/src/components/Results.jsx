import "../components/Home.css";

function Results({ searchinitiated }) {
  const facultyDetails = {
    name: "John Doe",
    department: "Information Technology",
    age: 40,
    email: "johndoe@example.com",
    dateOfJoining: "01-Jan-2010",
    designation: "Professor",
    experience: 15,
    address: "123 Main Street, City, Country",
    research: "Artificial Intelligence, Machine Learning",
    workPermit: "Yes",
  };

  return (
    <div className={`textbox ${searchinitiated ? "display" : ""}`}>
      <div className="photo">
        <img src="https://via.placeholder.com/150" alt="Profile" />
        <span className="faculty-name">{facultyDetails.name}</span>
      </div>
      <div className="details">
        <div className="column">
          <p>
            <strong>Department:</strong> {facultyDetails.department}
          </p>
          <p>
            <strong>Age:</strong> {facultyDetails.age}
          </p>
          <p>
            <strong>Email:</strong> {facultyDetails.email}
          </p>
          <p>
            <strong>Date of Joining:</strong> {facultyDetails.dateOfJoining}
          </p>
          <p>
            <strong>Passout:</strong> 1996
          </p>
          <p>
            <strong>12th %:</strong> 80
          </p>
          <p>
            <strong>10th %:</strong> 80
          </p>
        </div>
        <div className="column">
          <p>
            <strong>Designation:</strong> {facultyDetails.designation}
          </p>
          <p>
            <strong>Experience:</strong> {facultyDetails.experience} years
          </p>
          <p>
            <strong>Address:</strong> {facultyDetails.address}
          </p>
          <p>
            <strong>Research:</strong> {facultyDetails.research}
          </p>
          <p>
            <strong>Work Permit:</strong> {facultyDetails.workPermit}
          </p>
          <p>
            <strong>Specialization:</strong> AIML
          </p>
          <p>
            <strong>Highest Qualification:</strong> PhD
          </p>
        </div>
      </div>
    </div>
  );
}

export default Results;
