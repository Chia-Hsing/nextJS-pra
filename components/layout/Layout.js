import MainNavigation from './MainNavigation'

const LayOut = (props) => {
    return (
        <>
            <MainNavigation />
            {props.children}
        </>
    )
}

export default LayOut
