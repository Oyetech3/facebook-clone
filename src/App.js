import React, { useRef, useState } from 'react'
import More from './More'
import './App.css'
import fbicon from './images-folder/fb.png'
import search from './images-folder/search.webp'
import home from './images-folder/home.png'
import video from './images-folder/video.png'
import uppermark from './images-folder/uppermark.png'
import uppergroup from './images-folder/uppergroup.png'
import game from './images-folder/gaming.png'
import menubar from './images-folder/menubar.png'
import messenger from './images-folder/messenger.png'
import notification from './images-folder/notification.png'
import dp from './images-folder/mydp.jpg'
import friends from './images-folder/friends.png'
import feeds from './images-folder/feeds.png'
import groups from './images-folder/groups.png'
import  market from './images-folder/marketplace.png'
import memories from './images-folder/memories.webp'
import saved from './images-folder/saved.png'
import pages from './images-folder/pages.png'
import events from './images-folder/events.png'
import drop from './images-folder/drop.png'
import option from './images-folder/option.png'
import birthday from './images-folder/birthday.png'
import latif from './images-folder/alatif.jpg'
import doc from './images-folder/doc.jpg'
import doja from './images-folder/doja.jpg'
import mush from './images-folder/mo.jpg'
import ojo from './images-folder/ojo.jpg'
import nuru from './images-folder/nuru.jpg'
import hamid from './images-folder/hamid.jpg'
import muiz from './images-folder/muiz.jpg'
import kamil from './images-folder/kdeen.jpg'
import ameer from './images-folder/ameer.jpg'
import miami from './images-folder/miami.jpg'
import miamilogo from './images-folder/miamilogo.jpg'
import naz from './images-folder/naz.jpg'
import nazlogo from './images-folder/nazlogo.jpg'
import ado from './images-folder/ado.jpg'
import adologo from './images-folder/adologo.jpg'
import barca from './images-folder/barca.jpg'
import barcalogo from './images-folder/barcalogo.jpg'
import ust from './images-folder/ust.jpg'
import ustlogo from  './images-folder/ustlogo.jpg'
import bec from './images-folder/bec.jpg'
import beclogo from './images-folder/beclogo.jpg'
import kz from './images-folder/kz.jpg'
import kzlogo from './images-folder/kzlogo.jpg'
import live from './images-folder/live.png'
import photo from './images-folder/photo.png'
import feel from './images-folder/feeling.png'
import ppublic from './images-folder/public.png'
import fabrizo from './images-folder/fabrizopost.jpg'
import fabrizologo from './images-folder/fabrizologo.jpg'
import drpost from './images-folder/drpost.jpg'
import drlogo from './images-folder/drlogo.jpg'
import laurespost from './images-folder/laurespost.jpg'
import laureslogo from './images-folder/laureslogo.jpg'
import skypost from './images-folder/skypost.jpg'
import skylogo from './images-folder/skylogo.jpg'
import tvnpost from './images-folder/tvnimg.png'
import tvnlogo from './images-folder/tvnlogo.jpg'
import post1 from  './images-folder/post1.jpg'
import verified from './images-folder/verified.png'
import like from './images-folder/like.svg'
import love from './images-folder/love.svg'
import ads from './images-folder/ads.png'
import short from './images-folder/short.mp4'
import WritePost from './WritePost'
import bar from './images-folder/bar.png'


  

