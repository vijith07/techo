import Link from "next/link";
import React from "react";
import styles from '../styles/Middle.module.css'
import Cover from "./Cover";

interface IssueProps {
  edition: string
  children: string
  uri: string
}

const Issue = (props:IssueProps) =>{
  return (<div className={styles.middleContentItem}>
      <div className={styles.middleContentImage}>
        <Cover uri={props.uri} pathString={props.edition+".png"} />
      </div>
      <div className={styles.middleContentText}>
        <h4 className={styles.middleContentTitle}>
          Edition #{props.edition}
        </h4>
        <p className={styles.middleContentDescription}>
          {props.children}
        </p>
        <Link href='#'>
          <a className={styles.middleContentButton}>Read More</a>
        </Link>
      </div>
    </div>);
}
  
  export default Issue;