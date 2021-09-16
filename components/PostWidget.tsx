import { motion, AnimatePresence } from "framer-motion"
import {Scrollbars} from "react-custom-scrollbars"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {Post} from '../interfaces'
import {Dispatch, SetStateAction} from 'react'

interface Props {
    post: Post
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    color: string
}

const PostWidget = ({post, opened, setOpened, color} : Props) => {
    return(
        <AnimatePresence>
            {opened && (
                <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0, opacity: 0}} className={`post bg-${color}-light`}>
                    <Scrollbars autoHide>
                        <div className="post-inner">
                            <button onClick={() => setOpened(false)} className="text-3xl font-bold select-none hover:underline">← Back</button>
                            <h1 className="post-title">{post.Title}</h1>
                            <h2 className="text-right" >Published: {new Date(post.published_at).toLocaleDateString()}</h2>
                            <div className="post-body">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {post.body}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </Scrollbars>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default PostWidget