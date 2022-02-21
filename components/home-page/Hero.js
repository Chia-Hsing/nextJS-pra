import Image from 'next/image'

import classes from './hero.module.css'

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/image/site/fabrizio.jpg" alt="" width={300} height={300} />
            </div>
            <h1>HAHA</h1>
            <p>...</p>
        </section>
    )
}

export default Hero
