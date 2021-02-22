import Link from 'next/link'

export default function BlogPanel(props) {
    return (
        <div>
            <img className="object-cover w-72 h-40" src={props.blogHeroImage} alt={props.blogAltText}/>
            <div>{props.blogTitle}</div>
            <p>{props.blogExcerpt}</p>
            <Link href={`/blog/${props.blogSlug}`}><button>Read</button></Link>
        </div>
    )
}
