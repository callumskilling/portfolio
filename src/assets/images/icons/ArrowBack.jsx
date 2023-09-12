export const ArrowBack = (props) => {
    const { fill, height, width } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className='back_arrow' alt=''><path fill={fill} d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z"></path></svg>
    )
}