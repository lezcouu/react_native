import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';

const parseThousand = (value) => {
  return value >= 1000 ? `${Math.round(value / 1000) / 10}k` : String(value);
};
const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' fontWeight='bold'>
          FullName:
        </StyledText>
        <StyledText align='center'>{props.fullName}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>
          Description:
        </StyledText>
        <StyledText align='center'>{props.description}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>
          Language:
        </StyledText>
        <StyledText align='center'>{props.language}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>
          StargazersCount:
        </StyledText>
        <StyledText align='center'>{parseThousand(props.stargazersCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>
          ForksCount:
        </StyledText>
        <StyledText align='center'>{parseThousand(props.forksCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>
          RatingAverage:
        </StyledText>
        <StyledText align='center'>{parseThousand(props.ratingAverage)}</StyledText>
      </View>
    </View>
  );
};

const RepositoryItem = (props) => <RepositoryStats {...props} />;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  strong: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default RepositoryItem;
