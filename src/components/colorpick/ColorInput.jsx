import styles from "../css/ColorPick.module.css"
import { SketchPicker } from "react-color";
import { useState } from "react";
import RecentColor from "./RecentColor";

function ColorInput({presentColor, onColorChange}){
    const [displayPicker, setDisplayPicker] = useState(false);
    const [recentColors, setRecentColors] = useState([]);
    const handleClick = () => setDisplayPicker(!displayPicker);
    const handleClose = () => setDisplayPicker(false);

    const handleColorChange = (color) => {
        onColorChange(color.hex);
        setRecentColors(prevColors => {
            const newColors = [...prevColors, color.hex];

            // Se o número de cores for maior que 6, remove a primeira cor (mais antiga)
            if (newColors.length > 6) {
                newColors.shift(); // Remove o primeiro elemento
            }

            return newColors;
        });
        console.log(recentColors)
        // Atualiza a cor no formato HEX
    };
    
    return(
        <div>
          <div className={styles.RecentColorPick}>
            <RecentColor color={recentColors[0]}/>
            <RecentColor color={recentColors[1]}/>
            <RecentColor color={recentColors[2]}/>
            <RecentColor color={recentColors[3]}/>
            <RecentColor color={recentColors[4]}/>
            <RecentColor color={recentColors[5]}/>
          </div>
          <p style={{margin: "2rem"}}>Escolha a cor</p>
          <div style={{
                backgroundColor: presentColor,
                width: "10rem",
                height: "10rem",
                borderRadius: "1rem",
                cursor: "pointer",
                border: " 2px solid white"
                }}
                onClick={handleClick}>
          </div> 
            {displayPicker ? (
                <div style={{ position: "absolute", zIndex: 2 }}>
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width:"50rem"
                        }}
                        onClick={handleClose}
                    ></div>
                    <SketchPicker
                        color={presentColor}
                        onChangeComplete={handleColorChange}
                        styles={{
                            default: {
                                picker: {
                                  width: "50rem",
                                  padding: "0",
                                  borderRadius: "0",
                                  boxShadow: "none",
                                  display: "block", // Evita o uso do Flexbox
                                  transition: "all 0.3s ease", // Adiciona uma transição suave em todas as propriedades
                                },
                                saturation: {
                                  height: "100%",
                                  border: "none",
                                  background: "transparent",
                                  transition: "background 0.3s ease", // Suaviza a mudança de fundo ao interagir
                                },
                                hue: {
                                  height: "2rem",
                                  border: "none",
                                  background: "transparent",
                                  transition: "background 0.3s ease", // Suaviza a mudança de fundo da barra de cor
                                },
                                alpha: {
                                  display: "none", // Remove a barra de transparência
                                  transition: "none", // Desativa animação (já não é visível)
                                },
                                input: {
                                  display: "none", // Remove os campos de entrada (RGB, HEX, HSL)
                                  transition: "none", // Desativa animação (já não é visível)
                                },
                                colors: {
                                  display: "none", // Remove a barra de cores padrão na parte inferior
                                  transition: "none", // Desativa animação (já não é visível)
                                },
                                trigger: {
                                  border: "none",
                                  background: "transparent",
                                  boxShadow: "none",
                                  transition: "background-color 0.3s ease", // Adiciona animação para o botão de trigger
                                },
                              },
                        }}
                    />
                </div>
            ) : null}

        </div>

    )
}

export default ColorInput