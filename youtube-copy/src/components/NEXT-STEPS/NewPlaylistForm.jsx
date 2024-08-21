import {useState} from "react";

export function NewPlaylistForm(props) {

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

    function handleCodeChange(event){
        event.preventDefault();
        setCode(event.target.value)
    }

    return(
        <>
            <form onSubmit={handleFormSubmit}
                  style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginLeft: '300px',
                      width: '300px',
                      height: '300px',
                      backgroundColor: 'white',
                      padding: '5rem'
                  }}
            >
                <label htmlFor={'username'}>Title:</label>
                <input id={'username'} type={'text'} value={title} onChange={handleTitleChange}/>
                <button type={'submit'}>Submit</button>

                <label htmlFor={'code'}>Code:</label>
                <input id={'code'} type={'text'} value={code} onChange={handleCodeChange}/>
                <button disabled={code.length !== 6} type={'submit'}>Submit</button>
                {codeLessThanSix && <p style={{ color: 'red' }}>{codeLessThanSix}</p>}
                <p>{result}</p>
            </form>
        </>
    );
}