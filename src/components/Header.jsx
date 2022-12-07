import logo from '../images/logo.png'

function Header() {
    return (
        <header className="section">
            <div className="row mx-auto">
                <div id="header-col-1" className="text-center col-xs-12 col-md-3">
                    <img id="logo" src={logo} alt="" />
                </div>
                <div id="header-col-2" className="text-center col-xs-12 col-md-5">
                    <input className="mx-auto col-md-10 form-control" type="search" placeholder='Buscar produtos'/>
                </div>
                <div id="header-col-3" className="text-center col-xs-12 col-md-3">
                    <span id="televendas">TELEVENDAS</span><br/>
                    <span className='tel'>(71) 3310-2222</span>
                </div>
            </div>
        </header>
    );
}   

export default Header;