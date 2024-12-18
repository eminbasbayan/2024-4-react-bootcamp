import { useCallback, useMemo, useState } from 'react';
import MyButton from '../components/PerformanceOptimization/MyButton';
import MyElement from '../components/PerformanceOptimization/MyElement';
import MyList from '../components/PerformanceOptimization/MyList';

const HomePage = () => {
  const [toggleParagraph, setToggleParagraph] = useState(false);

  console.log('HomePage çalıştı!');

  const toggleParagraphHandler = useCallback(() => {
    setToggleParagraph((prevState) => !prevState);
  }, []);

  const listItems = useMemo(()=> [1, 2, 3, 4, 5], [])

  return (
    <div className="home-page">
      <div className="container mx-auto px-4 py-8">
        <h1>Hello</h1>
        <MyElement show={false} />
        <MyButton onClick={toggleParagraphHandler}>Toggle Paragraph</MyButton>
        <MyList items={listItems} />
      </div>
    </div>
  );
};

export default HomePage;
