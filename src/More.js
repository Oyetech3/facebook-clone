import React from 'react'
import './more.css'
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
import video from './images-folder/video.png'
import ads from './images-folder/ads.png'

export default function More() {
  return (
    <div className='all'>
         <div className='allleft'>

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

    </div>
  )
}
