"use strict";

function RenderFuncWeather() {
    let weatherArr;
    async function getWeather() {
        let responce = await fetch("https://api.weatherbit.io/v2.0/forecast/daily?lang=ru&days=10&city=Moscow,RU&key=b3e5096601344bde837e2aa622e5cb61")
        let weather = await responce.json();
        return weatherArr = weather.data.map(i =>
            <div className="day">
                <div className="day-of-week">Wed</div>
                <div className="date">8</div>

                <div className="bar cloudy">
                    <div className="weather">
                        <svg role="img">
                            <use xlinkHref="#cloudy" width="264" height="166" viewBox="0 0 264 166"></use>
                        </svg>
                    </div>
                    <div className="temperature">
                        {i.temp}<span className="degrees">&deg;</span>
                    </div>
                    <div className="content">
                        <div className="precipitation">
                            <svg role="img" className="icon">
                                <use xlinkHref="#precipitation"></use>
                            </svg>
                            {i.pop}%
                        </div>
                        <div className="low">
                            <svg role="img" className="icon">
                                <use xlinkHref="#low"></use>
                            </svg>
                            28&deg;
                        </div>
                    </div>
                </div>
            </div>
        )
        console.log(weatherArr);
    }
    getWeather()
    return (
        <>
        {}
        </>
        // <div className="day">
        //     <div className="day-of-week">Wed</div>
        //     <div className="date">8</div>
        //     <div className="bar cloudy">
        //         <div className="weather">
        //             <svg role="img">
        //                 <use xlinkHref="#cloudy" width="264" height="166" viewBox="0 0 264 166"></use>
        //             </svg>
        //         </div>
        //         <div className="temperature">
        //             1<span className="degrees">&deg;</span>
        //         </div>
        //         <div className="content">
        //             <div className="precipitation">
        //                 <svg role="img" className="icon">
        //                     <use xlinkHref="#precipitation"></use>
        //                 </svg>
        //                 2%
        //             </div>
        //             <div className="low">
        //                 <svg role="img" className="icon">
        //                     <use xlinkHref="#low"></use>
        //                 </svg>
        //                 28&deg;
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

function RenderWeather(props = 0) {
    return (
        <div>props:{props}</div>
    )
}

class RecieveWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: []
        };
    }
    // getWeather = async () => {
    //     let responce = await fetch("https://api.weatherbit.io/v2.0/forecast/daily?lang=ru&days=10&city=Moscow,RU&key=b3e5096601344bde837e2aa622e5cb61")
    //     let weather = await responce.json();
    //     // this.setState({ weather: weather });
    //     return weather.data.map((item, num) => {
    //         const { valid_date: date, weather, temp, pop: rain } = item;
    //         console.log(rain);
    //         return (
    //             <div className="day">
    //                 <div className="day-of-week">Wed</div>
    //                 <div className="date">8</div>

    //                 <div className="bar cloudy">
    //                     <div className="weather">
    //                         <svg role="img">
    //                             <use xlinkHref="#cloudy" width="264" height="166" viewBox="0 0 264 166"></use>
    //                         </svg>
    //                     </div>
    //                     <div className="temperature">
    //                         {temp}<span className="degrees">&deg;</span>
    //                     </div>
    //                     <div className="content">
    //                         <div className="precipitation">
    //                             <svg role="img" className="icon">
    //                                 <use xlinkHref="#precipitation"></use>
    //                             </svg>
    //                             {rain}%
    //                         </div>
    //                         <div className="low">
    //                             <svg role="img" className="icon">
    //                                 <use xlinkHref="#low"></use>
    //                             </svg>
    //                             28&deg;
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     })
    //     this.setState({ weatherArr: weatherArr })
    //     console.log(weatherArr)
    // }
    // getWeather()
    componentDidMount() {
        fetch("https://api.weatherbit.io/v2.0/forecast/daily?lang=ru&days=10&city=Moscow,RU&key=b3e5096601344bde837e2aa622e5cb61")
            .then(res => res.json())
            .then(json => this.setState({weather:json.data}))
        
            // let weather = await responce.json();
            // // this.setState({ weather: weather });
            // return weather.data.map((item, num) => {
            //     const { valid_date: date, weather, temp, pop: rain } = item;
            //     console.log(rain);
            //     return (
            //         <div className="day">
            //             <div className="day-of-week">Wed</div>
            //             <div className="date">8</div>
    
            //             <div className="bar cloudy">
            //                 <div className="weather">
            //                     <svg role="img">
            //                         <use xlinkHref="#cloudy" width="264" height="166" viewBox="0 0 264 166"></use>
            //                     </svg>
            //                 </div>
            //                 <div className="temperature">
            //                     {temp}<span className="degrees">&deg;</span>
            //                 </div>
            //                 <div className="content">
            //                     <div className="precipitation">
            //                         <svg role="img" className="icon">
            //                             <use xlinkHref="#precipitation"></use>
            //                         </svg>
            //                         {rain}%
            //                     </div>
            //                     <div className="low">
            //                         <svg role="img" className="icon">
            //                             <use xlinkHref="#low"></use>
            //                         </svg>
            //                         28&deg;
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     )
            // })
            // this.setState({ weatherArr: weatherArr })
            // console.log(weatherArr)
    }
    componentDidUpdate() {
        console.log(this.state.weather);
    }
    
    render() {
        return (
            <div>
                <RenderWeather />
                {/* {this.getWeather()} */}
                <h1>Hello world!{console.log(this.state?.weather?.[0]?.pop)}</h1>
            </div>
            // <div className="day">
            //     <div className="day-of-week">Wed</div>
            //     <div className="date">8</div>

            //     <div className="bar cloudy">
            //         <div className="weather">
            //             <svg role="img">
            //                 <use xlinkHref="#cloudy" width="264" height="166" viewBox="0 0 264 166"></use>
            //             </svg>
            //         </div>
            //         <div className="temperature">
            //             72<span className="degrees">&deg;</span>
            //         </div>
            //         <div className="content">
            //             <div className="precipitation">
            //                 <svg role="img" className="icon">
            //                     <use xlinkHref="#precipitation"></use>
            //                 </svg>
            //                 84%
            //             </div>
            //             <div className="low">
            //                 <svg role="img" className="icon">
            //                     <use xlinkHref="#low"></use>
            //                 </svg>
            //                 28&deg;
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}
ReactDOM.render(
    <RecieveWeather />,
    document.getElementById('react-weather')
)