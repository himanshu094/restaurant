export default function Heading({title})
{
  return(
    <div style={{fontFamily:"Kanit",
    fontWeight:"bold",
    fontSize:20,
    letterSpacing:1,
    display:"flex",
    alignItems:"center"}}>
      <img src="logo.png" width="60" />
      <div>{title}</div>
    </div>
  )
}