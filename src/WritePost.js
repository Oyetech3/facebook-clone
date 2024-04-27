import React from 'react'
import pfriends from './images-folder/pfriends.png'
import ppublic from './images-folder/public.png'
import dp from './images-folder/mydp.jpg'
import colors from './images-folder/cols.png'
import photo from './images-folder/photo.png'
import tag from './images-folder/tag.png'
import sticker from './images-folder/stic.png'
import option from './images-folder/option.png'
import gif from './images-folder/gif.png'
import check from './images-folder/check.png'
import './Writepost.css'


export default function WritePost({
  showIt,hideIt,
  textArea,handleTextArea,
  fileRef,handleRef,
  post,handlePost,
}) {
  //const [textArea, setTextArea] = useState(text)
  

    return(
        <div className='writeall' style={{display : showIt}}>
          <div className='writecon'>
            <div className='upper'>
              <h3>Create post</h3>
              <div className='mark' onClick={hideIt}><i class="fa-solid fa-xmark"></i></div>
            </div>
    
            <div className='pro'>
              <div className='info'>
                <img src={dp} alt=''/>
                <div className='name'>
                  <p>Mufti Abdul Qobid Bolaji</p>
                  <select>
                    <option>
                      <img src={ppublic} alt=''/>
                      Public
                    </option>
                    <option>
                      <img src={pfriends} alt=''/>
                      Friends
                    </option>
                  </select>
                </div>
              </div>

              <div className='inp'>
               <textarea value={textArea} onChange={handleTextArea} placeholder="What's on your mind, Mufti Abdul Qobid?"></textarea>
              </div>

              <div className='eff'>
                <img src={colors} alt=''/>
                <i class="fa-regular fa-face-smile"></i>
              </div>

              <div className='addto'>
                <p>Add to your post</p>
                <div className='allpics'>
                  <div className='pic'>
                    <img src={photo} alt='' onClick={handleRef}/>
                    <p>Photo/video</p>
                  </div>
                  <div className='pic'>
                    <img src={tag} alt=''/>
                    <p>Tag people</p>
                  </div>
                  <div className='pic'>
                    <img src={sticker} alt=''/>
                    <p>Feeling/activity</p>
                  </div>
                  <div className='pic'>
                    <img src={check} alt=''/>
                    <p>Check in</p>
                  </div>
                  <div className='pic'>
                    <img src={gif} alt=''/>
                    <p>GIF</p>
                  </div>
                  <div className='pic'>
                    <img src={option} alt=''/>
                    <p>More</p>
                  </div>
                </div>
              </div>

              <button className={`but ${textArea ? 'istrim' : 'isnottrim'}`} onClick={handlePost} disabled={!textArea}>Post</button>
            </div>
          </div>
        </div>
      )
    }

