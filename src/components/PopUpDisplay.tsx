import "./PopUpDisplay.scss"
import DoneIcon from '@mui/icons-material/Done';
import { useEffect } from "react";

interface props {
    visibility: boolean;
    condition: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUpDisplay = ({ visibility, condition }: props) => {

    useEffect(() => {
    const timer = setTimeout(() => {
      condition(false);   
    }, 2000);

    return () => clearTimeout(timer); 
  }, [visibility]);
    return (
        <>

            {visibility ? (
                <>
                <div className="success-container">
                <div className="success-screen">
                </div>
            
                    <div className="inner-circle">
                        <DoneIcon className="icon"></DoneIcon>
                    </div>  
                    </div>
                    </>  
            ) 
                : ""}

        </>
    )
}

export default PopUpDisplay;