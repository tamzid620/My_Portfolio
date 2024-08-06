import './CurvDiv.css'
import restaurant from "../../../../../src/assets/images/Resturant_Project/Banner.png";
import school from "../../../../../src/assets/images/school_Management/Banner.png";
import consultancy from "../../../../../src/assets/images/Student Consultancy/Banner.png";

const CurvDiv = () => {
  return (
    <div className="curv-container bg-white">
    <div className="curv-item">
      <img src={restaurant} alt="Restaurant" />
    </div>
    <div className="curv-item">
      <img src={school} alt="School" />
    </div>
    <div className="curv-item">
      <img src={consultancy} alt="Consultancy" />
    </div>
  </div>
  );
};

export default CurvDiv;
