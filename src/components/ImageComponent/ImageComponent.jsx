import { useState } from "react";
import { Blurhash } from "react-blurhash";

export const ImageComponent = (props) => {
    const [blurhashVisible, setBlurhashVisible] = useState(true);

    const handleImageLoad = () => {
        setBlurhashVisible(false);
    }

    return (
        <>
            <div
                className={props.className}
                style={{
                    display: "grid",
                    gridTemplateAreas: "image_component_overlap",
                    position: "relative",
                    width: "100%",
                    aspectRatio: `${props.imageInfo.aspect_ratio}`
                }}>
                <Blurhash
                    hash={props.imageInfo.blurhash}
                    width="100%"
                    height="100%"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    style={{
                        gridArea: "image_component_overlap",
                        opacity: blurhashVisible ? "1" : "0",
                        transition: "opacity 200ms ease-out"
                    }}
                />
                <picture>
                    <source
                        media="(min-width: 1440px)"
                        srcSet={
                            `${props.imageInfo.desktop} ${props.imageInfo.desktop_width},
                            ${props.imageInfo.desktop_2x} ${props.imageInfo.desktop_2x_width}`
                        } />
                    <source
                        media="(min-width: 768px)"
                        srcSet={`${props.imageInfo.tablet} ${props.imageInfo.tablet_width},
                        ${props.imageInfo.tablet_2x} ${props.imageInfo.tablet_2x_width}`
                        } />
                    <source
                        srcSet={`${props.imageInfo.mobile} ${props.imageInfo.mobile_width},
                        ${props.imageInfo.mobile_2x} ${props.imageInfo.mobile_2x_width}`
                        } />
                    <img
                        src={`${props.imageInfo.desktop_2x}`}
                        alt={props.imageInfo.alt}
                        loading="lazy"
                        onLoad={handleImageLoad}
                        style={{
                            gridArea: "image_component_overlap"
                        }} />
                </picture>
            </div>
        </>
    )
}