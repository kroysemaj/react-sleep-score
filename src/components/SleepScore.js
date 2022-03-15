import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SleepScoreForm from './SleepScoreForm';
import SleepScoreResult from './SleepScoreResult';

const SleepScore = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Let's score your latest sleep!</Typography>
        <hr />
        <SleepScoreForm />
        <SleepScoreResult />
      </CardContent>
    </Card>
  );
};

export default SleepScore;
