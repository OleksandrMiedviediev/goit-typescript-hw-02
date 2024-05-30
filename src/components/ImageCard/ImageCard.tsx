import css from "./ImageCard.module.css"


interface ImageCardProps{
    urls: {
        small: string,
        regular: string;
    },
    alt_description: string;
    onOpen: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({urls, alt_description, onOpen}) => {
    return (
        <div className={css.image}>
            <img onClick={() => onOpen(urls.regular)} className={css.image} src={urls.small} alt={alt_description} />  
            <p className={css.text}>{alt_description}</p>
        </div>
    )
}

export default ImageCard;