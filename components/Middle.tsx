import Link from 'next/link'
import styles from '../styles/Middle.module.css'
import Cover from './Cover'
import Issue from './Issue'

const Middle = () => {
  // declare a variable path string
  const pathString = "/4.png"

  const cdnLinks ={
    "1": "https://cdn.heyzine.com/flip-book/pdf/b12222099edfc453566ffd82a66cd9ab7411d8e9.pdf",
    "2": "https://cdn.heyzine.com/flip-book/pdf/b12222099edfc453566ffd82a66cd9ab7411d8e9.pdf",
    "3": "https://cdn.heyzine.com/flip-book/pdf/b12222099edfc453566ffd82a66cd9ab7411d8e9.pdf",
    "4": "https://cdn.heyzine.com/flip-book/pdf/b12222099edfc453566ffd82a66cd9ab7411d8e9.pdf",
  }

  
  return (
    <div className={styles.middle}>
      <h3 className={styles.title}>Previous Issues</h3>
      <div className={styles.middleContent}>
      <Issue edition='3' uri={cdnLinks[4]}>
        T-Echo magazine is ready with its third edition with a lot more interesting things. It will take you back to a memory lane of the outing, our enriched artists @Nikhil & @Mahima and most interestingly, how amazing Technovert is going to be in 2022 with the vision of our leadership. This time, it also has a special feature for a travel story by @Hitoishi motivating us to take a break now and then and an endearing inspiration from one of the fellow Technoverts @Mahender, we absolutely need today. 
      </Issue>
      <Issue edition='2' uri={cdnLinks[3]}>
        The bi-monthly magazine is finally out with its second edition to kick start your Monday with the inspiration and passion we share at Technovert. We appreciate all the response and support we got for this edition. We hope we get to sing more stories and witness all our fellow talent with every growing edition. Our special thanks to the marketing team - Rahul Sudeep, Ankita Joshi, Mayank Khanna, Venkata Chalam for your volunteer and passionate efforts! 🙌  
      </Issue>
      <Issue edition='1' uri={cdnLinks[2]}>
        We have a lot of exciting things to share and they're all about our journey together as one big family. The magazine will remind you that each of us is telling the tale of Technovert in our own special way. The magazine will reach you on the last week of every second month. We hope you'll join us in this journey and we hope you'll be inspired to take the next step in your journey.
      </Issue>
      <Issue edition='1' uri={cdnLinks[1]}>
        We have a lot of exciting things to share and they're all about our journey together as one big family. The magazine will remind you that each of us is telling the tale of Technovert in our own special way. The magazine will reach you on the last week of every second month. We hope you'll join us in this journey and we hope you'll be inspired to take the next step in your journey.
      </Issue>
      </div>
    </div>
  )
}
export default Middle