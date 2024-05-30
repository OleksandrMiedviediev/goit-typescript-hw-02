import css from "./ErrorMesssage.module.css"

const ErrorMessage: React.FC = () => {
    
    return (
       <p className={css.error}>Please reload the page or enter a valid query!!!</p>
    );
}

export default ErrorMessage;