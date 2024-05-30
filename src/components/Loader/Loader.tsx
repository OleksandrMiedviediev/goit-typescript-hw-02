import { RotatingLines } from "react-loader-spinner"

import css from './Loader.module.css'

const Loader:React.FC = ()=> {
    return (
      <span className={css.loader}>
        <RotatingLines
            visible ={true}
            width="80"
            ariaLabel="rotating-lines-loading"
            />
      </span>
          
    )
}

export default Loader;