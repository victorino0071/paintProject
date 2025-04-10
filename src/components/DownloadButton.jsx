import styles from "./css/DownloadButton.module.css"
import html2canvas from 'html2canvas';
function DownloadButton({canvasRef}){

    const downloadImage = ()=>{
        if(canvasRef.current){
            html2canvas(canvasRef.current,{
                scale: 3, useCORS:true,
            }).then((canvas)=>{
                const link = document.createElement("a")
                link.href = canvas.toDataURL("image/png", 2.0)
                link.download = "canvas-image.png"
                link.click()
            })
        }else{
            console.log("Canvas nao encontrado")
        }
    }

    return(
        <button className={styles.DownloadButton}onClick={downloadImage}>Download</button>
    )
}

export default DownloadButton