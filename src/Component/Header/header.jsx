const Header = () => {
    
    let styleobj = {
        color : "white",
        backgroundColor: "pink",
        textAlign: "center",
        border :"2px solid turquoise"
    }
    return(
    <div style = {styleobj}>
        <h2>My First React App</h2>
        <h1>Welcome</h1>
    </div>
    );
}
export default Header;