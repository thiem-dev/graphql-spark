const CustomOptions = ({custom_options}) => {
    const parsedData = JSON.parse(custom_options);
  
    return (
      <div>
        {Object.keys(parsedData).map((key) => (
          <div key={key}>
            <h3>{key}</h3>
            <ul>
              {parsedData[key].map((item) => (
                <li key={item.value}>{item.value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
};

export default CustomOptions