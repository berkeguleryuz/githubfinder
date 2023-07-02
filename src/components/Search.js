import { useContext, useState } from "react"
import { UsersContext } from "../context/usersContext";
import { AlertContext } from "../context/alertContext";


const Search = () => {
    const [keyword, setKeyword] = useState("");
    const {searchUsers, users, clearUsers } = useContext(UsersContext);
    const {displayAlert} = useContext(AlertContext)
    
    const onChange = (e) => {
        setKeyword (e.target.value);
    }

 const onSubmit = (e) => {
        e.preventDefault();

        if(keyword === '') {
            displayAlert('Anahtar Kelime Giriniz', 'danger');
        } else {
            searchUsers(keyword);
            setKeyword("");
        }
    }


    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={onChange} className="form-control" placeholder="Anahtar Kelime" />
                    <button className="btn btn-outline-secondary" type="submit">Ara</button>
                </div>
            </form>

            {
                users.length > 0 && <button onClick={clearUsers} className="btn btn-outline-danger mt-2 btn-block">Sonuçları Temizle</button>
            }
        </div>
    )
}

export default Search