import './ButtonCategoryContainer.css';
import {ButtonCategory} from "./button-category/ButtonCategory.jsx";
import { allList } from "../../lists.js";


export function ButtonCategoryContainer(){
    return (
        <>
            <div className={"button-category-container"}>
                {allList.buttonCategoryContainerList.map((buttonCategory) => (
                    <ButtonCategory
                        key={buttonCategory.id}
                        name={buttonCategory.name}
                        isActive={name === 'Home'}
                    />
                ))}
            </div>
        </>
    );
}