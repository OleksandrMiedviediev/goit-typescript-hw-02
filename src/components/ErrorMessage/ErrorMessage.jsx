import css from "./ErrorMesssage.module.css"

export default function ErrorMessage() {
    
    return (
       <p className={css.error}>Please reload the page or enter a valid query!!!</p>
    );
}