function App() {
  const [focus , setFocus] = useState(false)
  const [likeCol, setLikeCol] = useState({
    one : false,
    two : false,
    three : false,
    four : false,
    five : false,
    six : false,
    seven : false,
    eight : false
  })
  const [numOfLike, setNumOfLike] = useState({
    one : 340,
    two : 200,
    three : 650,
    four : 234,
    five : 311,
    six : 447,
    seven : 389,
    eight : 21
  })
  const [move , setMove] = useState(0)
  const [show, setShow] = useState('hidden')
  const [hide , setHide] = useState('visible')
  const [showIt, setShowIt] = useState('none')
  const [text, setText] = useState('')
  const [secText, setSecText] = useState(text)
  const [selectFile, setSelectFile] = useState(null)
  const [getImage, setGetImage] = useState(null)
  const [post, setPost] = useState(false)
  const [thirdText ,setThirdText] = useState(secText)
  const [flow, setFlow] = useState(false)
  const fileRef = useRef(null)
  const [more, setMore] = useState('block')
  const [main, setMain] = useState('block')
  const [know, setknow ] = useState(false)
  const [get, setGet] = useState(true)
  const [myActive, setMyActive] = useState(false)


  const handleMore = () => {
    setknow(prev => !prev)
    setMore('block')
    setGet(pre => !pre)
    setMyActive(pre => !pre)
  }
  const handleMain = () => {
    setMain('block')
    setMore('none')
    setGet(true)
    setknow(false)
  }
  const handlePost = (e) => {
    setPost(true)
    setSecText(text)
    setShowIt('none')
    setThirdText('')
    setText("")
    setFlow(false)
  }
  const handleRef = () => {
    fileRef.current.click()
  }
  const handleFile = (e) => {
    const file = e.target.files[0]
    setSelectFile(file)
    if(selectFile && !file) {
      return
    }

    if(file && file.type.startsWith('image/')) {
      const read = new FileReader()
      read.onload = () => {
        setGetImage(read.result)
      }
      read.readAsDataURL(file)
    }
    else {
      setGetImage(null)
    }

  }

  const handleFocus = () => {
    setFocus(true)
  }
  const handleBlur = () => {
    setFocus(false)
  }

  const handleLikeOne = () => {
    setLikeCol((prev) => {
      return {
        ...prev, one : !prev.one
      }
    }
      ,
      setNumOfLike(pre => {
        if(pre.one === 340) {
          return {
            ...pre,
            one : pre.one + 1
          }
        }
        else if(pre !== 340) {
          return {
            ...pre,
            one : pre.one - 1
          }
        }
      })
    )
  }

  const handleLikeTwo = () => {
    setLikeCol((prev) => {
      return {
        ...prev, two : !prev.two
      }
    }
      ,
      setNumOfLike(pre => {
        if(pre.two === 200) {
          return {
            ...pre,
            two : pre.two + 1
          }
        }
        else if(pre !== 200) {
          return {
            ...pre,
            two : pre.two - 1
          }
        }
      })
    )
  }

  const handleLikeThree = () => {
    setLikeCol((prev) => {
      return {
        ...prev , three : !prev.three
      }
    }
      ,
      setNumOfLike(pre => {
        if(pre.three === 650) {
          return {
            ...pre,
            three : pre.three + 1
          }
        }
        else if(pre !== 650) {
          return {
            ...pre,
            three : pre.three - 1
          }
        }
      })
    )
  }
  
  const handleLikeFour = () => {
    setLikeCol((prev) =>  {
      return {
        ...prev , four : !prev.four
      }
    }
      ,
      setNumOfLike(pre => {
        if(pre.four === 234) {
          return {
            ...pre,
            four : pre.four + 1
          }
        }
        else if(pre !== 234) {
          return {
            ...pre,
            four : pre.four - 1
          }
        }
      })
    )
  }

  const handleLikeFive = () => {
    setLikeCol((prev) => {
      return {
        ...prev, five : !prev.five
      }
    }
      ,
      setNumOfLike(pre => {
        if(pre.five === 311) {
          return {
            ...pre,
            five : pre.five + 1
          }
        }
        else if(pre !== 311) {
          return {
            ...pre,
            five : pre.five - 1
          }
        }
      })
    )
  }

  const handleLikeSix = () => {
    setLikeCol((prev) => {
      return {
        ...prev, six : !prev.six
      }
    }
      ,
      setNumOfLike(pre => {
        if(pre.six === 447) {
          return {
            ...pre,
            six : pre.six + 1
          }
        }
        else if(pre !== 447) {
          return {
            ...pre,
            six : pre.six - 1
          }
        }
      })
    )
  }

  const handleLikeSeven = () => {
    setLikeCol((prev) => {
      return {
        ...prev , seven : !prev.seven
      }
    }
      ,
      setNumOfLike(pre => {
        if(pre.seven === 389) {
          return {
            ...pre,
            seven : pre.seven + 1
          }
        }
        else if(pre !== 389) {
          return {
            ...pre,
            seven : pre.seven - 1
          }
        }
      })
    )
  }

  const handleLikeEight = () => {
    setLikeCol((prev) => {
      return {
        ...prev , eight : !prev.eight
      }
    }
      ,
      setNumOfLike(pre => {
        if(pre.eight === 21) {
          return {
            ...pre,
            eight : pre.eight + 1
          }
        }
        else if(pre !== 21) {
          return {
            ...pre,
            eight : pre.eight - 1
          }
        }
      })
    )
  }

  const nextButton = () => {
    setMove(prev => 
      prev - 20,
      setShow('visible'),
    )
    if(move === -80) {
      setHide('hidden')
    }
    
  }
  console.log(move)
  const prevButton = () => {
    setMove(prev => 
      prev + 20,
      setHide('visible')
      )
      if(move === -20) {
        setShow('hidden')
      }
  }

 const handleHideIt = () => {
  setShowIt('none')
  setFlow(false)
 }
const handleShowIt = () => {
  setShowIt('block')
  setFlow(true)
}
const handleText = (e) => {
  setText(e.target.value)
  setThirdText(text)
}
  
  
  return (
    <div className={`allcon ${flow ? 'notflow' : ''}`}>
      <div className='uppersection'>

        <div className='firstupper'>
          <img src={fbicon} alt='fbicon'/>
          <div className={`search ${focus ? 'isfocus' : ''}`}>
            <img id='srh' src={search} alt='search' className= "srcicon"/>
            <input id='inp' type='text' placeholder='Search Facebook' onFocus={handleFocus} onBlur={handleBlur}/>
          </div>
        </div>

        <div className='secondupper'>
          <div className='icon-one' onClick={handleMain}>
          <img src={home} alt='home'/>
          <div id='d'><p>Home</p></div>
          </div>
          <div className='icon-two'>
            <img src={video} alt='video'/>
            <div id='d'><p>Video</p> </div>
          </div>
          <div className='icon-three'>
            <img src={uppermark} alt='market'/>
            <div id='d' className='dd'><p>Marketplace</p></div>
          </div>
          <div className='icon-four'>
            <img src={uppergroup} alt='group'/>
            <div id='d'><p>Groups</p></div>
          </div>
          <div className='icon-five'>
            <img src={game} alt='game'/>
            <div id='d'><p>Gaming</p></div>
          </div>
          <div className='icon-six' onClick={handleMore}>
            <img src={bar} alt='bar'/>
            <div className={`isit ${myActive ? 'isActive' : 'notActive'}`}></div>
            <div id='d'><p>more</p></div>
          </div>

        </div>

        <div className='thirdupper'>
          <div className='rightone'>
            <img src= {menubar} alt='menubar'/>
          </div>
          <div className='righttwo'>
            <img src= {messenger} alt='messenger'/>
          </div>
          <div className='rightthree'>
            <img src= {notification} alt='notifiocation'/>
          </div>
          <div className='rightfour'>
            <img src= {dp} alt='dp'/>
          </div>
        </div>

      </div>

      
      <div className='more' style={ know ? {display : more} : {display : 'none'}}><More/></div>

      <div className='main' style={get ? {display : main} : {display : 'none'}}>
        <div  style={{display : 'block'}}>
        <WritePost showIt={showIt} hideIt={handleHideIt} textArea={text} handleTextArea={handleText} fileRef={fileRef} handleRef={handleRef} handlePost={handlePost}/>
        <input type='file' accept='/image*, /video*' ref={fileRef} onChange={handleFile} style={{display : 'none'}}/> 
        </div>
        <div className='mainleft'>

          <div className='im'>
            <img src={dp} alt='mydp'/>
            <p>Mufti Abdul Qobid Oyekola</p>
          </div>
          <div className='im'>
            <img src={friends} alt='friends'/>
            <p>Friends</p>
          </div>
          <div className='im'>
            <img src={feeds} alt='feeds'/>
            <p>Feeds</p>
          </div>
          <div className='im'>
            <img src={groups} alt='groups'/>
            <p>Groups</p>
          </div>
          <div className='im'>
            <img src={market} alt='market'/>
            <p>Marketplace</p>
          </div>
          <div className='im'>
            <img src={video} alt='video'/>
            <p>Video</p>
          </div>
          <div className='im'>
            <img src={memories} alt='memories'/>
            <p>Memories</p>
          </div>
          <div className='im'>
            <img src={saved} alt='saved'/>
            <p>Saved</p>
          </div>
          <div className='im'>
            <img src={pages} alt='pages'/>
            <p>Pages</p>
          </div>
          <div className='im'>
            <img src={events} alt='events'/>
            <p>Events</p>
          </div>
          <div className='im'>
            <img src={ads} alt='ads'/>
            <p>Ads Manager</p>
          </div>
          <div className='im'>
            <img id='las' src={drop} alt='drop'/>
            <p>See more</p>
          </div>
          <p>
          Privacy  · Terms  · Advertising  · Ad Choices   · Cookies <br/>  More  · Meta © 2024
          </p>

        </div>
      

      <div className='midmain'>
        <div className='mainmid' style={{transform : `translateX(${move}%)`}}>
          <div className='stories'>

            <div className='story'>
              <img className='stt' src={dp} alt='dp'/>
              <div className='plus'><p>+</p></div>
              <p className='txt'>Create story</p>
            </div>
            <div className='storyy'>
              <img className='bg' src={miami} alt='dp'/>
              <img className='pro' src={miamilogo} alt='logo'/>
              <p className='txt'>Inter Miami CF</p>
            </div>
            <div className='storyy'>
              <img className='bg' src={naz} alt='dp'/>
              <img className='pro' src={nazlogo} alt='logo'/>
              <p className='txt'>Naz Dej</p>
            </div>
            <div className='storyy'>
              <img className='bg' src={ado} alt='dp'/>
              <img className='pro' src={adologo} alt='logo'/>
              <p className='txt'>Alassane Outtara</p>
            </div>

          </div>

          <div className='storiestwo'>
            <div className='storyy'>
              <img className='bg' src={barca} alt='dp'/>
              <img className='pro' src={barcalogo} alt='logo'/>
              <p className='txt'>FC Barcelona</p>
           </div>
            <div className='storyy'>
              <img className='bg' src={ust} alt='dp'/>
              <img className='pro' src={ustlogo} alt='logo'/>
              <p className='txt'>Usfat Akolawole</p>
           </div>
            <div className='storyy'>
              <img className='bg' src={bec} alt='dp'/>
              <img className='pro' src={beclogo} alt='logo'/>
              <p className='txt'>David Beckam</p>
           </div>
            <div className='storyy'>
              <img className='bg' src={kz} alt='dp'/>
              <img className='pro' src={kzlogo} alt='logo'/>
              <p className='txt'>K zealotics</p>
           </div>
          </div>

        </div>

        <div className='buttons'>
            <button className='prev' onClick={prevButton} style={{visibility : show}}>&lt;</button>
            <button className='next' onClick={nextButton} style={{visibility : hide}}>&gt;</button>
          </div>

         

        <div className='mind'>
          <div className='write'>
            <img src={dp} alt=''/>
            <input onClick={handleShowIt} value={thirdText} onChange={handleText} placeholder="What's on your mind, Mufti Abdul Qobid?"/>
          </div>


          <div className='activity'>
            <div className='act'>
              <img src={live} alt=''/>
              <p>Live video</p>
            </div>
            <div className='act'>
              <img src={photo} alt=''/>
              <p>Photo/video</p>
            </div>
            <div className='act'>
              <img src={feel} alt=''/>
              <p>Feeling/activity</p>
            </div>
          </div>

        </div>

        {/*Added Files */}
        { post && {selectFile} &&  
        <div className='posts'>
             <div className='posthead'>
              <img src= {dp} alt=''/>
              <div className='allsub'>
               <div className='headsub1'>
                <p>Mufti Abdul Qobid Oyekola</p>
               </div>
               <div className='headsub2'>
                <p>Just now .</p>
                <img src={ppublic} alt=''/>
               </div> 
              </div>
            </div>
            <div className='postbody'>
              <p>{secText}</p>
              <img src={getImage} alt='' />
            </div>
            <div className='postfoot'>
              <div className='foot1'>
                <div className='likes'>
                  <img src={like} alt=''/>
                  <img src={love} alt=''/>
                  <p>{numOfLike.eight}</p>
                </div>
                <div className='coms'>
                  <p>1 comments</p>
                  <p>3 shares</p>
                </div>
              </div>
              <div className={`foot2 ${ likeCol.eight ?'colLike' : 'notLike'}`}>
                <div className='res'  onClick={handleLikeEight} >
                  <i id='cccc' class="fa-regular fa-thumbs-up"></i>
                  <p id='ccc'>Like</p>
                </div>
                <div className='res'>
                <i class="fa-regular fa-comment"></i>
                <p>Comment</p>
                </div>
                <div className='res'>
                <i class="fa-solid fa-share"></i>
                <p>Share</p>
                </div>
              </div>
            </div>
            
          </div>
}
        {/*Added Files */}

        <div className='posts'>
             <div className='posthead'>
              <img src= {barcalogo} alt=''/>
              <div className='allsub'>
               <div className='headsub1'>
                <p>FC Barcelona</p>
                <img src= {verified} alt=''/>
               </div>
               <div className='headsub2'>
                <p>28m .</p>
                <img src={ppublic} alt=''/>
               </div> 
              </div>
            </div>
            <div className='postbody'>
              <p>Neymar with the Tiger 💙💗</p>
              <img src={post1} alt=''/>
            </div>
            <div className='postfoot'>
              <div className='foot1'>
                <div className='likes'>
                  <img src={like} alt=''/>
                  <img src={love} alt=''/>
                  <p>{numOfLike.one}</p>
                </div>
                <div className='coms'>
                  <p>40 comments</p>
                  <p>35 shares</p>
                </div>
              </div>
              <div className={`foot2 ${ likeCol.one ?'colLike' : 'notLike'}`}>
                <div className='res'  onClick={handleLikeOne} >
                  <i id='cccc' class="fa-regular fa-thumbs-up"></i>
                  <p id='ccc'>Like</p>
                </div>
                <div className='res'>
                <i class="fa-regular fa-comment"></i>
                <p>Comment</p>
                </div>
                <div className='res'>
                <i class="fa-solid fa-share"></i>
                <p>Share</p>
                </div>
              </div>
            </div>
            
          </div>

          <div className='posts'>
             <div className='posthead'>
              <img src= {fabrizologo} alt=''/>
              <div className='allsub'>
               <div className='headsub1'>
                <p>Fabrizo Romano</p>
                <img src= {verified} alt=''/>
               </div>
               <div className='headsub2'>
                <p>42m .</p>
                <img src={ppublic} alt=''/>
               </div> 
              </div>
            </div>
            <div className='postbody'>
              <p>🚨EXCLUSIVE🚨<br/>
👹Manchester United links to Serie A full-back shut down<br/>
🔵Chelsea have work to do to sign Nico Williams😬
🗣  Moretto gives the lowdown🤝<br/>
💥 Click here for a FREE subscription to Fabrizio Romano's Daily Briefing</p>
              <img src={fabrizo} alt=''/>
            </div>
            <div className='postfoot'>
              <div className='foot1'>
                <div className='likes'>
                  <img src={like} alt=''/>
                  <img src={love} alt=''/>
                  <p>{numOfLike.two}</p>
                </div>
                <div className='coms'>
                  <p>28 comments</p>
                  <p>15 shares</p>
                </div>
              </div>
              <div className={`foot2 ${ likeCol.two ?'colLike' : 'notLike'}`}>
                <div className='res'  onClick={handleLikeTwo} >
                  <i id='cccc' class="fa-regular fa-thumbs-up"></i>
                  <p id='ccc'>Like</p>
                </div>
                <div className='res'>
                <i class="fa-regular fa-comment"></i>
                <p>Comment</p>
                </div>
                <div className='res'>
                <i class="fa-solid fa-share"></i>
                <p>Share</p>
                </div>
              </div>
            </div>
            
          </div>

           <div className='posts'>
             <div className='posthead'>
              <img src= {drlogo} alt=''/>
              <div className='allsub'>
               <div className='headsub1'>
                <p>Dr Zakir Naik</p>
                <img src= {verified} alt=''/>
               </div>
               <div className='headsub2'>
                <p>1hr .</p>
                <img src={ppublic} alt=''/>
               </div> 
              </div>
            </div>
            <div className='postbody'>
              <p>Watch our Islamic Programmes and lectures</p>
              <img src={drpost} alt=''/>
            </div>
            <div className='postfoot'>
              <div className='foot1'>
                <div className='likes'>
                  <img src={like} alt=''/>
                  <img src={love} alt=''/>
                  <p>{numOfLike.three}</p>
                </div>
                <div className='coms'>
                  <p>40 comments</p>
                  <p>35 shares</p>
                </div>
              </div>
              <div className={`foot2 ${ likeCol.three ?'colLike' : 'notLike'}`}>
                <div className='res'  onClick={handleLikeThree} >
                  <i id='cccc' class="fa-regular fa-thumbs-up"></i>
                  <p id='ccc'>Like</p>
                </div>
                <div className='res'>
                <i class="fa-regular fa-comment"></i>
                <p>Comment</p>
                </div>
                <div className='res'>
                <i class="fa-solid fa-share"></i>
                <p>Share</p>
                </div>
              </div>
            </div>
            
          </div>

           <div className='posts'>
             <div className='posthead'>
              <img src= {tvnlogo} alt=''/>
              <div className='allsub'>
               <div className='headsub1'>
                <p>tvN drama</p>
                <img src= {verified} alt=''/>
               </div>
               <div className='headsub2'>
                <p>2d .</p>
                <img src={ppublic} alt=''/>
               </div> 
              </div>
            </div>
            <div className='postbody'>
              <p>Queen of tears
                <br/>
                Sat-Sun 9pm
              </p>
              <img src={tvnpost} alt=''/>
            </div>
            <div className='postfoot'>
              <div className='foot1'>
                <div className='likes'>
                  <img src={like} alt=''/>
                  <img src={love} alt=''/>
                  <p>{numOfLike.four}</p>
                </div>
                <div className='coms'>
                  <p>40 comments</p>
                  <p>35 shares</p>
                </div>
              </div>
              <div className={`foot2 ${ likeCol.four ?'colLike' : 'notLike'}`}>
                <div className='res'  onClick={handleLikeFour} >
                  <i id='cccc' class="fa-regular fa-thumbs-up"></i>
                  <p id='ccc'>Like</p>
                </div>
                <div className='res'>
                <i class="fa-regular fa-comment"></i>
                <p>Comment</p>
                </div>
                <div className='res'>
                <i class="fa-solid fa-share"></i>
                <p>Share</p>
                </div>
              </div>
            </div>
            
          </div>

          <div className='posts'>
             <div className='posthead'>
              <img src= {kzlogo} alt=''/>
              <div className='allsub'>
               <div className='headsub1'>
                <p>kdrama Shorts</p>
               </div>
               <div className='headsub2'>
                <p>3d .</p>
                <img src={ppublic} alt=''/>
               </div> 
              </div>
            </div>
            <div className='postbody'>
              <p>This scene of the great king Seojeong in the trees with deep roots</p>
              <video controls >
                  <source src={short} type='video/mp4' />
                </video>
            </div>
            <div className='postfoot'>
              <div className='foot1'>
                <div className='likes'>
                  <img src={like} alt=''/>
                  <img src={love} alt=''/>
                  <p>{numOfLike.seven}</p>
                </div>
                <div className='coms'>
                  <p>40 comments</p>
                  <p>35 shares</p>
                </div>
              </div>
              <div className={`foot2 ${ likeCol.seven ?'colLike' : 'notLike'}`}>
                <div className='res'  onClick={handleLikeSeven} >
                  <i id='cccc' class="fa-regular fa-thumbs-up"></i>
                  <p id='ccc'>Like</p>
                </div>
                <div className='res'>
                <i class="fa-regular fa-comment"></i>
                <p>Comment</p>
                </div>
                <div className='res'>
                <i class="fa-solid fa-share"></i>
                <p>Share</p>
                </div>
              </div>
            </div>
            
          </div>

           <div className='posts'>
             <div className='posthead'>
              <img src= {laureslogo} alt=''/>
              <div className='allsub'>
               <div className='headsub1'>
                <p>Laureus</p>
                <img src= {verified} alt=''/>
               </div>
               <div className='headsub2'>
                <p>53m .</p>
                <img src={ppublic} alt=''/>
               </div> 
              </div>
            </div>
            <div className='postbody'>
              <p>
                ⚽️ In 2023, Aitana Bonmatí Conca excelled for club and country with 18 goals and 21 assists.
                <br/>
The Laureus World Sportswoman of the Year Nominee won FIFA Women's World Cup with Selección Española Femenina de Fútbol, as well as the UEFA Women's Champions League, Supercopa and Liga F with FC Barcelona Femení.
<br/>
#Laureus24
              </p>
              <img src={laurespost} alt=''/>
            </div>
            <div className='postfoot'>
              <div className='foot1'>
                <div className='likes'>
                  <img src={like} alt=''/>
                  <img src={love} alt=''/>
                  <p>{numOfLike.five}</p>
                </div>
                <div className='coms'>
                  <p>40 comments</p>
                  <p>35 shares</p>
                </div>
              </div>
              <div className={`foot2 ${ likeCol.five ?'colLike' : 'notLike'}`}>
                <div className='res'  onClick={handleLikeFive} >
                  <i id='cccc' class="fa-regular fa-thumbs-up"></i>
                  <p id='ccc'>Like</p>
                </div>
                <div className='res'>
                <i class="fa-regular fa-comment"></i>
                <p>Comment</p>
                </div>
                <div className='res'>
                <i class="fa-solid fa-share"></i>
                <p>Share</p>
                </div>
              </div>
            </div>
            
          </div>

          
          <div className='posts'>
             <div className='posthead'>
              <img src= {skylogo} alt=''/>
              <div className='allsub'>
               <div className='headsub1'>
                <p>Sky Sports</p>
                <img src= {verified} alt=''/>
               </div>
               <div className='headsub2'>
                <p>2d .</p>
                <img src={ppublic} alt=''/>
               </div> 
              </div>
            </div>
            <div className='postbody'>
              <p>
                Antony Joshua defeated Francis with a final fatal blow 💥
              </p>
              <img src={skypost} alt=''/>
            </div>
            <div className='postfoot'>
              <div className='foot1'>
                <div className='likes'>
                  <img src={like} alt=''/>
                  <img src={love} alt=''/>
                  <p>{numOfLike.six}</p>
                </div>
                <div className='coms'>
                  <p>40 comments</p>
                  <p>35 shares</p>
                </div>
              </div>
              <div className={`foot2 ${ likeCol.six ?'colLike' : 'notLike'}`}>
                <div className='res'  onClick={handleLikeSix} >
                  <i id='cccc' class="fa-regular fa-thumbs-up"></i>
                  <p id='ccc'>Like</p>
                </div>
                <div className='res'>
                <i class="fa-regular fa-comment"></i>
                <p>Comment</p>
                </div>
                <div className='res'>
                <i class="fa-solid fa-share"></i>
                <p>Share</p>
                </div>
              </div>
            </div>
          </div>
          


      </div>

        <div className='mainright'>
          
          <div className='birth'>
            <p>Birthdays</p>
            <div className='birthhead'>
            <img src={birthday} alt='birth'/>
            <p><b>Ibrahim Abdulateef </b> and <b>5 others</b> have birthday today</p>
            </div>
          </div>
          <div className='header'>
            <p>Contacts</p>
            <div className='head'>
              <img src={search} alt='search'/>
              <img src={option} alt='option'/>
            </div>
          </div>

          <div className='actives'>

            <div className='people'>
              <div className='imgact'>
                <img src={doc} alt='doc'/>
                <div></div>
              </div>
              <p>Doctuur Fahim-Deen Ayinde</p>
            </div>
            <div className='people'>
              <div className='imgact'>
                <img src={doja} alt='doja'/>
                <div></div>
              </div>
              <p>Doja Adedoja</p>
            </div>
            <div className='people'>
              <div className='imgact'>
                <img src={mush} alt='mush'/>
                <div></div>
              </div>
              <p>Oyekola Musharaf</p>
            </div>
            <div className='people'>
              <div className='imgact'>
                <img src={hamid} alt='hamid'/>
                <div></div>
              </div>
              <p>Hammed La Fortune</p>
            </div>
            <div className='people'>
              <div className='imgact'>
                <img src={kamil} alt='kamil'/>
                <div></div>
              </div>
              <p>Kamil Deen</p>
            </div>
            <div className='people'>
              <div className='imgact'>
                <img src={ojo} alt='doja'/>
                <div></div>
              </div>
              <p>Ojo Naseef</p>
            </div>
            <div className='people'>
              <div className='imgact'>
                <img src={muiz} alt='doja'/>
                <div></div>
              </div>
              <p>Abdulwahab Abdulmuiz Asamu</p>
            </div>
            <div className='people'>
              <div className='imgact'>
                <img src={latif} alt='doja'/>
                <div></div>
              </div>
              <p>Abdulazeez Abdulateef Abefe</p>
            </div>
            <div className='people'>
              <div className='imgact'>
                <img src={nuru} alt='doja'/>
                <div></div>
              </div>
              <p>Nasrudeen Nurudeen</p>
            </div>
            <div className='people'>
              <div className='imgact'>
                <img src={ameer} alt='doja'/>
                <div></div>
              </div>
              <p>Ameer Abdulrahman Olalekan</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default App