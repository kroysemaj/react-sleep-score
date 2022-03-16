import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SleepScoreForm from './SleepScoreForm';
import SleepScoreResult from './SleepScoreResult';

const SleepScore = () => {
  return (
    // why doesn't sx prop work on Card?
    <Card style={{ marginTop: '16px' }}>
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
