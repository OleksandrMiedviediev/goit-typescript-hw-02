import css from "./LoadMoreBtn.module.css"

interface LoadMoreBtnProps{
    onAdd: () => void,
    onRef?: React.Ref<HTMLButtonElement>;
}

const LoadMoreBtn:React.FC<LoadMoreBtnProps> = ({onAdd, onRef}) => {
    return (
          <button ref={onRef} className={css.button} onClick={onAdd}>Load More</button>
    )
}

export default LoadMoreBtn;