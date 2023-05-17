import { useReducer } from 'react';
import './App.css';

const initState = {
  day: '',
  month: '',
  year: ''
}

function useReducerDate(state, action) {
  switch (action.type) {
    case "inputChange": 
      return {
        ...state,
        [action.input.name]: Number(action.input.value)
      }
  }
}

function App() {
  const [inputDate, dispatch] = useReducer(useReducerDate, initState);

  function handleValueChange(e) {
    console.log({inputDate})
    dispatch({
      type: "inputChange",
      input: {
        name: e.currentTarget.name,
        value: e.currentTarget.value
      }
    })
  }
  
  return (
    <section className="box">
      <section className="section-input">
        <div className="input-group">
          <label>Day</label>
          <input 
            className={""} 
            tabIndex="1" 
            type="number" 
            name="day" 
            id="day" 
            placeholder="DD" 
            min="1" 
            max="31" 
            maxLength="2"
            onChange={handleValueChange}
            value={inputDate.day}
          />
        </div>
        <div className="input-group">
          <label>Month</label>
          <input 
            className={""} 
            tabIndex="2" 
            type="number" 
            name="month" 
            id="month" 
            placeholder="MM" 
            maxLength="2"
            min="1"
            max="12"
            onChange={handleValueChange}
            value={inputDate.month}
          />
        </div>
        <div className="input-group">
          <label>Year</label>
          <input 
            className={""} 
            tabIndex="3" 
            type="number" 
            name="year" 
            id="year" 
            placeholder="YYYY" 
            maxLength="4"
            min="1"
            max="12"
            onChange={handleValueChange}
            value={inputDate.year}
          />
        </div>
      </section>
      <section className="section-divider">
        <div><hr/></div>
        <div className="logo"></div>
      </section>
      <section className="section-results">
        <div className="result">
          <div id="yearsResult" className="result-value">--</div>
          <div className="result-label">years</div>
        </div>
        <div className="result">
          <div id="monthsResult" className="result-value">--</div>
          <div className="result-label">months</div>
        </div>
        <div className="result">
          <div id="daysResult" className="result-value">--</div>
          <div className="result-label">days</div>
        </div>
      </section>
    </section>
  );
}

export default App;
