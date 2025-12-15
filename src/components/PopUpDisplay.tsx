import "./PopUpDisplay.scss"
interface props {
    message: string;
    visibility: boolean;
}

const PopUpDisplay = ({ message, visibility }: props) => {
    return (
        <>

            {visibility ? (<div className="success-screen">
                {message}
            </div>) : ""}

        </>
    )
}

export default PopUpDisplay;