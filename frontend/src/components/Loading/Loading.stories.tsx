import { Box } from '@material-ui/core';
import { Loading } from "./Loading";

export const ShowLoading = () => <Box sx={{ backgroundColor: 'black' }}><Loading message="Loading countries..." /></Box>;

export default {
  title: 'Components/Loading',
  components: Loading
};