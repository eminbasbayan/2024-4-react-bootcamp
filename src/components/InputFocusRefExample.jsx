import { useRef } from 'react';

const InputFocusRefExample = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Buraya yaz"
        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
        className="border"
        ref={inputRef}
      />
      <button
        className="bg-green-700 p-3 rounded-md text-white mt-2 border-2 border-transparent active:border-red-400"
        style={{ padding: '10px 20px' }}
        onClick={handleFocus}
      >
        Odağı Ayarla
      </button>
    </div>
  );
};

export default InputFocusRefExample;
