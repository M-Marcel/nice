import Select, { SingleValue} from 'react-select'


type SelectOptionProps = {
    name:string
    value:string
    onChange:(selectedOption: SingleValue<{ value: string; label: string }>) => void;
    options: { value: string; label: string }[];
}

const SelectOption = ({options, name, value, onChange}:SelectOptionProps) => {

      const customStyles = {
        control: (selectProvided: any, state: any) => ({
          ...selectProvided,
          paddingTop:"10px",
          paddingBottom:"10px",
          backgroundColor: state.isFocused ? 'white' : 'white', 
          borderColor: state.isFocused ? '#D9DBE9' : '#ccc', 
          boxShadow: state.isFocused ? 'none' : 'none', 
          "&:hover": {
            borderColor: '#D9DBE9', 
          },
        }),
        
      
        option: (optionProvided: any, state: any) => ({
          ...optionProvided,
          backgroundImage: state.isFocused
            ? 'linear-gradient(75deg, #1E7FF5, #025ECF)' 
            : state.isSelected
            ? "white" 
            : "white", 
          color: state.isFocused || state.isSelected ? "white" : "#1A1C1F", // Text color
          padding: '10px', 
          "&:hover": {
            backgroundColor: '#f0f8ff', 
            color: "black", 
          },
        }),
      };

    return(
        <Select 
        name={name} 
        value={options.find((option) => option.value === value) || null}
        onChange={onChange}
        className="text-sm " 
        options={options}  
        styles={customStyles} />
    )
}

export default SelectOption;