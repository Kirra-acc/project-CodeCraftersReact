// import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import ModalExit from 'components/ModalExit/ModalExit';
import React, { useEffect, useState } from 'react';
import { StyledExitButton, StyledHeader, StyledInnerHeader } from './Header.styled';
import { selectUserName } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { IoExitOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { StyledContainer } from 'components/Container/Container.styled';

export const Header = ({ children }) => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const userName = useSelector(selectUserName)

  useEffect(() => {
    isOpenModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  }, [isOpenModal])
  const handleShowModal = (modalImage) => {
    setIsOpenModal(true);
  }

  const handleCloseModal = () => {
    setIsOpenModal(false);
  }

  return (<>
    <StyledHeader>
      <StyledContainer>
        <StyledInnerHeader>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <div >
            {userName && <span>{userName}</span>}
            <StyledExitButton onClick={handleShowModal}>
              <IoExitOutline size="23" />
              <button>Exit</button>
            </StyledExitButton>
          </div>
        </StyledInnerHeader>
      </StyledContainer>
    </StyledHeader>

    {isOpenModal ? <ModalExit handleCloseModal={handleCloseModal} /> : null
    }
  </>
  )
}

export default Header;
