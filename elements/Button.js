import style from './Button.module.css'

export default ({onClick,title,className,children,type})=>{
    return <button type={type} className={style.customButton+" "+className} onClick={onClick} >{children} </button>
}