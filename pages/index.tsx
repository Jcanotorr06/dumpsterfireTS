import { useState } from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import axios from 'axios'
import Particles from 'react-particles-js'
import { motion } from 'framer-motion'

import {Post} from '../interfaces'
import {NavBar, Gif, ParticlesParams, Loading, Cards} from '../components'

export const getStaticProps: GetStaticProps = async () =>{
  const posts : Post[][] = []
  await axios.get('https://dumpsterfire-api.herokuapp.com/posts')
  .then(res => {
    res.data.reverse()
    for(let i : number = 0; i < res.data.length; i+=4){
      posts.push(res.data.slice(i, i+4))
    }
  })
  .catch(err => {
    console.log(err)
  })
  return{
    props: {
      posts
    }
  }
}

interface Props {
  posts: Post[][]
}

const Home: NextPage<Props> = ({posts}) => {

  const [page, setPage] = useState<number>(0)
  const [scroll, setScroll] = useState<boolean>(false)
  const [colors, setColors] = useState<string[]>(['blue', 'yellow', 'pink', 'cyan', 'orange', 'bubbleGum', 'lavender'])

  const variants = {
    full: {
      width: '100%'
    },
    collapsed: {
      width: '40%'
    },
    out: {
      y: '100%',
      opacity: 0
    },
    in:{
      y:'0%',
      opacity: 1,
    }
  }

  const handlePageIncrease = () => {
    if(page < posts.length - 1){
      setPage(page+1)
      let active : string[] = colors.slice(0,4)
      let leftover : string[] = colors.slice(4, colors.length)
      leftover.push(...active)
      setColors(leftover)
    }
  }

  const handlePageDecrease = () => {
    if(page > 0){
      setPage(page-1)
      let lastActive : string[] = colors.slice(3,colors.length)
      let lastLeftover : string[] = colors.slice(0,3)
      lastActive.push(...lastLeftover)
      setColors(lastActive)
    }
  }

  return (
    <>
      <Head>
        <title>Dumpster Fire</title>
        <meta name="description" content="My personal blog where I post my thoughts on life, technology or whatever crosses my mind"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        posts.length > 0 ?
          <div className="parent">
            <NavBar/>
            <motion.div className="mainContainer bg-white" animate={scroll ? "collapsed":"full"} variants={variants} transition={{type: "spring", damping: 10}}>
                <Particles style={{position: 'absolute', width:"100vw", height:"100%", left:0, top: 0, zIndex:-1}} width="100vw" params={ParticlesParams}/>
                <Gif/>
                <h1 className="break title">Watch Me Crash And Burn</h1>
                {scroll ? 
                  <button onClick={() => setScroll(!scroll)} className="text-3xl font-bold">↑</button>
                :<button onClick={() => setScroll(!scroll)} className="text-3xl font-bold">↓</button>
                }
            </motion.div>
            <motion.div className="cardContainer bg-black" animate={scroll ? "in":"out"} variants={variants} transition={{type: "spring", damping: 10}}>
              {scroll &&(
                <>
                  <h1 className="heading mb-14">My Toughts On Life Technology And More</h1>
                  <Cards posts={posts} page={page} colors={colors}/>
                </>
              )
              }
              <div className="pt-12 w-full flex justify-between">
                <h1 className={`text-3xl link font-bold select-none ` + (page > 0 ? 'text-white hover:underline  hover:cursor-pointer':'text-gray-400')} onClick={() => handlePageDecrease()}>← NEWER</h1>
                <h1 className={`text-3xl link font-bold select-none ` + (page < posts.length - 1 ? 'text-white hover:underline  hover:cursor-pointer':'text-gray-400')} onClick={() => handlePageIncrease()}>OLDER →</h1>
              </div>
            </motion.div>
          </div>
        : 
          <Loading/>
      }
    </>
  )
}

export default Home
