import './ButtonCategory.css';


export function ButtonCategory({name, isActive}){
    return(
        <>
            <div className={`button-category ${isActive ? 'button-category--active' : ''}`}>{name}</div>
        </>
    );
}