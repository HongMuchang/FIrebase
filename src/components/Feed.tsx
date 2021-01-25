import React from 'react'
import { auth } from '../firebase';
  

const Feed = () => {
  return (
    <div>
      <p>aaa</p>
      <button
        onClick={()=>auth.signOut()}
      >ログアウト</button>
    </div>
  )
}

export default Feed
