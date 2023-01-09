const kitties = [
    {
        name: "Kino",
        photo: <img src="img/kino.png"></img>,
        id: 1
    },
    {
        name: "Jut",
        photo: <img src="img/jut.png"></img>,
        id: 2,
    },
    {
        name: "Pepper",
        photo: <img src="img/pepper.png"></img>,
        id: 3
    },
    {
        name: "Tatou",
        photo: <img src="img/tatou.png"></img>,
        id: 4
    },
    {
        name: "Eddie",
        photo: <img src="img/eddie.png"></img>,
        id: 5
    }
];



const Header = (props) => {
    return (
        <header id="web-title">
            <h1>{props.title}</h1>
            <h7>{props.text}</h7>
        </header>
    )
}

const Footer = (props) => {
    return (
        <footer id="web-title">
            <h7>{props.title}</h7>
        </footer>
    )
}

const Kitties = (props) => {
    return (
        <div className="kittie">
            <span className="kittie-pic">{props.photo}</span>
            <span className="kittie-name">{props.name}</span>
        </div>
    )
}

const App = () => {
    return (
        <body>
        <div className="kitties">
            <Header title="Top 5 Cats in the family" text="(in no particular order)" />
            <main>
            {/* Player list */}
            {kitties.map( kitties =>
                <Kitties totalKitties={kitties.length}
                photo = {kitties.photo}
                name = {kitties.name}
                key = {kitties.id.toString()}
                />
                )}
                </main>
            <Footer title="Thank you." />
        </div>
        </body>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)