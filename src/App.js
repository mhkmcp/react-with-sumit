import  Clock from './Clock'
import ClockElement from './ClockClass';

function App() {
  return (
    <div>
      <Clock locale="bn-BD" />
      <ClockElement locale="bn-BD" >Children Text</ClockElement>
    </div>
  );
}

export default App;
