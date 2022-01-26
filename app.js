"use strict";
// const daysOfWeekMap = {
//     0: 'SUN', 
//     1: 'MON', 
//     2: 'TUES', 
//     3: 'WED', 
//     4: 'THUR', 
//     5: 'FRI', 
//     6: 'SAT'
// }

// const iconNameToSizeMap = {
//     cloudy: { width: 264, height: 166},
//     sunny: { width: 208, height: 213},
//     stormy: { width: 246, height: 187},
//     snowy: { width: 230, height: 196},
//     'partly-cloudy': {width: 230, height:209},
//     rainy: { width: 160, height: 222},
// }

class RenderWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        async function getWeather () {
            let responce = await fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=b3e5096601344bde837e2aa622e5cb61")
            let weather = await responce.json();
            console.log(weather.data);
        }
        getWeather()
        return (
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
                    72<span className="degrees">&deg;</span>
                </div>
                <div className="content">
                    <div className="precipitation">
                        <svg role="img" className="icon">
                            <use xlinkHref="#precipitation"></use>
                        </svg>
                        84%
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
    }
}
ReactDOM.render(
    <RenderWeather />,
    document.getElementById('react-weather')
)