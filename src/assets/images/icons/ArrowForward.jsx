export const ArrowForward = (props) => {
    const { fill, height, width } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className='forward_arrow' alt=''><path fill={fill} d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"></path></svg>
    )
}