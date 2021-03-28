import { DoubleBounce, CubeGrid } from 'better-react-spinkit'
const Loading = () => {
    return (
        <center style={{display: "grid", placeItems: "center", height:"100vh" }}>
           <div>
               <img src="https://www.logo.wine/a/logo/WhatsApp/WhatsApp-Logo.wine.svg" alt="" height={150} style={{ marginBottom: "10px" }}/>
               <DoubleBounce color="#3CBC2B" size={70} />
               </div> 
        </center>
    )
}

export default Loading
