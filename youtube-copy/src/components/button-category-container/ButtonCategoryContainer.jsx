import './ButtonCategoryContainer.css';
import {ButtonCategory} from "./button-category/ButtonCategory.jsx";


export function ButtonCategoryContainer(){
    return (
        <>
            <div className={"button-category-container"}>
                <ButtonCategory name={'Home'} isActive={true}/>
                <ButtonCategory name={'Sleep'} />
                <ButtonCategory name={'Romance'} />
                <ButtonCategory name={'Workout'} />
                <ButtonCategory name={'Party'} />
                <ButtonCategory name={'Feel good'} />
                <ButtonCategory name={'Sad'} />
                <ButtonCategory name={'Energize'} />
                <ButtonCategory name={'Commute'} />
                <ButtonCategory name={'Relax'} />
                <ButtonCategory name={'Focus'} />
            </div>
        </>
    );
}