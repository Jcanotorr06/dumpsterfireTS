import {motion} from 'framer-motion'
import Layouts from './Layouts'
import {Post} from '../interfaces'

interface Props{
    posts: Post[][],
    page: number,
    colors: string[]
}

const Cards = ({posts, page, colors} : Props) => {
    const variants = {
        hidden: {
            scale: 0
        },
        show: {
            scale: 1
        }
    }
    const parent = {
        show: {
            transition: {
                staggerChildren: 0.5,
                delay: 1.5
            }
        }
    }

    return (
        <div className="p-6 w-full h-full">
            <motion.div variants={parent} initial="hidden" animate="show" key={page} className="h-full">
                <Layouts posts={posts[page]} colors={colors} variants={variants} length={posts[page].length}/>
            </motion.div>
        </div>
    )
}

export default Cards
