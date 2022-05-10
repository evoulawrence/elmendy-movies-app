import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import MoviePlayList from "../MoviePlaylist";
import { Wrapper, Content, LogoImg, MoviePlayListButton } from "./Header.styles";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '500px',
  },
};

Modal.setAppElement('#root');

const Header: React.FC = () => {
  let subtitle: string;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg >EL.MENDY MOVIES</LogoImg>
        </Link>
        <MoviePlayListButton onClick={openModal}>My Playlist</MoviePlayListButton>
      </Content>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} style={{ float: 'right', fontWeight: 'bold', borderRadius: '6px', padding: '2px', cursor: 'pointer' }}>close</button>
        <h3 style={{ marginBottom: '20px' }}>My Movie Playlist</h3>
        <MoviePlayList />
      </Modal>
    </Wrapper>
  );
};

export default Header;
