import Image from 'next/image'

interface imageProps{
    style:string,
    alt:string,
    src:string,
    width?:number,
    height?:number,
    sizes?: string,
    priority?:boolean
}
function Avatar({alt,src,width,height,sizes,priority,style}:imageProps) {
  return (
    <Image
    className={style}  
    alt={alt} 
    src={src} 
    width={width} 
    height={height} 
    sizes={sizes}
    priority={priority}
    />
  )
}

export default Avatar 