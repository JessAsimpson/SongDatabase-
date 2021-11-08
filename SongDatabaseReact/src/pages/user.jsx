import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


import './user.css';

export const User = () =>{

    





    return(
        <div>
            <Playlist />
            <NewPlaylist/>
            <div className="container">
                
            </div>
        </div>
    )
}

const NewPlaylist = () => {
    const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div >
      <button className="button" onClick={onOpenModal}>ADD PLAYLIST</button>
      <Modal  open={open} onClose={onCloseModal} center>
        <Input className="playlistModal"/>
      </Modal>
    </div>
  );
};


const Playlist = () => {
    return(
        <div className="playlist">
            <AddSong/>
            <div className="playlistContent">
                <Song/>
                <Song/>
                <Song/>
                <Song/>
             
            </div>
            
        </div>
    )
}

const Input = () => {
    return(
    <>
        <label>Playlist Name</label>
        <input
            className ="input"
            type="text"    

        />
    </>
    )
}

const Song = () => {
    return(
        <div className="song">
            <p className="songInfo">Song Title</p>
            <p className="songInfo">Album</p>
            <p className="songInfo">Artist</p>
        </div>
    )
}

const AddSong = () => {
    const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button className="button" onClick={onOpenModal}>ADD SONG</button>
      <Modal open={open} onClose={onCloseModal} center>
        <Input />
        <Input />
        <Input />
      </Modal>
    </div>
  );
};

//test comment
export default User;
