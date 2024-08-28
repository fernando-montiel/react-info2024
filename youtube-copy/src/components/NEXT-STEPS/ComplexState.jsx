import './ComplexState.css';
import {useState} from "react";

export function ComplexState(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [privacy, setPrivacy] = useState('');
    const [code, setCode] = useState('');
    const [codeLessThanSix, setCodeLessThanSix] = useState('');
    const [result, setResult] = useState('');

    /*
  Two-Factor Validator

  Cuando el usuario aprieta el botón de "Validar", debe aparecer un mensaje en pantalla que diga si el código es correcto o no.

  Que el boton aparezca deshabilitado si el input ingresado no es de 6 dígitos.

  No permitir escribir mas de 6 dígitos
    */

    const CORRECT_CODE = '658742';

    function handleFormSubmit(event) {
        event.preventDefault();
        if (code.length !== 6) {
            setCodeLessThanSix('El código debe tener exactamente 6 dígitos.');
            return;
        } else {
            setCodeLessThanSix('');
        }
        setResult(code === CORRECT_CODE ? `OK` : `INCORRECT`);
    }

    function handleTitleChange(event) {
        setTitle(event.target.value)
        console.log(title);
    }

    function handleCodeChange(event) {
        event.preventDefault();
        setCode(event.target.value)
    }

    return (
        <>
            <form className={'new-playlist-form'} onSubmit={handleFormSubmit}>
                <label htmlFor={'username'}>Title:</label>
                <input id={'username'} type={'text'} value={title} onChange={handleTitleChange}/>
                <button type={'submit'}>Submit</button>

                <label htmlFor={'code'}>Code:</label>
                <input id={'code'} type={'text'} value={code} onChange={handleCodeChange}/>
                <button disabled={code.length !== 6} type={'submit'}>Submit</button>
                {codeLessThanSix && <p style={{color: 'red'}}>{codeLessThanSix}</p>}
                <p>{result}</p>
            </form>
        </>
    );
}

// export function NewPlaylistForm(){
//     const [colors, setColors] = useState([]);
//     const colorsJoined = colors.join();
//     const backgroundImage = `linear-gradient(${colorsJoined})`;
//
//     return(
//         <>
//             <div className={'complex-state'}>
//                 <button onClick={() => {
//                     if (colors.length < 5) {
//                         const newColors = [...colors];
//                         newColors.push('#f0f000');
//                         setColors(newColors);
//                     }
//                 }}>Agregar
//                 </button>
//                 <button onClick={() => {
//                     if (colors.length > 2) {
//                         const newColors = colors.slice(0, -1);
//                         setColors(newColors);
//                     }
//                 }}>Quitar
//                 </button>
//                 <div style={{height: '150px', width: '250px', backgroundImage}}/>
//                 {colors.map((color, index) => {
//                     return (
//                         <div>
//                             Color {index + 1}
//                             <input
//                                 type="color"
//                                 value={color}
//                                 onChange={(event) => {
//                                     const newColors = [...colors];
//                                     newColors[index] = event.target.value;
//                                     setColors(newColors);
//                                 }}
//                             />
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// }





// const [product, setProduct] = useState({id: 0, image: '', title: '', price: 0});
// const [productList, setProductList] = useState([]);
// const [nextId, setNextId] = useState(1);
//
// function handleProduct (attr, event) {
//     event.preventDefault();
//     setProduct( prevProduct => ({
//         ...prevProduct, [attr]: `${event.target.value}`
//     }));
// }
//
// function handleFormSubmit(event){
//     event.preventDefault();
//     setProduct(
//         {id: nextId, image: event.target.image.value, title: event.target.title.value, price: event.target.price.value}
//     );
//     setProductList(prevItems => [...prevItems, product]);
//     setNextId(prevId => prevId + 1);
//     event.target.reset();
// }


// <div className={'complex-state'} onClick={handleClickOutside}>
//     <div className={'modal-content'}>
//         <form onSubmit={handleFormSubmit}>
//             <h1>New playlist</h1>
//             <label htmlFor={'image'}>Image</label>
//             <input id={'image'} name={'image'} value={product.image}
//                    onChange={(event) => handleProduct('image', event)}></input>
//             <label htmlFor={'title'}>Title</label>
//             <input id={'title'} name={'title'} value={product.title}
//                    onChange={(event) => handleProduct('title', event)}></input>
//             <label htmlFor={'price'}>Price</label>
//             <input id={'price'} name={'price'} value={product.price}
//                    onChange={(event) => handleProduct('price', event)}></input>
//             {/*<div className={''}>*/}
//             <button type="submit">Create</button>
//             <button type="submit" onClick={() => {
//                 setIsComplexState(false)
//             }}>Cancel
//             </button>
//             {/*</div>*/}
//         </form>
//         <ul>
//             {productList.map((item) => (
//                 <li key={item.id}>
//                     Image: {item.image}, Title: {item.title}, Price: {item.price}
//                 </li>
//             ))}
//         </ul>
//     </div>
// </div>