
import spinner from "../Assets/spinner.gif"

const Spinner = () => {
    return (
      <div className="spinner">
        {spinner ? <img src={spinner} alt="spinner" /> :<p>Loading Please Wait....</p> }
        
      </div>
    );
  };
  
  export default Spinner;