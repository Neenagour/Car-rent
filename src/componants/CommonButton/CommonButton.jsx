import { Button } from 'antd';

const CommonButton = ({ text, type = "primary", block = false }) => {
  return (
    <Button type={type} block={block}>
      {text}
    </Button>
  );
};

export default CommonButton;
