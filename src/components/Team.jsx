const Team = (props) => {
    return (
      <div className="border-2 border-black rounded-2xl p-4 shadow-md w-full max-w-[220px] mx-auto sm:mx-4 my-4 text-center">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={props.profile}
            alt={props.name}
          />
        </div>
        <h2 className="mt-4 font-semibold text-lg">{props.name}, {props.age}</h2>
        <h3 className="text-blue-600">{props.profession}</h3>
        <h4 className="text-gray-600">{props.city}</h4>
      </div>
    );
  };
  
  export default Team;
  