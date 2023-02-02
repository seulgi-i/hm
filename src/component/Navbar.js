import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const auth = useSelector(state => state.auth.authenticate)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            {auth == true ? <button onClick={logOut}>로그아웃</button> :
              <button onClick={navigateToLogin}>로그인</button>
            }
          </div>
        </div>
        <div className='hidden-menu'>
          <FontAwesomeIcon icon={faBars} className="d-lg-none" onClick={handleShow} />
          <Offcanvas show={show} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div className='menuBar'>
                  {menuList.map((menu, index) =>
                    (<li key={index}>{menu}</li>)
                  )}
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
          </Offcanvas>
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
          {menuList.map((menu, index) => (<button key={index}>{menu}</button>)
          )}
        </ul>

      </div>
      <div className='search-area'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type='text' onKey Press={(event) => search(event)}></input>
      </div>
    </div >
  );
};

export default Navbar;
