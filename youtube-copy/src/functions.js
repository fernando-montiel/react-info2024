export function handleList(attr, event, listSetter) {
    event.preventDefault();
    listSetter( prevList => ({
        ...prevList, [attr]: `${event.target.value}`
    }));
}