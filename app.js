"use strict";
class ShowWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: []
    };
  }
  componentDidMount() {
    fetch("https://api.weatherbit.io/v2.0/forecast/daily?lang=ru&days=10&city=Moscow,RU&key=b3e5096601344bde837e2aa622e5cb61")
      .then(res => res.json())
      .then(json => this.setState({ weather: json.data }))
  }
  showWeather() {
    if (this.state.weather.length > 0) {
      return (
        this.state.weather?.map((item, num) => {
          let { 
            temp,
            pop: rainChance,
            pres,
            vis: visibility,
            valid_date: date,
            weather: {code: weatherCode}} = item;
          let dayName,
            weatherType;

          temp = Math.round(temp);
          pres = Math.floor((pres * 75006) / 100000);
          visibility = Math.round(visibility * 100) / 100;
          date = new Date(date)

          switch (date.getDay()) {
            case 0:
              dayName = "Воскресенье"
              break;
            case 1:
              dayName = "Понедельник"
              break;
            case 2:
              dayName = "Вторник"
              break;
            case 3:
              dayName = "Среда"
              break;
            case 4:
              dayName = "Четверг"
              break;
            case 5:
              dayName = "Пятница"
              break;
            case 6:
              dayName = "Суббота"
              break;
            default:
              dayName = "ХЗдень"
              break;
          }
          if (weatherCode >= 200 && weatherCode < 300) {
            weatherType = 'stormy'
          } else if (weatherCode >= 500 && weatherCode < 600) {
            weatherType = 'rainy'
          } else if (weatherCode >= 600 && weatherCode < 700 || weatherCode >= 300 && weatherCode < 400) {
            weatherType = 'snowy'
          } else if (weatherCode === 800) {
            weatherType = 'sunny'
          } else if (weatherCode >= 801 && weatherCode < 900) {
            weatherType = 'partly-cloudy'
          } else {
            weatherType = 'cloudy'
          }
          console.log(weatherCode);
          return (
            <div className="day" key={num}>
              <div className="day-of-week">{dayName}</div>
              <div className="date">{date.getDate()}</div>

              <div className={`bar ${weatherType}`}>
                <div className="weather">
                  <svg role="img">
                    <use xlinkHref={`#${weatherType}`} width="264" height="166" viewBox="0 0 264 166"></use>
                  </svg>
                </div>
                <div className="temperature">
                  {temp}<span className="degrees">&deg;</span>
                </div>
                <div className="content">
                  <div className="precipitation">
                    {temp < 3
                      ? <i className="bi bi-thermometer-snow" />
                      : <i className="bi bi-umbrella" />
                    }
                    {rainChance}%
                  </div>
                  <div className="low">
                    <i className="bi bi-arrows-collapse" />
                    {pres} <sub style={{ fontSize: 0.7 + "rem" }}>mmhg</sub>
                  </div>
                  <div className="visibility">
                    <i className="bi bi-binoculars"/>
                    {visibility} Km
                  </div>
                </div>
              </div>
            </div>
          )
        })
      )
    }
  }

  render() {
    return (
      <>
        {this.showWeather()}
      </>
    )
  }
}
ReactDOM.render(
  <ShowWeather />,
  document.querySelector('.wrapper')
)