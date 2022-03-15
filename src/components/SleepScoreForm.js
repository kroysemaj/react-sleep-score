import DurationSelect from './DurationSelect';

const SleepScoreForm = () =>
  //   {
  //   scores,
  //   updateDurationInBed,
  //   updateDurationAsleep,
  //   processSleepScore,
  // }
  {
    // const formIsValid =
    //   scores.durationAsleep === '' || scores.durationInBed === '';

    // const handleClick = e => {
    //   e.preventDefault();
    //   const sleepScore = 100 * (scores.durationInBed / scores.durationAsleep);
    //   processSleepScore(api, scores, sleepScore);
    // };

    return (
      <form>
        <DurationSelect location="in-bed" />
        <DurationSelect location="asleep" />
        <button disabled>Calculate</button>
      </form>
    );
  };

export default SleepScoreForm;
