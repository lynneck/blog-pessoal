
import React from 'react'
import styles from './Inicio.module.css'

import posts from 'json/posts.json'
import Post from 'componentes/PostCard'
import PostCard from 'componentes/PostCard'


export default function Inicio() {
  return (
    <main>


      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>

        ))}

      </ul>

    </main>
  )
}
