import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import login from '../page/Login';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  }

  const logOut = () => {
    navigate("/login");
    setAuthenticate(false);
  }
  const home = () => {
    navigate("/");
  }
  const search = (event) => {
    if (event.key === "Enter") {
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;

      //url을 바꿔준다.
      navigate(`/?q=${keyword}`)

    }
  }
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', 'H&M Home', 'Sale', '지속가능성']
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>
            {authenticate == true ? <button onClick={logOut}>로그아웃</button> :
              <button onClick={navigateToLogin}>로그인</button>
            }

          </div>
        </div>

      </div>
      <div className='nav-section'>
        <img width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png"
          onClick={home}
        />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu, index) => (<li key={index}>{menu}</li>)
          )}
        </ul>
      </div>
      <div className='search-area'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type='text' onKeyPress={(event) => search(event)}></input>
      </div>
    </div >
  );
};

export default Navbar;
