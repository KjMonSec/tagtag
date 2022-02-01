export default function deleteCookie(name){
    document.cookie = `${name}=;expires=${(new Date('1930')).toUTCString()}`;
}