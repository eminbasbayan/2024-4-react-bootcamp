import { useState } from 'react';
import MyButton from '../components/PerformanceOptimization/MyButton';
import MyElement from '../components/PerformanceOptimization/MyElement';

const HomePage = () => {
  const [toggleParagraph, setToggleParagraph] = useState(false);

  console.log('HomePage çalıştı!');

  const toggleParagraphHandler = () => {
    setToggleParagraph((prevState) => !prevState);
  };

  return (
    <div className="home-page">
      <div className="container mx-auto px-4 py-8">
        <h1>Hello</h1>
        <MyElement show={false} />
        <MyButton onClick={toggleParagraphHandler}>Toggle Paragraph</MyButton>
      </div>
    </div>
  );
};

export default HomePage;
