import { Title } from './ReusableTitle.styled';

const ReusableTitle = ({ text, show }) => {
  return <Title show={show}>{text}</Title>;
};

export default ReusableTitle;
