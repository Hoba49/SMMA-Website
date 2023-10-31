import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () =>(
    <section className={layout.section}>
      <div className={`${layout.sectionInfo} ml-20`}>
        <h2 className={styles.heading2}>Reach your target audience <br className='
        sm:block hidden'/>with us in a few easy steps.</h2>

        <p className={`${styles.paragraph} max-w-[480px]
         mt-5`}>
          [Insert Text Here]
        </p>
        
        <Button styles = "mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%]
        h-100%]'/>
      </div>
    </section>
  )

export default CardDeal