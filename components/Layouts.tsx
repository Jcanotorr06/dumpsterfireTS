import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PostWidget from "./PostWidget";
import {Post} from '../interfaces'

interface Props {
    posts : Post[]
    variants : any
    colors: string[]
    length: number
}

const initial : Post = {
    _id: 'string',
    Title: 'string',
    body: 'string',
    published_at: '2011-10-05T14:48:00.000Z',
    createdAt: '2011-10-05T14:48:00.000Z',
    updatedAt: '2011-10-05T14:48:00.000Z',
    __v: 0,
    id: 'string',
}

const Layouts = ({posts, variants, colors, length} : Props) => {
    const [hovered, setHovered] = useState<boolean[]>([false, false, false, false])
    const [opened, setOpened] = useState<boolean>(false)
    const [color, setColor] = useState<string>('')
    const [post, setPost] = useState<Post>(initial)

    const handleHoverStart = (i : number) =>{
        let temp : boolean[] = [...hovered]
        for (let j : number = 0; j < temp.length; j++) {
            if(j === i){
                temp[j] = true
            }else{
                temp[j] = false
            }
        }
        setHovered(temp)
    }

    const handleHoverEnd = (i:number) =>{
        let temp:boolean[] = [...hovered]
        temp[i] = false
        setHovered(temp)
    }
    
    const handleClick = (i:number) => {
        setPost(posts[i])
        setColor(colors[i])
        setOpened(true)
    }

    return (
        <>
            {
                length === 4 &&(
                    <div className="w-full h-full grid grid-flow-col grid-cols-2 gap-6">
                        <div className="grid gap-6">
                            <motion.div key={posts[0].id} variants={variants} onHoverStart={() => handleHoverStart(0)} onHoverEnd={() => handleHoverEnd(0)} className={`row-span-4 b rounded-xl relative p-6 bg-${colors[0]}-light`}>
                                <h1 className="text-xl capitalize font-bold">{posts[0].Title}</h1>
                                <h2 className="my-4">Published: {new Date(posts[0].published_at).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</h2>
                                <AnimatePresence>
                                    {hovered[0] && (
                                        <motion.div onClick={() => handleClick(0)} initial={{scaleY: 0, originY: 1, opacity: 0}} animate={{scaleY: 1, opacity: 1}} exit={{scaleY: 0, opacity: 0}} transition={{type: "tween"}} className={`absolute left-0 bottom-0 cursor-pointer w-full p-6 h-full rounded-xl border-b-8 bg-${colors[0]}-light border-${colors[0]}-dark` }>
                                            <h1 className="text-right underline font-bold cursor-pointer">Read More</h1>
                                        </motion.div>  
                                    )}
                                </AnimatePresence>
                            </motion.div>
                            <motion.div key={posts[1].id} variants={variants} onHoverStart={() => handleHoverStart(1)} onHoverEnd={() => handleHoverEnd(1)}  className={`row-span-2 relative rounded-xl p-6 bg-${colors[1]}-light`} >
                                <h1 key={posts[1].id} className="text-xl capitalize font-bold">{posts[1].Title}</h1>
                                <h2 className="my-4">Published: {new Date(posts[1].published_at).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</h2>
                                <AnimatePresence>
                                    {hovered[1] && (
                                        <motion.div onClick={() => handleClick(1)} initial={{scaleY: 0, originY: 1, opacity: 0}} animate={{scaleY: 1, opacity: 1}} exit={{scaleY: 0, opacity: 0}} transition={{type: "tween"}} className={`absolute left-0 bottom-0 cursor-pointer w-full p-6 h-full rounded-xl border-b-8 bg-${colors[1]}-light border-${colors[1]}-dark` }>
                                            <h1 className="text-right underline font-bold cursor-pointer">Read More</h1>
                                        </motion.div>  
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                        <div className="grid gap-6">
                            <motion.div key={posts[2].id} variants={variants} onHoverStart={() => handleHoverStart(2)} onHoverEnd={() => handleHoverEnd(2)}  className={`row-span-3 relative rounded-xl p-6 bg-${colors[2]}-light`} >
                                <h1 className="text-xl capitalize font-bold">{posts[2].Title}</h1>
                                <h2 className="my-4">Published: {new Date(posts[2].published_at).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</h2>
                            <AnimatePresence>
                                {hovered[2] && (
                                    <motion.div onClick={() => handleClick(2)} initial={{scaleY: 0, originY: 1, opacity: 0}} animate={{scaleY: 1, opacity: 1}} exit={{scaleY: 0, opacity: 0}} transition={{type: "tween"}} className={`absolute left-0 bottom-0 cursor-pointer w-full p-6 h-full rounded-xl border-b-8 bg-${colors[2]}-light border-${colors[2]}-dark` }>
                                        <h1 className="text-right underline font-bold cursor-pointer">Read More</h1>
                                    </motion.div>  
                                )}
                            </AnimatePresence>
                            </motion.div>
                            <motion.div key={posts[3].id} variants={variants} onHoverStart={() => handleHoverStart(3)} onHoverEnd={() => handleHoverEnd(3)}  className={`row-span-3 relative rounded-xl p-6 bg-${colors[3]}-light`} >
                                <h1 className="text-xl capitalize font-bold">{posts[3].Title}</h1>
                                <h2 className="my-4">Published: {new Date(posts[3].published_at).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</h2>
                            <AnimatePresence>
                                {hovered[3] && (
                                    <motion.div  onClick={() => handleClick(3)} initial={{scaleY: 0, originY: 1, opacity: 0}} animate={{scaleY: 1, opacity: 1}} exit={{scaleY: 0, opacity: 0}} transition={{type: "tween"}} className={`absolute left-0 bottom-0 cursor-pointer w-full p-6 h-full rounded-xl border-b-8 bg-${colors[3]}-light border-${colors[3]}-dark` }>
                                        <h1 className="text-right underline font-bold cursor-pointer">Read More</h1>
                                    </motion.div>  
                                )}
                            </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                )
            }

            {
                length === 3 && (
                    <div className="w-full h-full grid grid-flow-row gap-6">
                        <div className="w-full grid grid-flow-col gap-6 grid-cols-2">
                            <motion.div key={posts[0].id} variants={variants} onHoverStart={() => handleHoverStart(0)} onHoverEnd={() => handleHoverEnd(0)} className={`b rounded-xl col-auto relative p-6 bg-${colors[0]}-light`}>
                                <h1 className="text-xl capitalize font-bold">{posts[0].Title}</h1>
                                <h2 className="my-4">Published: {new Date(posts[0].published_at).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</h2>
                                    <AnimatePresence>
                                        {hovered[0] && (
                                            <motion.div onClick={() => handleClick(0)} initial={{scaleY: 0, originY: 1, opacity: 0}} animate={{scaleY: 1, opacity: 1}} exit={{scaleY: 0, opacity: 0}} transition={{type: "tween"}} className={`absolute left-0 bottom-0 cursor-pointer w-full p-6 h-full rounded-xl border-b-8 bg-${colors[0]}-light border-${colors[0]}-dark` }>
                                                <h1 className="text-right underline font-bold cursor-pointer">Read More</h1>
                                            </motion.div>  
                                        )}
                                    </AnimatePresence>
                            </motion.div>
                            <motion.div key={posts[1].id} variants={variants} onHoverStart={() => handleHoverStart(1)} onHoverEnd={() => handleHoverEnd(1)} className={`b rounded-xl col-auto relative p-6 bg-${colors[1]}-light`}>
                                <h1 className="text-xl capitalize font-bold">{posts[1].Title}</h1>
                                <h2 className="my-4">Published: {new Date(posts[1].published_at).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</h2>
                                    <AnimatePresence>
                                        {hovered[1] && (
                                            <motion.div onClick={() => handleClick(1)} initial={{scaleY: 0, originY: 1, opacity: 0}} animate={{scaleY: 1, opacity: 1}} exit={{scaleY: 0, opacity: 0}} transition={{type: "tween"}} className={`absolute left-0 bottom-0 cursor-pointer w-full p-6 h-full rounded-xl border-b-8 bg-${colors[1]}-light border-${colors[1]}-dark` }>
                                                <h1 className="text-right underline font-bold cursor-pointer">Read More</h1>
                                            </motion.div>  
                                        )}
                                    </AnimatePresence>
                            </motion.div>
                        </div>
                        <motion.div key={posts[2].id} variants={variants} onHoverStart={() => handleHoverStart(2)} onHoverEnd={() => handleHoverEnd(2)} className={`rounded-xl relative p-6 bg-${colors[2]}-light`} >
                            <h1 className="text-xl capitalize font-bold">{posts[2].Title}</h1>
                            <h2 className="my-4">Published: {new Date(posts[2].published_at).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</h2>
                            <AnimatePresence>
                                {hovered[2] && (
                                    <motion.div onClick={() => handleClick(2)} initial={{scaleY: 0, originY: 1, opacity: 0}} animate={{scaleY: 1, opacity: 1}} exit={{scaleY: 0, opacity: 0}} transition={{type: "tween"}} className={`absolute left-0 bottom-0 cursor-pointer w-full p-6 h-full rounded-xl border-b-8 bg-${colors[2]}-light border-${colors[2]}-dark` }>
                                        <h1 className="text-right underline font-bold cursor-pointer">Read More</h1>
                                    </motion.div>  
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                )
            }

            {
                length === 2 && (
                    <div className="w-full h-full grid grid-flow-row gap-6">
                        <motion.div key={posts[0].id} variants={variants} onHoverStart={() => handleHoverStart(0)} onHoverEnd={() => handleHoverEnd(0)} className={`b rounded-xl relative p-6 bg-${colors[0]}-light`}>
                            <h1 className="text-xl capitalize font-bold">{posts[0].Title}</h1>
                            <h2 className="my-4">Published: {new Date(posts[0].published_at).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</h2>
                            <AnimatePresence>
                                {hovered[0] && (
                                    <motion.div onClick={() => handleClick(0)} initial={{scaleY: 0, originY: 1, opacity: 0}} animate={{scaleY: 1, opacity: 1}} exit={{scaleY: 0, opacity: 0}} transition={{type: "tween"}} className={`absolute left-0 bottom-0 cursor-pointer w-full p-6 h-full rounded-xl border-b-8 bg-${colors[0]}-light border-${colors[0]}-dark` }>
                                        <h1 className="text-right underline font-bold cursor-pointer">Read More</h1>
                                    </motion.div>  
                                )}
                            </AnimatePresence>
                        </motion.div>
                        <motion.div key={posts[1].id} variants={variants} onHoverStart={() => handleHoverStart(1)} onHoverEnd={() => handleHoverEnd(1)} className={`rounded-xl relative p-6 bg-${colors[1]}-light`} >
                            <h1 className="text-xl capitalize font-bold">{posts[1].Title}</h1>
                            <h2 className="my-4">Published: {new Date(posts[1].published_at).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</h2>
                            <AnimatePresence>
                                {hovered[1] && (
                                    <motion.div onClick={() => handleClick(1)} initial={{scaleY: 0, originY: 1, opacity: 0}} animate={{scaleY: 1, opacity: 1}} exit={{scaleY: 0, opacity: 0}} transition={{type: "tween"}} className={`absolute left-0 bottom-0 cursor-pointer w-full p-6 h-full rounded-xl border-b-8 bg-${colors[1]}-light border-${colors[1]}-dark` }>
                                        <h1 className="text-right underline font-bold cursor-pointer">Read More</h1>
                                    </motion.div>  
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                )
            }

            {
                length === 1 && (
                    <div className="w-full h-full grid gap-6">
                        <motion.div key={posts[0].id} variants={variants} onHoverStart={() => handleHoverStart(0)} onHoverEnd={() => handleHoverEnd(0)} className={`rounded-xl relative p-6 bg-${colors[0]}-light`}>
                            <h1 className="text-xl capitalize font-bold">{posts[0].Title}</h1>
                            <h2 className="my-4">Published: {new Date(posts[0].published_at).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</h2>
                            <AnimatePresence>
                                {hovered[0] && (
                                    <motion.div onClick={() => handleClick(0)} initial={{scaleY: 0, originY: 1, opacity: 0}} animate={{scaleY: 1, opacity: 1}} exit={{scaleY: 0, opacity: 0}} transition={{type: "tween"}} className={`absolute left-0 bottom-0 cursor-pointer w-full p-6 h-full rounded-xl border-b-8 bg-${colors[0]}-light border-${colors[0]}-dark` }>
                                        <h1 className="text-right underline font-bold cursor-pointer">Read More</h1>
                                    </motion.div>  
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                )
            }
            <PostWidget post={post} opened={opened} setOpened={setOpened} color={color} />
        </>
    )
}

export default Layouts