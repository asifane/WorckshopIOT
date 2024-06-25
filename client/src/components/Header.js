
function Header() {
    return (
    <header className="header">
        <top_bar className="header__container">
            <div className="container__datetime">
                <time className="datetime--time">9:30PM</time>
                <date className="datetime--date">Friday september 23, 2024</date>
            </div>

            <div className="container__title">
                <img src = "/images/title-logo.svg" className="container__title--img"/>
            </div>

        </top_bar>
        
    </header>

            
    );
  }
  


export default Header;