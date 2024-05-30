import { RotatingLines } from "react-loader-spinner"

import css from './Losder.module.css'

export default function Loader() {
    return (
      <span className={css.loader}>
        <RotatingLines
            visible={true}
            height="80"
            width="80"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{
              margin: "0 auto"
            }}
            wrapperClass="rotating-lines-wrapper"
            />
      </span>
          
    )
}

